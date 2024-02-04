const TodoInput = ({ input, inputchangeHandler, saveHandler }) => {
  return (
    <div className="flex">
      <input id="todoinput" value={input} onChange={inputchangeHandler} />
      <button
        className="flex justify-center items-center w-10 h-10 rounded-full bg-[#CEBEA4]"
        onClick={saveHandler}
        disabled={!input}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
