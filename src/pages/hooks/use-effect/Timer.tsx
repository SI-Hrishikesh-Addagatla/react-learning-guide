import { Link } from 'react-router-dom';
import { TimerExample } from './components/TimerExample';

const Timer = () => {
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
          <Link to="/hooks/use-effect" className="text-muted-foreground hover:text-foreground transition-colors">
            useEffect
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Timer</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Timer with Cleanup</h1>
          <p className="text-xl text-muted-foreground">
            Using useEffect with cleanup to manage intervals and prevent memory leaks
          </p>
        </div>
      </div>

      <TimerExample />
    </div>
  );
};

export default Timer;
