import darkModeImg from "../assets/dark-mode.png";
import lightModeImg from "../assets/light-mode.png";

const Controls = () => {
  return (
    <section className="flex justify-center gap-6 mt-4">
      <div>
        <input
          type="text"
          className="border-appPurple border rounded focus:outline-none focus:ring-2 focus:ring-appPurple w-[500px] h-[28px] py-4 px-2"
          placeholder="Search notes..."
        />
      </div>
      <div>
        <button className="bg-appPurple rounded-md text-slate-50 uppercase py-1 px-2 hover:bg-darkAppPurple ">
          All
        </button>
      </div>
      <div>
        <button className="bg-appPurple py-1 px-2 rounded-md hover:bg-darkAppPurple ">
          <img src={darkModeImg} alt="" className="h-[23px]" />
        </button>
      </div>
    </section>
  );
};

export default Controls;
