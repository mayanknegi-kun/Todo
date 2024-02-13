const TodoInput = ({ input, inputchangeHandler, saveHandler }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id="todoinput"
        value={input}
        onChange={inputchangeHandler}
        className="rounded my-2 rounded outline-none h-10 p-4"
      />
      <button
        className="flex justify-center items-center w-10 h-10 rounded-full bg-[#A8D1D1] text-white "
        onClick={saveHandler}
        disabled={!input}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
