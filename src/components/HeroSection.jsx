
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center confetti-bg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 floating-animation">
        <Sparkles className="w-8 h-8 text-pink-400" />
      </div>
      <div className="absolute top-20 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-6 h-6 text-yellow-400" />
      </div>
      <div className="absolute bottom-20 left-20 floating-animation" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-10 h-10 text-pink-500" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <img  
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white shadow-2xl pulse-animation mx-auto"
                alt="Foto del cumpleañero"
               src="https://images.unsplash.com/photo-1560694339-d4a9f480865b" />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full p-3">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Welcome Message */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">¡Es Mi Cumpleaños!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 font-medium"
          >
            Te invito a celebrar conmigo este día tan especial
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
          >
            <div className="glass-effect rounded-2xl p-6 text-center">
              <Calendar className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Fecha</h3>
              <p className="text-gray-600">Sábado 15 de Marzo</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Hora</h3>
              <p className="text-gray-600">8:00 PM</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 text-center">
              <MapPin className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Lugar</h3>
              <p className="text-gray-600">Salón de Fiestas Central</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' })}
            >
              ¡Confirmar Asistencia!
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
