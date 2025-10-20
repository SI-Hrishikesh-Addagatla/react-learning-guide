import { Link } from 'react-router-dom';
import { EventListenerExample } from './components/EventListenerExample';

const EventListeners = () => {
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
          <span className="text-foreground font-medium">Event Listeners</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Event Listeners</h1>
          <p className="text-xl text-muted-foreground">
            Setting up and cleaning up multiple event listeners in separate effects
          </p>
        </div>
      </div>

      <EventListenerExample />
    </div>
  );
};

export default EventListeners;
