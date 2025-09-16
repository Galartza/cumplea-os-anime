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

  // 👉 Reemplaza este número con el del anfitrión (incluye código de país, sin + ni 0 iniciales)
  const hostPhone = "543562564401";

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

    // Guardar en localStorage
    const existingRSVPs = JSON.parse(localStorage.getItem('birthdayRSVPs') || '[]');
    const newRSVP = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    existingRSVPs.push(newRSVP);
    localStorage.setItem('birthdayRSVPs', JSON.stringify(existingRSVPs));

    // Crear mensaje de WhatsApp
    const attendanceText =
      formData.attendance === 'yes'
        ? '✅ Sí, estaré ahí'
        : '❌ No podré asistir';

    let message = `🎉 Confirmación de asistencia 🎉\n\n`;
    message += `👤 Nombre: ${formData.name}\n`;
    message += `📌 Asistencia: ${attendanceText}\n`;
    if (formData.song) message += `🎶 Canción pedida: ${formData.song}\n`;
    if (formData.message) message += `💌 Mensaje: ${formData.message}\n`;

    const url = `https://wa.me/${hostPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    toast({
      title: "¡Confirmación enviada por WhatsApp! 🎉",
      description: "Gracias por confirmar tu asistencia.",
    });

    // Resetear formulario
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
    <section id="rsvp" className="section-padding bg-gradient-to-br from-[#D32F2F] to-[#F57C00]">
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
          <p className="text-xl text-white font-bold max-w-2xl mx-auto">
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
            {/* Nombre */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="form-input w-full pl-12 pr-4 py-4 text-lg"
                required
              />
            </div>

            {/* Asistencia */}
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
                  <div
                    className={`p-4 border-2 text-center transition-all duration-300 ${
                      formData.attendance === 'yes'
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
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
                  <div
                    className={`p-4 border-2 text-center transition-all duration-300 ${
                      formData.attendance === 'no'
                        ? 'border-gray-500 bg-gray-50 text-gray-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">😢</div>
                    <div className="font-semibold">No podré asistir</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Canción */}
            <div className="relative">
              <Music className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="song"
                value={formData.song}
                onChange={handleChange}
                placeholder="Canción que no puede faltar (opcional)"
                className="form-input w-full pl-12 pr-4 py-4 text-lg"
              />
            </div>

            {/* Mensaje */}
            <div className="relative">
              <MessageCircle className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Déjame un mensaje especial (opcional)"
                rows={4}
                className="form-input w-full pl-12 pr-4 py-4 text-lg resize-none"
              />
            </div>

            {/* Botón */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-dbz-bg btn-primary w-full text-xl py-4 flex items-center justify-center space-x-2 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]"
            >
              <Send className="w-5 h-5 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]" />
              <span className='drop-shadow-[4px_4px_1px_rgba(0,0,0,0.6)]'>Confirmar por WhatsApp</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPForm;
