import "./customStyles.css";

const Notes = () => {
  return (
    <div className="flex flex-col items-center uppercase mt-6">
      <section className="flex justify-center items-center gap-3">
        <input
          type="checkbox"
          className="w-[18px] h-[18px] appearance-none rounded border border-appPurple transition-all before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-appPurple checked:bg-appPurple "
        />
        <label className="text-lg">Note 1</label>
      </section>
      <section className="flex justify-center items-center gap-3">
        <input type="checkbox" className="w-[18px] h-[18px] custom-checkbox" />
        <label className="text-lg">Note 2</label>
      </section>
      <section className="flex justify-center items-center gap-3">
        <input type="checkbox" className="w-[18px] h-[18px] custom-checkbox" />
        <label className="text-lg">Note 3</label>
      </section>
    </div>
  );
};

export default Notes;
