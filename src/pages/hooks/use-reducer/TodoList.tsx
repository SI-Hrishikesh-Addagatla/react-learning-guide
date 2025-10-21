import { Link } from 'react-router-dom';
import { TodoExample } from './components/TodoExample';

const TodoList = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks" className="text-muted-foreground hover:text-foreground transition-colors">
            Hooks
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-reducer" className="text-muted-foreground hover:text-foreground transition-colors">
            useReducer
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Todo List</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Todo List with Filters</h1>
          <p className="text-xl text-muted-foreground">
            Master CRUD operations with useReducer pattern
          </p>
        </div>
      </div>

      <TodoExample />
    </div>
  );
};

export default TodoList;
