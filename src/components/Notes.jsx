import "./customStyles.css";
import emptyListImg from "../assets/empty-list.png";

const Notes = ({ notes }) => {
  return (
    <div className="flex flex-col items-center uppercase mt-6">
      {notes.length > 0 ? (
        notes.map((note, noteIndex) => (
          <section
            className="flex justify-center items-center gap-3 "
            key={noteIndex}
          >
            <input
              id={noteIndex}
              type="checkbox"
              className="cursor-pointer w-[18px] h-[18px] appearance-none rounded border border-appPurple transition-all before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-appPurple checked:bg-appPurple "
            />
            <label htmlFor={noteIndex} className="text-lg cursor-pointer  ">
              {note}
            </label>
          </section>
        ))
      ) : (
        <>
          <img src={emptyListImg} className="w-[300px] mb-4" />
          <p>No notes available</p>
        </>
      )}
    </div>
  );
};

export default Notes;
