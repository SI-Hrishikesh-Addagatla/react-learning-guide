import { Link } from 'react-router-dom';
import { InputFocusExample } from './components/InputFocusExample';

const InputFocus = () => {
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
          <Link to="/hooks/use-ref" className="text-muted-foreground hover:text-foreground transition-colors">
            useRef
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Input Focus</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Managing Input Focus</h1>
          <p className="text-xl text-muted-foreground">
            Control input focus programmatically without triggering re-renders
          </p>
        </div>
      </div>

      <InputFocusExample />
    </div>
  );
};

export default InputFocus;
