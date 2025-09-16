
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const LocationSection = () => {
  const venueDetails = {
    name: "Salón de Fiestas Central",
    address: "Av. Libertador 1234, Ciudad Autónoma de Buenos Aires",
    phone: "+54 11 1234-5678",
    hours: "Abierto hasta las 2:00 AM"
  };

  const openInMaps = () => {
    const query = encodeURIComponent(venueDetails.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            ¿Cómo Llegar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aquí encontrarás toda la información para llegar al lugar de la celebración
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="map-container"
            >
              <div className="relative h-96 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-2xl overflow-hidden">
                {/* Placeholder for interactive map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-pink-500 mx-auto mb-4 floating-animation" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Mapa Interactivo</h3>
                    <p className="text-gray-600 mb-4">Haz clic para abrir en Google Maps</p>
                    <button
                      onClick={openInMaps}
                      className="btn-primary"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Abrir en Maps
                    </button>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </motion.div>

            {/* Venue Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Venue Name */}
              <div className="glass-effect rounded-3xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {venueDetails.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {venueDetails.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="glass-effect rounded-3xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-pink-400 rounded-full p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Contacto del Lugar
                    </h3>
                    <p className="text-gray-600">
                      {venueDetails.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="glass-effect rounded-3xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full p-3 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Horarios
                    </h3>
                    <p className="text-gray-600">
                      {venueDetails.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <motion.button
                onClick={openInMaps}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-2"
              >
                <Navigation className="w-5 h-5" />
                <span>Obtener Direcciones</span>
              </motion.button>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-2xl p-6 border-2 border-dashed border-pink-200">
                <h4 className="font-semibold text-gray-800 mb-2">Información Adicional</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Estacionamiento gratuito disponible</li>
                  <li>• Acceso para personas con movilidad reducida</li>
                  <li>• Transporte público: Líneas 10, 37, 152</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
