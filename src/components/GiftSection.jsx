
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Copy, Check, CreditCard, Heart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const GiftSection = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  // Example CBU number
  const cbuNumber = "0000003100010000000001";
  const alias = "CUMPLE.FELIZ";

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: `${type} copiado! 📋`,
        description: "Ya puedes pegarlo en tu aplicación bancaria.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error al copiar",
        description: "Por favor copia manualmente el número.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-yellow-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Regalos Digitales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Si quieres hacerme un regalo, aquí tienes mis datos bancarios. ¡Pero tu presencia es el mejor regalo!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gift Message */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Tu Presencia es mi Regalo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lo más importante para mí es que puedas acompañarme en este día especial. 
                  Pero si quieres contribuir con algo para la celebración, aquí están mis datos.
                </p>
              </div>
              
              <div className="text-center">
                <Gift className="w-16 h-16 text-pink-400 mx-auto floating-animation" />
              </div>
            </motion.div>

            {/* Banking Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* CBU Card */}
              <div className="glass-effect rounded-3xl p-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-pink-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">CBU</h3>
                </div>
                <div className="bg-white rounded-2xl p-4 border-2 border-dashed border-pink-200">
                  <div className="font-mono text-lg text-gray-800 mb-3 break-all">
                    {cbuNumber}
                  </div>
                  <button
                    onClick={() => copyToClipboard(cbuNumber, "CBU")}
                    className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span className="text-sm font-medium">
                      {copied ? "¡Copiado!" : "Copiar CBU"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Alias Card */}
              <div className="glass-effect rounded-3xl p-6">
                <div className="flex items-center mb-4">
                  <Gift className="w-6 h-6 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Alias</h3>
                </div>
                <div className="bg-white rounded-2xl p-4 border-2 border-dashed border-yellow-200">
                  <div className="font-mono text-lg text-gray-800 mb-3">
                    {alias}
                  </div>
                  <button
                    onClick={() => copyToClipboard(alias, "Alias")}
                    className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span className="text-sm font-medium">
                      {copied ? "¡Copiado!" : "Copiar Alias"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Thank You Note */}
              <div className="bg-gradient-to-r from-pink-500 to-yellow-400 rounded-3xl p-6 text-white text-center">
                <h4 className="text-lg font-semibold mb-2">¡Gracias por tu generosidad!</h4>
                <p className="text-sm opacity-90">
                  Cualquier contribución será muy apreciada y ayudará a hacer esta celebración aún más especial.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
