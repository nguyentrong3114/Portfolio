import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const tracks = [
  {
    title: "Mashup",
    artist: "Nhiều Nghệ Sĩ",
    src: "/assets/music/mashup-remix.mp3",
    cover: "/assets/music/img/mashup.png",
  },
  {
    title: "Kịch bản tồi tệ",
    artist: "LBI Lợi Bỉ",
    src: "/assets/music/kichbantoite.mp3",
    cover: "/assets/music/img/kichbantoite.png",
  },
  {
    title: "Tháp rơi tự do",
    artist: "LBI Lợi Bỉ",
    src: "/assets/music/thaproitudo.mp3",
    cover: "/assets/music/img/thaproitudo.png",
  },
];

function formatTime(sec: number) {
  if (isNaN(sec)) return "00:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
}

export default function AudioPlayer() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (playing) {
      audioRef.current?.play();
      controls.start({ rotate: 360, transition: { repeat: Infinity, duration: 5, ease: "linear" } });
    } else {
      audioRef.current?.pause();
      controls.stop();
    }
  }, [playing, current, controls]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume;
    }
  }, [volume, muted, current]);

  const handlePlayPause = () => setPlaying((p) => !p);

  const handleNext = () => {
    if (shuffle) {
      let next;
      do {
        next = Math.floor(Math.random() * tracks.length);
      } while (tracks.length > 1 && next === current);
      setCurrent(next);
    } else {
      setCurrent((prev) => (prev + 1) % tracks.length);
    }
    setPlaying(false);
    setTimeout(() => setPlaying(true), 100);
  };

  const handlePrev = () => {
    if (shuffle) {
      let prev;
      do {
        prev = Math.floor(Math.random() * tracks.length);
      } while (tracks.length > 1 && prev === current);
      setCurrent(prev);
    } else {
      setCurrent((prev) => (prev - 1 + tracks.length) % tracks.length);
    }
    setPlaying(false);
    setTimeout(() => setPlaying(true), 100);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setProgress(audioRef.current.currentTime / (audioRef.current.duration || 1));
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime = (audioRef.current.duration || 0) * (parseFloat(e.target.value) / 100);
      audioRef.current.currentTime = seekTime;
    }
  };

  const handleSelectTrack = (idx: number) => {
    setCurrent(idx);
    setPlaying(false);
    setTimeout(() => setPlaying(true), 100);
  };

  const handleEnded = () => {
    if (repeat) {
      audioRef.current?.play();
    } else {
      handleNext();
    }
  };

  return (
    <div className="w-full border-2 max-w-md mx-auto  rounded-xl shadow-lg p-6 flex flex-col items-center gap-4">
      <audio
        ref={audioRef}
        src={tracks[current]?.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        loop={repeat}
      />
      <motion.div
        animate={playing ? controls : { rotate: 0 }}
        initial={{ rotate: 0 }}
        className="w-32 h-32 rounded-full border-8 shadow-lg mb-2 flex items-center justify-center overflow-hidden"
        style={{ background: "#fff" }}
      >
        <img
          src={tracks[current]?.cover}
          alt={tracks[current]?.title}
          className="w-24 h-24 rounded-full object-cover"
        />
      </motion.div>
      <div className="text-center">
        <div className="font-bold text-lg">{tracks[current]?.title}</div>
        <div className="text-sm text-blue-500">{tracks[current]?.artist}</div>
      </div>
      <div className="flex items-center w-full gap-2 relative">
        {/* Volume button + slider (absolute, overlay) */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          <button
            onClick={() => setMuted((m) => !m)}
            className="p-1 rounded-full transition"
            aria-label={muted || volume === 0 ? "Bật âm thanh" : "Tắt âm thanh"}
            type="button"
          >
            {muted || volume === 0 ? (
              <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} className="text-gray-500">
                <path d="M3 9v6h4l5 5V4L7 9H3z" />
                <line x1="17" y1="7" x2="21" y2="15" />
                <line x1="21" y1="7" x2="17" y2="15" />
              </svg>
            ) : (
              <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} className="text-gray-500">
                <path d="M3 9v6h4l5 5V4L7 9H3z" />
                <path d="M16 8a5 5 0 0 1 0 8" />
              </svg>
            )}
          </button>
          {/* Volume slider - show on hover */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center transition-opacity duration-200 ${showVolume ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            <input
              type="range"
              min={0}
              max={100}
              value={muted ? 0 : volume * 100}
              onChange={e => {
                setVolume(Number(e.target.value) / 100);
                if (muted && Number(e.target.value) > 0) setMuted(false);
              }}
              className="h-24 w-2 accent-blue-500  rounded-lg appearance-none cursor-pointer volume-slider"
              style={{
                writingMode: "vertical-lr",
                WebkitAppearance: "slider-vertical",
              }}
            />
            <span className="text-xs  px-1 rounded">{Math.round((muted ? 0 : volume) * 100)}</span>
          </div>
        </div>
        {/* Time slider and time */}
        <span className="text-xs text-gray-500 w-10 text-right">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={100}
          value={progress * 100}
          onChange={handleSeek}
          className="w-full accent-blue-500"
        />
        <span className="text-xs text-left">{formatTime(duration)}</span>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <button
          onClick={() => setRepeat((r) => !r)}
          className={`p-2 rounded-full ${repeat ? "bg-blue-500 text-white" : ""}`}
          aria-label="Repeat"
          title="Lặp lại"
        >
          <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M17 1v4a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2v-2m0 0 3-3m-3 3 3 3m1 7v-4a1 1 0 0 1 1-1h13a2 2 0 0 0 2-2v-2m0 0-3 3m3-3-3-3" />
          </svg>
        </button>
        <button
          onClick={handlePrev}
          className="p-2 rounded-full "
          aria-label="Previous"
        >
          <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          onClick={handlePlayPause}
          className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}><rect x="6" y="6" width="5" height="16" /><rect x="17" y="6" width="5" height="16" /></svg>
          ) : (
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}><polygon points="7,5 25,14 7,23" /></svg>
          )}
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full "
          aria-label="Next"
        >
          <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 6l6 6-6 6" /></svg>
        </button>
        <button
          onClick={() => setShuffle((s) => !s)}
          className={`p-2 rounded-full ${shuffle ? "bg-blue-500 text-white" : ""}`}
          aria-label="Shuffle"
          title="Phát ngẫu nhiên"
        >
          <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 4c4.5 0 7.5 14 13 14M17 14l3 3m0 0-3 3M17 10l3-3m0 0-3-3" />
          </svg>
        </button>
      </div>
      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {tracks.map((track, idx) => (
          <button
            key={track.title}
            onClick={() => handleSelectTrack(idx)}
            className={`px-3 py-1 rounded-full text-sm border ${idx === current ? "bg-blue-500 text-white border-blue-500" : ""}`}
          >
            {track.title}
          </button>
        ))}
      </div>
    </div>
  );
}