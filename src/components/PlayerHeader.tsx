import { Music } from "../assets/utils/types";
const PlayerHeader = ({ Data }: { Data: Music }) => {
  return (
    <header className="flex flex-col gap-2">
      <section className="relative h-[270px]">
        <img
          src={Data.poster}
          alt={Data.title + " Poster"}
          className="w-full h-full object-cover object-center rounded-[10px] transition-all duration-[1s] cursor-pointer hover:scale-[1.02]"
        />
      </section>
      <section>
        <p className="font-bold text-[1.3rem]">{Data.title}</p>
        <p className="text-gray-500 font-semibold text-[0.9rem]">{Data.by}</p>
      </section>
    </header>
  );
};

export default PlayerHeader;
