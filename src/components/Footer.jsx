
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#D32F2F] to-[#F57C00] text-white section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Decorative Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <img src='gokussj4daima.png' className="w-32 h-36 floating-animation drop-shadow-[2px_1px_1px_rgba(0,0,0,0.6)]" />
            <img src='picolodaima.png' className="w-32 h-36 floating-animation drop-shadow-[2px_1px_1px_rgba(0,0,0,0.6)]" style={{ animationDelay: '1s' }} />
            <img src='vegetassj3daima.png' className="w-32 h-36 floating-animation drop-shadow-[2px_1px_1px_rgba(0,0,0,0.6)]" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main Message */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              ¡Gracias por ser parte de mi fiesta!
            </p>
            <p className="text-lg opacity-90">
              Tu presencia es lo que hace que cada momento sea especial. 
              ¡Nos vemos en el cumple más increíble del año!
            </p>
          </div>

          {/* Event Reminder */}
          <div className="bg-white/20 backdrop-blur-sm  p-6 max-w-md mx-auto mb-8 ">
            <p className="font-semibold mb-2">📅 Recordatorio</p>
            <p className="text-sm opacity-90">
              Sábado 15 de Octubre • 16:00 PM hasta 18:00 34<br />
              Salón de Fiestas Central
            </p>
          </div>

          {/* Final Message */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm opacity-75">
              Hecho con <Heart className="w-4 h-4 inline mx-1" /> para una celebración inolvidable
            </p>
            <p className="text-xs opacity-60 mt-2">
              © 2025 • Invitación Digital de Cumpleaños
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
