import { Link } from 'react-router-dom';
import { ParentChildExample } from './components/ParentChildExample';

export default function ParentChild() {
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
          <span className="text-foreground">Parent-Child</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Parent-Child Optimization</h1>
        <p className="text-xl text-muted-foreground">
          Prevent unnecessary child component re-renders
        </p>
      </div>

      <ParentChildExample />
    </div>
  );
}
