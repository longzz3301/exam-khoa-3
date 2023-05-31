import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const ToDoItem = (props) => {
  const {title, Id, }=props
  return (
    <div>
      <div className="todo-item-container">
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
        <div className="item-title">{title}</div>
      </div>
    </div>
  );
};

export default ToDoItem;
