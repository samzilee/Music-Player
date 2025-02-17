import PlayerHeader from "./components/PlayerHeader";
import PlayerControl from "./components/PlayerControl";
import { useEffect, useState } from "react";

//FineChina
import FineChina from "./assets/Musics/Future, Juice WRLD - Fine China (Official Audio).mp3";
import FineChinaMusicPoster from "./assets/Pics/juice Wrld fortnite.jpg";

//Revenge
import Revenge from "./assets/Musics/XXXTENTACION - Revenge (audio)  I've dug two graves for us my dear.mp3";
import RevengeMusicPoster from "./assets/Pics/XXX-tentacion.jpeg";

//Meet You At The Graveyard
import MeetYouAtTheGraveyard from "./assets/Musics/Cleffy - Meet You at The Graveyard.mp3";
import MeetYouAtTheGraveyardPoster from "./assets/Pics/A person touching  a grave.jpeg";

//Love Hurts
import LoveHurts from "./assets/Musics/Lil Tjay - Love Hurts (Lyrics) ft. Toosii.mp3";
import LoveHurtsPoster from "./assets/Pics/Just look at the way she's looking at him!!! Oh the feels!!.jpeg";

//Too Much Pride
import TooMuchPride from "./assets/Musics/424kp-Too Much Pride.mp3";
import TooMuchPridePoster from "./assets/Pics/Too much Pride.jpeg";

const App = () => {
  const [selection, setSelection] = useState<any>({
    src: LoveHurts,
    title: "Love Hurts",
    by: "Lil Tjay, Toosii",
    poster: LoveHurtsPoster,
    posterColorPixelTrail: "#ffc0cb",
  });

  const musicCollection: object[] = [
    {
      id: 1,
      src: FineChina,
      title: "Fine China",
      by: "Juice Wrld",
      poster: FineChinaMusicPoster,
      posterColorPixelTrail: "#00d8ff",
    },

    {
      id: 2,
      src: Revenge,
      title: "Revenge",
      by: "XXXTENTACION",
      poster: RevengeMusicPoster,
      posterColorPixelTrail: "#cbcbcb",
    },
    {
      id: 3,
      src: MeetYouAtTheGraveyard,
      title: "Meet You At The Graveyard",
      by: "Cleffy",
      poster: MeetYouAtTheGraveyardPoster,
      posterColorPixelTrail: "#cbcbcb",
    },
    {
      id: 4,
      src: LoveHurts,
      title: "Love Hurts",
      by: "Lil Tjay, Toosii",
      poster: LoveHurtsPoster,
      posterColorPixelTrail: "#ffc0cb",
    },
    {
      id: 5,
      src: TooMuchPride,
      title: "Too Much Pride",
      by: "424KP",
      poster: TooMuchPridePoster,
      posterColorPixelTrail: "#f8f8ff",
    },
  ];

  useEffect(() => {
    if (selection) {
      musicCollection.map((music: any) => {
        const IconStyleForAll: any = document.getElementById(music.title);
        IconStyleForAll.style.opacity = "0.6";
        IconStyleForAll.style.scale = "1";
      });
      const playingIcon: any = document.getElementById(selection.title);
      if (playingIcon) {
        playingIcon.style.opacity = "1";
        playingIcon.style.scale = "1.2";
      }
    }
  }, [selection]);

  const handleSelection = (id: number) => {
    const newSelection = musicCollection.filter(
      (music: any) => music.id === id
    );
    setSelection(newSelection[0]);
  };

  const year: number = new Date().getFullYear();

  return (
    <main className="h-full w-full bg-gray-900 text-white flex justify-center items-center flex-col gap-5">
      <section className=" border-[2px] rounded-[20px] border-gray-700 w-[90%] h-fit py-2 px-5 flex justify-center">
        <ul className="w-full flex justify-center gap-5">
          {musicCollection.map((music: any) => {
            return (
              <li
                key={music.title}
                id={music.title}
                className="w-[50px] h-[50px] rounded-full overflow-hidden transition-all duration-[0.5s] cursor-pointer"
                onClick={() => {
                  handleSelection(music.id);
                }}
              >
                <img
                  src={music.poster}
                  alt={music.title}
                  className="size-full object-cover"
                />
              </li>
            );
          })}
        </ul>
      </section>
      <section className="border-[2px] border-gray-700 w-[90%] h-fit  rounded-[20px]  flex flex-col p-2 gap-2 overflow-y-auto overflow-x-hidden">
        <PlayerHeader Data={selection} />
        <PlayerControl Src={selection.src} />
      </section>
      <p>
        © {year} Music Player | By{" "}
        <span className="text-blue-200 font-bold">Samzi✨</span>
      </p>
    </main>
  );
};

export default App;
