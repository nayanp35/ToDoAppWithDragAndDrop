import ToDoCard from './ToDoCard';
import { useAppSelector } from '../redux/hooks';
import { Todo } from '../redux/features/todoSlice';

const ToDo = () => {
  const todos = useAppSelector((state) => state.todo);
  return (
    <div className="border border-black rounded-md">
      <div className="border-b border-black h-fit text-center">
        <div className="text-lg font-bold">To Do</div>
        <div>This item hasn't been started</div>
      </div>
      <div className="max-h-[85vh] overflow-y-auto">
        {todos.map(
          (todo: Todo) =>
            todo.category === 'todo' && (
              <ToDoCard
                task={todo.description}
                key={todo.id}
                taskId={todo.id}
              />
            )
        )}
      </div>
    </div>
  );
};

export default ToDo;
