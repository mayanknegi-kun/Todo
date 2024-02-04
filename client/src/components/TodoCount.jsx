const TodoCount = ({ completed = 0, total = 0 }) => {
  return (
    <div className="flex  mt-20 mb-10 w-1/2 justify-between border border-[#CEBEA4] rounded-xl p-5">
      <div className="flex flex-col justify-center items-center text-[#CEBEA4]">
        <p>Todo Done</p>
        <p>Keep it up</p>
      </div>
      <div className="flex justify-center items-center h-full rounded-full bg-[#FF5631]">
        {`${completed}/${total}`}
      </div>
    </div>
  );
};

export default TodoCount;
