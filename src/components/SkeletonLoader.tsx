import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'image' | 'menu-item';
  className?: string;
}

export default function SkeletonLoader({ type = 'card', className = '' }: SkeletonLoaderProps) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';
  
  const skeletonTypes = {
    card: (
      <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
        <div className={`${baseClasses} w-3/4 h-6 mb-4`}></div>
        <div className={`${baseClasses} w-1/2 h-4 mb-2`}></div>
        <div className={`${baseClasses} w-full h-4 mb-4`}></div>
        <div className={`${baseClasses} w-2/3 h-4`}></div>
      </div>
    ),
    text: (
      <div className={`space-y-2 ${className}`}>
        <div className={`${baseClasses} w-full h-4`}></div>
        <div className={`${baseClasses} w-3/4 h-4`}></div>
        <div className={`${baseClasses} w-1/2 h-4`}></div>
      </div>
    ),
    image: (
      <div className={`${baseClasses} w-full h-48 ${className}`}></div>
    ),
    'menu-item': (
      <div className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}>
        <div className={`${baseClasses} w-full h-32`}></div>
        <div className="p-6">
          <div className={`${baseClasses} w-3/4 h-6 mb-2`}></div>
          <div className={`${baseClasses} w-1/2 h-4 mb-4`}></div>
          <div className={`${baseClasses} w-2/3 h-4`}></div>
        </div>
      </div>
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {skeletonTypes[type]}
    </motion.div>
  );
} 