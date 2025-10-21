import { Link } from 'react-router-dom';
import { LocalStorageExample } from './components/LocalStorageExample';

export default function LocalStorage() {
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
          <span className="text-foreground">useLocalStorage</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">useLocalStorage</h1>
        <p className="text-xl text-muted-foreground">
          Persist state to localStorage with automatic synchronization
        </p>
      </div>

      <LocalStorageExample />
    </div>
  );
}
