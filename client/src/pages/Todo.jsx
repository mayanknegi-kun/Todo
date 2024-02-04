import { Card } from "../components/Card";
import Container from "../components/Container";
import ContentContainer from "../components/ContentContainer";
import TodoCount from "../components/TodoCount";
import TodoInput from "../components/TodoInput";
import useTodos from "../hooks/useTodos";

const Todo = () => {
  const [
    todos,
    newTodo,
    addTodo,
    handleTodoInputChange,
    toggleCompletionMarkup,
    deleteSelection,
    updateTodoData,
  ] = useTodos();

  return (
    <Container>
      <div className="h-4/5 w-4/5 mt-20 rounded">
        <ContentContainer classes="items-center w-full">
          <TodoCount />
          <TodoInput
            input={newTodo}
            inputchangeHandler={handleTodoInputChange}
            saveHandler={addTodo}
          />
          {todos.map((todo) => (
            <Card
              key={todo._id}
              todoData={todo}
              toggleCompletionMarkup={toggleCompletionMarkup}
              deleteSelection={deleteSelection}
              updateTodoData={updateTodoData}
            />
          ))}
        </ContentContainer>
      </div>
    </Container>
  );
};

export default Todo;
