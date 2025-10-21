import { Link } from 'react-router-dom';
import { ComplexObjectExample } from './components/ComplexObjectExample';

export default function ComplexObject() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/use-memo" className="hover:text-foreground">useMemo</Link>
          <span>/</span>
          <span className="text-foreground">Complex Object</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Complex Object Memoization</h1>
        <p className="text-xl text-muted-foreground">
          Prevent unnecessary object recreation and child re-renders
        </p>
      </div>

      <ComplexObjectExample />
    </div>
  );
}
