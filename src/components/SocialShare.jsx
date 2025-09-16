
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Facebook, Twitter, Instagram, MessageCircle, Link } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SocialShare = () => {
  const { toast } = useToast();
  
  const shareText = "¡Estás invitado a mi cumpleaños! 🎉 No te pierdas esta celebración increíble.";
  const shareUrl = window.location.href;

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank', 'width=600,height=400');
      }
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      action: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
      }
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-600 hover:bg-green-700',
      action: () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      action: () => {
        toast({
          title: "¡Comparte en Instagram! 📸",
          description: "Toma una captura de pantalla y compártela en tu historia de Instagram.",
        });
      }
    }
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "¡Enlace copiado! 🔗",
        description: "Ya puedes compartir la invitación donde quieras.",
      });
    } catch (err) {
      toast({
        title: "Error al copiar",
        description: "Por favor copia manualmente la URL.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-pink-100 to-yellow-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            ¡Comparte la Invitación!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ayúdame a invitar a más amigos compartiendo esta invitación en tus redes sociales
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {socialPlatforms.map((platform, index) => (
              <motion.button
                key={platform.name}
                onClick={platform.action}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`social-button ${platform.color} text-white p-6 rounded-2xl flex flex-col items-center space-y-3 shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <platform.icon className="w-8 h-8" />
                <span className="font-semibold">{platform.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Copy Link Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 text-center"
          >
            <Share2 className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              O Copia el Enlace
            </h3>
            <p className="text-gray-600 mb-6">
              Comparte directamente el enlace de esta invitación
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1 bg-white rounded-2xl p-4 border-2 border-dashed border-pink-200">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="w-full text-gray-600 bg-transparent outline-none text-sm md:text-base"
                />
              </div>
              <motion.button
                onClick={copyLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center space-x-2 px-6"
              >
                <Link className="w-4 h-4" />
                <span>Copiar</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Share Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center space-x-6 bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">0</div>
                <div className="text-sm text-gray-600">Compartidos</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">0</div>
                <div className="text-sm text-gray-600">Confirmados</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialShare;
