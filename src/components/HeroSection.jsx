
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
<section className="relative py-12 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D32F2F] to-[#F57C00] overflow-hidden">
  {/* Decorative floating elements */}
  <div className="absolute top-2 right-10 animate-float drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]" style={{ animationDelay: '2s' }}>
    <img className="h-52 md:h-32 floating-animation" src="vegetaSJ.png" alt="" />
  </div>
    <div className="absolute bottom-10 left-2animate-float drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]" style={{ animationDelay: '2s' }}>
    <img className="h-36 md:h-32 floating-animation" src="coku-chikito.png" alt="" />
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      {/* Welcome Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
      >
        <span className="gradient-text">¡Es Mi Cumpleaños!</span>
      </motion.h1>
 <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex mx-auto  uppercase font-semibold text-2xl sm:text-xl md:text-2xl text-white mb-8 w-7/12 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]"
      >
        <h2 className='bg-blue-700 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]'> ¡Te invito a mi cumple! </h2> 
        </motion.p>

      {/* Event Details Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
      >
        {/* Card Template */}
        {[
          { icon: 'Calendar', title: 'Fecha', text: 'Sábado 15 de Octubre', img: 'image-dbz-herosection.jpg', color: 'text-orange-500' },
          { icon: 'Clock', title: 'Hora', text: 'de 16:00 PM a 18:00 PM', img: 'gokuimghero.jpg', color: 'text-orange-500' },
          { icon: 'MapPin', title: 'Lugar', text: 'Salón de Fiestas Central', img: 'vegetaimghero.jpg', color: 'text-orange-500' },
        ].map((card, i) => (
          <div key={i} className="glass-effect relative p-6 text-center overflow-hidden  shadow-lg">
            {/* Background Image */}
            <img
              src={card.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 object-center"
            />
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              {card.icon === 'Calendar' && <Calendar className={`w-12 h-12 md:w-14 md:h-14 ${card.color} mb-3 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]`} />}
              {card.icon === 'Clock' && <Clock className={`w-12 h-12 md:w-14 md:h-14 ${card.color} mb-3 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]`} />}
              {card.icon === 'MapPin' && <MapPin className={`w-12 h-12 md:w-14 md:h-14 ${card.color} mb-3 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]`} />}
              <h3 className="font-semibold text-white text-lg md:text-xl mb-1 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]">{card.title}</h3>
              <p className="text-gray-100 text-sm md:text-base drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]">{card.text}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex justify-center"
      >
        <motion.button
          onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05, boxShadow: '0 12px 35px rgba(244, 154, 194, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          className="btn-dbz-bg btn-primary w-26 text-xl py-4 flex items-center justify-center space-x-2 top-8 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]"
        >
   <span className='drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]'>CONFIRMAR ASISTENCIA</span>
        </motion.button>
       
      </motion.div>
    </motion.div>
  </div>
</section>

  );
};

export default HeroSection;
