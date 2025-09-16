import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cake, Gift, Music, Users } from 'lucide-react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    // <-- Cambia aquí la fecha objetivo si hace falta.
    // Usa formato ISO "YYYY-MM-DDTHH:mm:ss" (esto se interpreta como local en la mayoría de navegadores).
    const targetTime = new Date('2025-10-15T20:00:00').getTime();

    function update() {
      const now = Date.now();
      const distance = targetTime - now;

      if (distance <= 0) {
        // Si la fecha ya pasó, paramos el contador y marcamos expirado
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setExpired(true);
        return;
      }

      setExpired(false);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    // primer cálculo inmediato para no esperar 1s
    update();
    const intervalId = setInterval(update, 1000);

    return () => clearInterval(intervalId);
  }, []); // vacío a propósito: sólo queremos montar el intervalo una vez

  const pad = (n) => String(n).padStart(2, '0');

  const features = [
    { icon: Cake, title: "Pastel Delicioso", description: "Sabores increíbles" },
    { icon: Music, title: "Música Genial", description: "DJ en vivo" },
    { icon: Gift, title: "Sorpresas", description: "Regalos y juegos" },
    { icon: Users, title: "Grandes Amigos", description: "Diversión garantizada" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 -mt-36"
        >
          {/* título u otros elementos si los querés */}
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 z-10 relative"
        >
          {expired ? (
            <div className="text-center text-xl font-semibold">
              ¡El evento ya empezó o la fecha es pasada!
            </div>
          ) : (
            <>
              <div className="countdown-digit w-32 btn-dbz-bg">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
                <div className="text-sm md:text-base font-medium opacity-90">Días</div>
              </div>
              <div className="countdown-digit w-32 btn-dbz-bg">
                <div className="text-3xl md:text-4xl font-bold">{pad(timeLeft.hours)}</div>
                <div className="text-sm md:text-base font-medium opacity-90">Horas</div>
              </div>
              <div className="countdown-digit w-32 btn-dbz-bg">
                <div className="text-3xl md:text-4xl font-bold">{pad(timeLeft.minutes)}</div>
                <div className="text-sm md:text-base font-medium opacity-90">Minutos</div>
              </div>
              <div className="countdown-digit w-32 btn-dbz-bg">
                <div className="text-3xl md:text-4xl font-bold">{pad(timeLeft.seconds)}</div>
                <div className="text-sm md:text-base font-medium opacity-90">Segundos</div>
              </div>
            </>
          )}
        </motion.div>

        {/* Features Grid */}
        <div className="relative max-w-6xl mx-auto p-8">
          {/* Imagen de fondo en el fondo absoluto */}
          <div className="absolute inset-0 z-0">
            <img
              src="bg-contoudw.jpg"
              alt="Fondo de las cards"
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar contraste */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Contenedor de las cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="btn-dbz-bg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white drop-shadow-md mb-2">{feature.title}</h3>
                <p className="text-white drop-shadow-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default CountdownSection;
