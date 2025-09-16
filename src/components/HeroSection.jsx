
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
<section className="relative py-12 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D32F2F] to-[#F57C00] overflow-hidden">
  {/* Decorative floating elements */}
  <div className="absolute top-2 right-10 animate-float" style={{ animationDelay: '2s' }}>
    <img className="h-24 md:h-32" src="vegetaSJ.png" alt="" />
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
        className="font-semibold text-lg sm:text-xl md:text-2xl text-white mb-8"
      >
        Te invito a celebrar conmigo este día tan especial
      </motion.p>

      {/* Event Details Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
      >
        {/* Card Template */}
        {[
          { icon: 'Calendar', title: 'Fecha', text: 'Sábado 15 de Marzo', img: 'image-dbz-herosection.jpg', color: 'text-pink-500' },
          { icon: 'Clock', title: 'Hora', text: '8:00 PM', img: 'gokuimghero.jpg', color: 'text-yellow-500' },
          { icon: 'MapPin', title: 'Lugar', text: 'Salón de Fiestas Central', img: 'vegetaimghero.jpg', color: 'text-pink-500' },
        ].map((card, i) => (
          <div key={i} className="glass-effect relative p-6 text-center overflow-hidden rounded-2xl shadow-lg">
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
              {card.icon === 'Calendar' && <Calendar className={`w-12 h-12 md:w-14 md:h-14 ${card.color} mb-3 drop-shadow-lg`} />}
              {card.icon === 'Clock' && <Clock className={`w-12 h-12 md:w-14 md:h-14 ${card.color} mb-3 drop-shadow-lg`} />}
              {card.icon === 'MapPin' && <MapPin className={`w-12 h-12 md:w-14 md:h-14 ${card.color} mb-3 drop-shadow-lg`} />}
              <h3 className="font-semibold text-white text-lg md:text-xl mb-1 drop-shadow-md">{card.title}</h3>
              <p className="text-gray-100 text-sm md:text-base drop-shadow-sm">{card.text}</p>
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
          className="btn-dbz-bg text-xl md:text-2xl px-6 md:px-8 py-3 md:py-4 flex items-center gap-3 justify-center rounded-lg"
        >
          <img
            className="w-36 h-10 md:w-48 md:h-12 drop-shadow-lg"
            src="confirmar-asistencia-btn.png"
            alt="Dragon Ball"
          />
        </motion.button>
      </motion.div>
    </motion.div>
  </div>
</section>

  );
};

export default HeroSection;
