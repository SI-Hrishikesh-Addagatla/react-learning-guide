import { Link } from 'react-router-dom';
import { EventHandlerExample } from './components/EventHandlerExample';

export default function EventHandler() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/use-callback" className="hover:text-foreground">useCallback</Link>
          <span>/</span>
          <span className="text-foreground">Event Handler</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Event Handler Stability</h1>
        <p className="text-xl text-muted-foreground">
          Stabilize event listeners in useEffect dependencies
        </p>
      </div>

      <EventHandlerExample />
    </div>
  );
}
