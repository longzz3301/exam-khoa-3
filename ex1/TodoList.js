import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import ToDoItem from "./ToDoItem";
const TodoList = (props) => {
  const { task } = props;
  console.log(task);
  return (
    <div className="todo-list-container">
      {task.map((task) => {
        <ToDoItem title={task.title} Id={task.id} />;
      })}
    </div>
  );
};

export default TodoList;
