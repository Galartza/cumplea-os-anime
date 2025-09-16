
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D32F2F] to-[#F57C00] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 floating-animation" style={{ animationDelay: '2s' }}>
        <img className="h-32" src="vegetaSJ.png" alt="" />
      </div>
      {/* <div className="absolute top-20 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <img className="h-32" src="vegetaSJ.png" alt="" />
      </div> */}
      <div className="absolute bottom-20 left-10 floating-animation" style={{ animationDelay: '4s' }}>
        <img className="h-32" src="coku-chikito.png" alt="" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          {/* <motion.div
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
          </motion.div> */}

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
            className="font-bold text-xl md:text-2xl text-white mb-8 "
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
            <div className="glass-effect relative p-6 text-center overflow-hidden">
              {/* Imagen de fondo decorativa */}
              <img
                src="image-dbz-herosection.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 object-[center_bottom]"
              />

              {/* Overlay para contraste */}
              <div className="absolute inset-0 bg-black/80 z-0"></div>

              {/* Contenido por encima */}
              <div className="relative z-10">
                <Calendar className="w-8 h-20 text-pink-500 mx-auto mb-3 drop-shadow-lg" />
                <h3 className="font-semibold text-white mb-2 drop-shadow-md">Fecha</h3>
                <p className="text-gray-100 drop-shadow-md">Sábado 15 de Marzo</p>
              </div>
            </div>

            <div className="glass-effect relative p-6 text-center overflow-hidden">
              {/* Imagen de fondo decorativa */}
              <img
                src="gokuimghero.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 object-[center_bottom]"
              />

              {/* Overlay para contraste */}
              <div className="absolute inset-0 bg-black/80 z-0"></div>

              {/* Contenido por encima */}
              <div className="relative z-10">
                <Clock className="w-8 h-20 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2 drop-shadow-md">Hora</h3>
                <p className="text-gray-100 drop-shadow-md">8:00 PM</p>
              </div>
            </div>



            <div className="glass-effect relative p-6 text-center overflow-hidden">
              {/* Imagen de fondo decorativa */}
              <img
                src="vegetaimghero.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 object-[center_bottom]"
              />

              {/* Overlay para contraste */}
              <div className="absolute inset-0 bg-black/80 z-0"></div>

              {/* Contenido por encima */}
              <div className="relative z-10">
                <MapPin className="w-8 h-20 text-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2 drop-shadow-md">Lugar</h3>
                <p className="text-gray-100 drop-shadow-md">Salón de Fiestas Central</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='flex justify-center'
          >
            <motion.button
              onClick={() => document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 35px rgba(244, 154, 194, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-dbz-bg text-xl md:text-2xl px-8 py-4 flex items-center gap-3 justify-center "
            >
              {/* Imagen dentro del botón */}
              <img
                className="w-60 h-10 md:w-12 md:h-12 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
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
