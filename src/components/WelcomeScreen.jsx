import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PartyPopper } from 'lucide-react';

const WelcomeScreen = ({ onEnter }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center from-pink-100 via-white to-yellow-100 p-4 text-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 spin-medium">
        <img className="h-24" src="esferasdeldragon.png" alt="" />
      </div>
      <div className="absolute top-5 right-10 floating-animation" style={{ animationDelay: '2s' }}>
        <img className="h-32" src="vegetaSJ.png" alt="" />
      </div>
      <div className="absolute bottom-20 left-10 floating-animation" style={{ animationDelay: '4s' }}>
        <img className="h-32" src="gohanSSJ2.png" alt="" />
      </div>
      <div className="absolute bottom-10 right-5 floating-animation" style={{ animationDelay: '1s' }}>
        <img className="h-32" src="coku-chikito.png" alt="" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
      >
<img 
  className="w-48 h-48 md:w-64 md:h-64 object-cover pulse-animation mx-auto drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]"
  alt="dragon ball z" 
  src="dragonballz-inicio.png" 
/>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold my-6 flex flex-col space-y-4 justify-center items-center"
      >
        <img className='w-80 h-26 md:w-64 md:h-26 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]' src="BEnjamin.png" alt="" />
        <img className='w-48 h-26 md:w-64 md:h-26 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]' src="10-años.png" alt="" />
      </motion.h1>

      {/* <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-xl md:text-2xl text-white bold mb-12 font-medium max-w-xl mx-auto"
      >
        ¡TE INVITO A MI CUMPLEAÑOS!
      </motion.p> */}

      <motion.button
        onClick={onEnter}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1, type: 'spring', stiffness: 150 }}
        whileHover={{ scale: 1.05, boxShadow: '0 12px 35px rgba(244, 154, 194, 0.6)' }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary text-xl md:text-2xl px-10 py-5"
      >
        <img className='w-48 h-26 md:w-64 md:h-26 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]' src="vamos.png" alt="" />
      </motion.button>
    </motion.div>
  );
};

export default WelcomeScreen;