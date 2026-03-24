import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/919229950050?text=Hi, I\'m interested in interior design services. I found InterioInn online.', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.button>
  );
}
