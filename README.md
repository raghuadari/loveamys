# Love Amy's Bakery

A modern, Gen Z-focused single-page application for a home bakery business. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🍪 Menu showcase
- 📸 Gallery with images and videos
- 💬 Customer testimonials
- 📱 Social media integration
- 🛍️ Order placement system
- 📝 About section
- 🔗 Contact information

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Icons
- Framer Motion (for animations)

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd loveamys
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

1. Add the following to your `package.json`:
```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy": "npm run export && touch out/.nojekyll && gh-pages -d out -t true"
  }
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Create a GitHub repository and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [your-repo-url]
git push -u origin main
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

5. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as source
   - Save the settings

Your site will be available at `https://[your-username].github.io/[repo-name]`

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable components
├── lib/                 # Utility functions
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
