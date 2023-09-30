import Done from './components/Done';
import InProgress from './components/InProgress';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

const App = () => {
  return (
    <div className=''>
      <ToDoForm />
      <div className="grid grid-cols-3 gap-5 p-5">
        <ToDo />
        <InProgress />
        <Done />
      </div>
    </div>
  );
};

export default App;
