
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Music, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    song: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attendance) {
      toast({
        title: "¡Ups! Faltan datos",
        description: "Por favor completa tu nombre y confirma tu asistencia.",
        variant: "destructive"
      });
      return;
    }

    // Save to localStorage
    const existingRSVPs = JSON.parse(localStorage.getItem('birthdayRSVPs') || '[]');
    const newRSVP = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    existingRSVPs.push(newRSVP);
    localStorage.setItem('birthdayRSVPs', JSON.stringify(existingRSVPs));

    toast({
      title: "¡Confirmación recibida! 🎉",
      description: "Gracias por confirmar tu asistencia. ¡Te esperamos!",
    });

    // Reset form
    setFormData({
      name: '',
      attendance: '',
      song: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="rsvp" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            ¡Confirma Tu Asistencia!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tu presencia hará que esta celebración sea aún más especial
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="form-input w-full pl-12 pr-4 py-4 rounded-2xl text-lg"
                required
              />
            </div>

            {/* Attendance Selection */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800">
                ¿Podrás acompañarme?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                    formData.attendance === 'yes'
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}>
                    <div className="text-2xl mb-2">🎉</div>
                    <div className="font-semibold">¡Sí, estaré ahí!</div>
                  </div>
                </label>
                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                    formData.attendance === 'no'
                      ? 'border-gray-500 bg-gray-50 text-gray-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="text-2xl mb-2">😢</div>
                    <div className="font-semibold">No podré asistir</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Song Request */}
            <div className="relative">
              <Music className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="song"
                value={formData.song}
                onChange={handleChange}
                placeholder="¿Qué canción te gustaría escuchar? (opcional)"
                className="form-input w-full pl-12 pr-4 py-4 rounded-2xl text-lg"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageCircle className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Déjame un mensaje especial (opcional)"
                rows="4"
                className="form-input w-full pl-12 pr-4 py-4 rounded-2xl text-lg resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full text-xl py-4 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Enviar Confirmación</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPForm;
