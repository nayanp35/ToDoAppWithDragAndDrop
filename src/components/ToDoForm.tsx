import { useAppDispatch } from '../redux/hooks';
import { addTodo, Todo } from '../redux/features/todoSlice';

const ToDoForm = () => {
  const dispatch = useAppDispatch();

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task = e.currentTarget.addTask.value;
    const obj: Todo = {
      category: 'inProgress',
      id: crypto.randomUUID(),
      description: task
    };
    dispatch(addTodo(obj));
    e.currentTarget.reset();
  };

  return (
    <div className="w-full p-2">
      <form onSubmit={handleForm} className="flex gap-x-2">
        <label>Add a task</label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="addTask"
        />
        <button
          type="submit"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
