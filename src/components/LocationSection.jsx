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
    <section
      className="relative section-padding min-h-screen flex flex-col items-center justify-center overflow-hidden
                 bg-[url('bg-contoudw.jpg')] bg-cover bg-center bg-fixed"
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-white">
            ¿Cómo Llegar?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Aquí encontrarás toda la información para llegar al lugar de la celebración
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="map-container"
            >
              <div className="relative h-96 bg-transparent overflow-hidden  shadow-lg">
                {/* Placeholder para mapa interactivo */}
                <div className="absolute inset-0 flex items-center justify-center">
                                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094973!2d144.95373531531886!3d-37.81627997975127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c7f6b28f7e5e!2sGoogle!5e0!3m2!1ses-419!2sar!4v1693853734567!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Google"
              />
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-pink-400 animate-pulse"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-pink-300 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </motion.div>

            {/* Detalles del lugar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Nombre del lugar */}
              <div className="glass-effect p-6 ">
                <div className="flex items-start space-x-4">
                  <div className="btn-dbz-bg p-3 flex-shrink-0 ">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {venueDetails.name}
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {venueDetails.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contacto */}
              {/* <div className="glass-effect p-6 ">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-pink-400 p-3 flex-shrink-0 ">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Contacto del Lugar
                    </h3>
                    <p className="text-gray-200">
                      {venueDetails.phone}
                    </p>
                  </div>
                </div>
              </div> */}

              {/* Horarios */}
              {/* <div className="glass-effect p-6 ">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-yellow-400 p-3 flex-shrink-0 ">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Horarios
                    </h3>
                    <p className="text-gray-200">
                      {venueDetails.hours}
                    </p>
                  </div>
                </div>
              </div> */}

              {/* Botón de direcciones */}
              <motion.button
                onClick={openInMaps}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-2 "
              >
                <Navigation className="w-5 h-5" />
                <span>Obtener Direcciones</span>
              </motion.button>

              {/* Información adicional */}
              <div className="bg-black/30 p-6 border-2 border-dashed border-pink-200 ">
                <h4 className="font-semibold text-white mb-2">Información Adicional</h4>
                <ul className="text-sm text-gray-200 space-y-1">
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
