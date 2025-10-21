import { Link } from 'react-router-dom';
import { FormExample } from './components/FormExample';

const Form = () => {
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
          <span className="text-foreground font-medium">Complex Form</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Complex Form Management</h1>
          <p className="text-xl text-muted-foreground">
            Handling multiple fields and validation with useReducer
          </p>
        </div>
      </div>

      <FormExample />
    </div>
  );
};

export default Form;
