const { SENDGRID_API_KEY, TO_EMAIL } = process.env;

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, category, item, date, quantity, details } = data;

    // Get the selected item name from the menu categories
    const menuCategories = [
      {
        id: 'buns',
        label: 'Buns',
        items: [
          { id: 'korean-cream-cheese', name: 'Korean Cream Cheese Buns' },
          { id: 'cream-buns', name: 'Cream Buns' }
        ]
      },
      {
        id: 'bombolinis',
        label: 'Bombolinis',
        items: [
          { id: 'bombolini-dark', name: 'Dark Chocolate Bombolini' },
          { id: 'bombolini-milk', name: 'Milk Chocolate Bombolini' },
          { id: 'bombolini-white', name: 'White Chocolate Bombolini' },
          { id: 'bombolini-mango', name: 'Mango Cream Bombolini' },
          { id: 'bombolini-strawberry', name: 'Strawberry Bombolini' },
          { id: 'bombolini-blueberry', name: 'Blueberry Bombolini' },
          { id: 'bombolini-nutella', name: 'Nutella Bombolini' }
        ]
      },
      {
        id: 'brownies',
        label: 'Brownies',
        items: [
          { id: 'brownie-classic', name: 'Classic Brownie' },
          { id: 'brownie-cookie', name: 'Cookie Crumble Brownie' },
          { id: 'brownie-double', name: 'Double Chocolate Brownie' },
          { id: 'brownie-nutella', name: 'Nutella Brownie' },
          { id: 'brownie-biscoff', name: 'Biscoff Brownie' }
        ]
      },
      {
        id: 'cakes',
        label: 'Cakes',
        items: [
          { id: 'classic-vanilla', name: 'Classic Vanilla Cake' },
          { id: 'biscoff-cake', name: 'Biscoff Cake' },
          { id: 'strawberry-cake', name: 'Strawberry Cake' },
          { id: 'blueberry-cake', name: 'Blueberry Cake' },
          { id: 'mango-cake', name: 'Mango Cake' },
          { id: 'chocolate-cake', name: 'Chocolate Cake' },
          { id: 'chocolate-mango-cake', name: 'Chocolate & Mango Cake' },
          { id: 'red-velvet-cream-cheese', name: 'Red Velvet with Cream Cheese Cake' },
          { id: 'almond-praline', name: 'Almond Praline Cake' }
        ]
      },
      {
        id: 'cheesecakes',
        label: 'Cheesecakes',
        items: [
          { id: 'plain-cheesecake', name: 'Plain Cheesecake' },
          { id: 'nutella-topping', name: 'Nutella Cheesecake' },
          { id: 'biscoff-topping', name: 'Biscoff Cheesecake' },
          { id: 'blueberry-topping', name: 'Blueberry Cheesecake' },
          { id: 'mango-topping', name: 'Mango Cheesecake (limited edition)' }
        ]
      },
      {
        id: 'muffins',
        label: 'Butter Muffins',
        items: [
          { id: 'muffin-almond', name: 'Almond Muffin' },
          { id: 'muffin-chocochip', name: 'Chocochip Muffin' }
        ]
      },
      {
        id: 'cookies',
        label: 'NYC Cookies',
        items: [
          { id: 'cookie-double', name: 'Double Chocolate Cookie' },
          { id: 'cookie-chocochip', name: 'Chocochip Cookie' }
        ]
      },
      {
        id: 'breads',
        label: 'Breads',
        items: [
          { id: 'sourdough', name: 'Sourdough' },
          { id: 'whole-wheat-bread', name: 'Whole Wheat Bread' },
          { id: 'shokupan-bread', name: 'Shokupan Bread' }
        ]
      }
    ];

    const selectedCategory = menuCategories.find(cat => cat.id === category);
    const selectedItem = selectedCategory?.items.find(i => i.id === item);
    const itemName = selectedItem?.name || item;

    const emailData = {
      to: TO_EMAIL || 'loveamys.bakes@gmail.com',
      from: 'orders@loveamys.netlify.app',
      subject: `New Order from ${name}`,
      text: `
New Order Details:

Name: ${name}
Email: ${email}
Phone: ${phone}

Order:
Item: ${itemName}
Category: ${selectedCategory?.label || category}
Quantity: ${quantity}
Preferred Date: ${date}

Additional Details:
${details || 'None provided'}

This order was submitted through the Love Amy's Bakery website.
      `,
      html: `
        <h2>New Order Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Order</h3>
        <p><strong>Item:</strong> ${itemName}</p>
        <p><strong>Category:</strong> ${selectedCategory?.label || category}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        
        <h3>Additional Details</h3>
        <p>${details || 'None provided'}</p>
        
        <hr>
        <p><em>This order was submitted through the Love Amy's Bakery website.</em></p>
      `
    };

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: emailData.to }]
        }],
        from: { email: emailData.from },
        subject: emailData.subject,
        content: [
          {
            type: 'text/plain',
            value: emailData.text
          },
          {
            type: 'text/html',
            value: emailData.html
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`SendGrid API error: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Order submitted successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send order email' })
    };
  }
}; 