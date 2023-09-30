import { removeTodo } from '../redux/features/todoSlice';
import { useAppDispatch } from '../redux/hooks';

interface ToDoCardProps {
  task: string;
  taskId: string;
}

const ToDoCard = ({ task, taskId }: ToDoCardProps) => {
  const dispatch = useAppDispatch();

  const deleteToDo = (taskId: string) => {
    dispatch(removeTodo(taskId));
  };

  return (
    <div
      className="border rounded-md border-black h-fit m-2 p-2 cursor-move flex"
      draggable="true"
    >
      <div className="flex-grow">{task}</div>
      <div className="cursor-pointer" onClick={() => deleteToDo(taskId)}>
        X
      </div>
    </div>
  );
};

export default ToDoCard;
