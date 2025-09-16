
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    { id: 1, description: "Celebrando con amigos en mi cumpleaños anterior" },
    { id: 2, description: "Momentos divertidos con la familia" },
    { id: 3, description: "Fiesta sorpresa del año pasado" },
    { id: 4, description: "Celebrando con pastel y globos" },
    { id: 5, description: "Diversión y risas con mis seres queridos" },
    { id: 6, description: "Recuerdos especiales de cumpleaños" }
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-pink-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Momentos Especiales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Revive conmigo algunos de los mejores momentos de celebraciones pasadas
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="flex space-x-6 overflow-hidden">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 h-80 relative group cursor-pointer"
              >
                <img  
                  className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  alt={photo.description}
                 src="https://images.unsplash.com/photo-1637308606457-cb71714feeb9" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{photo.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {photos.map((photo) => (
                <div key={photo.id} className="w-full flex-shrink-0">
                  <img  
                    className="w-full h-80 object-cover"
                    alt={photo.description}
                   src="https://images.unsplash.com/photo-1633362967859-fde6c856274d" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">{photo.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
