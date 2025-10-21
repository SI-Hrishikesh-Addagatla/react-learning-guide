import { Link } from 'react-router-dom';
import { DebounceExample } from './components/DebounceExample';

export default function Debounce() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/custom-hooks" className="hover:text-foreground">Custom Hooks</Link>
          <span>/</span>
          <span className="text-foreground">useDebounce</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">useDebounce</h1>
        <p className="text-xl text-muted-foreground">
          Optimize search and input handling with debouncing
        </p>
      </div>

      <DebounceExample />
    </div>
  );
}
