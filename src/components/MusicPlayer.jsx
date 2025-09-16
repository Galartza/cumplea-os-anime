import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  // ⏳ Arrancar solo después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setPlaying(true))
          .catch((err) => console.log("Autoplay bloqueado:", err));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white/70 backdrop-blur-md p-3 shadow-lg flex items-center space-x-2 cursor-pointer z-50 ">
      <button onClick={togglePlay} className="flex items-center space-x-2">
        {playing ? (
          <>
            <Pause className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold">Pausar música</span>
          </>
        ) : (
          <>
            <Play className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold">Reproducir música</span>
          </>
        )}
      </button>
      <audio ref={audioRef} src="/music/cancion.mp3" loop />
    </div>
  );
};

export default MusicPlayer;
