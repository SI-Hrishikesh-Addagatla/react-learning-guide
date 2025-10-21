import { Link } from 'react-router-dom';
import { CounterExample } from './components/CounterExample';

const Counter = () => {
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
          <span className="text-foreground font-medium">Counter</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Counter with Actions</h1>
          <p className="text-xl text-muted-foreground">
            Understanding the reducer pattern with multiple action types
          </p>
        </div>
      </div>

      <CounterExample />
    </div>
  );
};

export default Counter;
