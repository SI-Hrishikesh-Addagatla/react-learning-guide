import { Link } from 'react-router-dom';
import { TodoExample } from './components/TodoExample';

const Todos = () => {
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
          <Link to="/hooks/use-state" className="text-muted-foreground hover:text-foreground transition-colors">
            useState
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Todos</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Array State Management</h1>
          <p className="text-xl text-muted-foreground">
            Managing complex state with arrays - adding and removing items
          </p>
        </div>
      </div>

      <TodoExample />
    </div>
  );
};

export default Todos;
