import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cake, Gift, Music, Users } from 'lucide-react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const targetTime = new Date('2025-10-15T20:00:00').getTime();

    function update() {
      const now = Date.now();
      const distance = targetTime - now;

      if (distance <= 0) {
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

    update();
    const intervalId = setInterval(update, 1000);
    return () => clearInterval(intervalId);
  }, []);

const pad = (n) => String(n).padStart(2, '0');

  const features = [
    { icon: Cake, title: 'Pastel Delicioso', description: 'Sabores increíbles' },
    { icon: Music, title: 'Música Genial', description: 'DJ en vivo' },
    { icon: Gift, title: 'Sorpresas', description: 'Regalos y juegos' },
    { icon: Users, title: 'Grandes Amigos', description: 'Diversión garantizada' },
  ];

  return (
    <section className="relative section-padding min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop: parallax */}
        <div
          className="hidden md:block w-full h-full bg-[url('bg-contoudw.jpg')] bg-cover bg-center bg-fixed"
        />
        {/* Mobile: solo cover y centered */}
        <div
          className="block md:hidden w-full h-full bg-[url('bg-contoudw.jpg')] bg-cover bg-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
        >
          {expired ? (
            <div className="text-center text-xl font-semibold text-white">
              ¡El evento ya empezó o la fecha es pasada!
            </div>
          ) : (
            <>
              {['Días', 'Horas', 'Minutos', 'Segundos'].map((label, i) => {
                const value = [timeLeft.days, pad(timeLeft.hours), pad(timeLeft.minutes), pad(timeLeft.seconds)][i];
                return (
                  <div key={i} className="countdown-digit w-28 sm:w-32 btn-dbz-bg p-4 rounded-lg">
                    <div className="text-3xl sm:text-4xl font-bold text-white">{value}</div>
                    <div className="text-sm sm:text-base font-medium opacity-90 text-white">{label}</div>
                  </div>
                );
              })}
            </>
          )}
        </motion.div>

        {/* Features Grid */}
        <div className="relative max-w-6xl mx-auto p-4 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 text-center hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <div className="btn-dbz-bg w-16 h-16 flex items-center justify-center mx-auto mb-4 rounded-full">
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
