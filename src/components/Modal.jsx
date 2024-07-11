const Modal = () => {
  return (
    <section className="max-w-fit flex flex-col p-6 justify-center items-center rounded-2xl">
      <p className="text-xl font-semibold tracking-wide mb-[15px]">NEW NOTE</p>
      <input
        type="text"
        placeholder="Input Your Note..."
        className="border-appPurple border rounded focus:outline-none focus:ring-2 focus:ring-appPurple w-[400px] h-[28px] py-4 pl-2 pr-2 "
      />
      <div className="mt-[50px] w-full flex justify-between">
        <button className="border-appPurple border-2 text-appPurple font-semibold py-1.5 px-4 rounded tracking-wide">
          CANCEL
        </button>
        <button className="bg-appPurple border-none text-white font-semibold py-1.5 px-6 rounded tracking-wide">
          APPLY
        </button>
      </div>
    </section>
  );
};

export default Modal;
