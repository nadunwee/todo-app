import darkModeImg from "../assets/night-mode.png";
import lightModeImg from "../assets/light-mode.png";
import showMoreImg from "../assets/down-arrow.png";
import searchIconImg from "../assets/search-icon.png";

const Controls = ({ onSearchBtn }) => {
  return (
    <section className="flex justify-center gap-10 mt-4 items-center">
      <div className="relative w-[500px]">
        <input
          onChange={(e) => onSearchBtn(e.target.value)}
          type="text"
          className="border-appPurple border rounded focus:outline-none focus:ring-2 focus:ring-appPurple w-full h-[28px] py-4 pl-10 pr-2"
          placeholder="Search notes..."
        />
        <img
          src={searchIconImg}
          alt="Search Icon"
          className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5"
        />
      </div>
      <div>
        <button className="flex items-center gap-3 bg-appPurple rounded-md text-slate-50 uppercase py-1.5 px-2 hover:bg-darkAppPurple font-semibold">
          All
          <img src={showMoreImg} alt="Show More Icon" />
        </button>
      </div>
      <div>
        <button className="bg-appPurple py-1.5 px-2 rounded-md hover:bg-darkAppPurple">
          <img src={darkModeImg} alt="Dark Mode Icon" className="h-[23px]" />
        </button>
      </div>
    </section>
  );
};

export default Controls;
