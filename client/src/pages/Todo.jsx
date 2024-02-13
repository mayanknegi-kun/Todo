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
      <ContentContainer classes={`flex flex-col items-center`}>
        <TodoCount />
        <TodoInput
          input={newTodo}
          inputchangeHandler={handleTodoInputChange}
          saveHandler={addTodo}
        />
        <div className="w-1/2">
          {todos.map((todo) => (
            <Card
              key={todo._id}
              todoData={todo}
              toggleCompletionMarkup={toggleCompletionMarkup}
              deleteSelection={deleteSelection}
              updateTodoData={updateTodoData}
            />
          ))}
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Todo;
