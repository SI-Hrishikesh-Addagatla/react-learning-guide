import { Link } from 'react-router-dom';
import { PreviousValueExample } from './components/PreviousValueExample';

const PreviousValue = () => {
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
          <span className="text-foreground font-medium">Previous Value</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Tracking Previous Values</h1>
          <p className="text-xl text-muted-foreground">
            Store and compare values across renders
          </p>
        </div>
      </div>

      <PreviousValueExample />
    </div>
  );
};

export default PreviousValue;
