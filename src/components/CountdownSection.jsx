
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

  // Set birthday date (March 15, 2025 at 8:00 PM)
  const birthdayDate = new Date('2025-03-15T20:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthdayDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdayDate]);

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            ¡La Cuenta Regresiva Ha Comenzado!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Faltan muy pocos días para la celebración más increíble del año
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
        >
          <div className="countdown-digit">
            <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
            <div className="text-sm md:text-base font-medium opacity-90">Días</div>
          </div>
          <div className="countdown-digit">
            <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm md:text-base font-medium opacity-90">Horas</div>
          </div>
          <div className="countdown-digit">
            <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm md:text-base font-medium opacity-90">Minutos</div>
          </div>
          <div className="countdown-digit">
            <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm md:text-base font-medium opacity-90">Segundos</div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
