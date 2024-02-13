import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";
import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

export const Card = ({
  toggleCompletionMarkup,
  todoData,
  deleteSelection,
  updateTodoData,
}) => {
  const [edit, setEdit] = useState(false);
  const [todoValue, setTodoValue] = useState(todoData?.data);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setTodoValue(todoData?.data);
    setEdit(false);
  };

  const handleEditChange = (e) => {
    const value = e.target.value;
    setTodoValue(value);
  };

  const updateTodo = (e) => {
    if (e.key === "Enter") {
      const request = {
        id: todoData?._id,
        data: todoValue,
        isCompleted: todoData?.isCompleted,
      };
      console.log(request);
      updateTodoData(request);
    }
  };

  const toggleEdit = () => {
    setTodoValue(todoData?.data);
    setEdit(!edit);
  };

  useOutsideClick(ref, handleClickOutside);

  return (
    <div className="flex justify-between px-4 py-2 bg-[#A8D1D1] mt-10 rounded">
      <div className="flex items-center gap-4">
        <input
          checked={todoData?.isCompleted}
          type="radio"
          onClick={() => toggleCompletionMarkup(todoData)}
          disabled={edit}
        />
        {edit ? (
          <input
            ref={ref}
            value={todoValue}
            onChange={handleEditChange}
            onKeyDown={updateTodo}
          />
        ) : (
          <p>{todoData.data}</p>
        )}
      </div>
      <div className="flex gap-4">
        <button onClick={toggleEdit}>
          <img src={Edit} className="w-5 h-5" onClick={toggleEdit} />
        </button>
        <button onClick={() => deleteSelection(todoData?._id)} disabled={edit}>
          <img src={Delete} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
