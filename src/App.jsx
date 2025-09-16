import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from '@/components/WelcomeScreen';
import HeroSection from '@/components/HeroSection';
import PhotoCarousel from '@/components/PhotoCarousel';
import CountdownSection from '@/components/CountdownSection';
import RSVPForm from '@/components/RSVPForm';
import GiftSection from '@/components/GiftSection';
import LocationSection from '@/components/LocationSection';
import SocialShare from '@/components/SocialShare';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  return (
    <>
      <Helmet>
        <title>¡Celebra Conmigo! - Invitación Digital de Cumpleaños</title>
        <meta name="description" content="Te invito a celebrar mi cumpleaños con una fiesta increíble. Confirma tu asistencia y únete a la diversión." />
        <meta property="og:title" content="¡Celebra Conmigo! - Invitación Digital de Cumpleaños" />
        <meta property="og:description" content="Te invito a celebrar mi cumpleaños con una fiesta increíble. Confirma tu asistencia y únete a la diversión." />
      </Helmet>
      
      <AnimatePresence>
        {showWelcome && <WelcomeScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {!showWelcome && (
        <div className="min-h-screen bg-white">
          <HeroSection />
          {/* <PhotoCarousel /> */}
          <CountdownSection />
          <RSVPForm />
          {/* <GiftSection /> */}
          <LocationSection />
          {/* <SocialShare /> */}
          <Footer />
          <Toaster />
          <MusicPlayer />
        </div>
      )}
    </>
  );
}

export default App;