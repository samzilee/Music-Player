import { useEffect, useRef, useState } from "react";
import {
  FaFastBackward,
  FaFastForward,
  FaPause,
  FaPlayCircle,
} from "react-icons/fa";

const PlayerControl = ({ Src }: { Src: string }) => {
  const audio = useRef<any>(null);
  const [mainAudio, setMainAudio] = useState<any>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [maxDuration, setMaxDuration] = useState<string>("0:00");
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (audio) {
      setMainAudio(audio.current);
      audio.current.pause();
      setPlaying(false);
      setMaxDuration("0:00");
    }
  }, [audio, Src]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleDuration = () => {
    if (mainAudio) {
      setMaxDuration(formatTime(mainAudio.duration));
    }
  };
  const handleTimeUpdate = () => {
    if (mainAudio) {
      setCurrentTime(formatTime(mainAudio.currentTime));
      setProgress((mainAudio.currentTime / mainAudio.duration) * 100);
      if ((mainAudio.currentTime / mainAudio.duration) * 100 === 100) {
        setPlaying(false);
      }
    }
  };

  const handlePlay = () => {
    if (playing && mainAudio) {
      mainAudio.pause();
    } else if (!playing && mainAudio) {
      mainAudio.play();
    }
  };

  const handleSeek = (e: any) => {
    mainAudio.currentTime = (e.target.value / 100) * mainAudio.duration;
    setProgress((mainAudio.currentTime / mainAudio.duration) * 100);
  };

  const handleFastBack = () => {
    mainAudio.currentTime = mainAudio.currentTime - 10;
  };

  const handleFastForward = () => {
    mainAudio.currentTime = mainAudio.currentTime + 10;
  };

  return (
    <main className="flex flex-col flex-[1]">
      <audio
        src={Src}
        ref={audio}
        onLoadedMetadata={handleDuration}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <section>
        <input
          type="range"
          className="w-full"
          min={0}
          max={maxDuration || 0}
          value={progress || 0}
          onChange={handleSeek}
        />
        <p className="flex justify-between text-gray-400 text-[0.8rem]">
          <span>{currentTime}</span>
          <span>{maxDuration}</span>
        </p>
      </section>

      <section className="flex justify-center items-center gap-10">
        <div className="text-[1.7rem] cursor-pointer" onClick={handleFastBack}>
          <FaFastBackward />
        </div>
        <div
          className="text-[2.8rem] rounded-full cursor-pointer"
          onClick={handlePlay}
        >
          {playing ? <FaPause /> : <FaPlayCircle />}
        </div>
        <div
          className="text-[1.7rem] cursor-pointer"
          onClick={handleFastForward}
        >
          <FaFastForward />
        </div>
      </section>
    </main>
  );
};

export default PlayerControl;
