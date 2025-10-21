import { Link } from 'react-router-dom';
import { FormOptimizationExample } from './components/FormOptimizationExample';

export default function FormOptimization() {
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
          <span className="text-foreground">Form Optimization</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Form Optimization</h1>
        <p className="text-xl text-muted-foreground">
          Optimize large forms with memoized callbacks
        </p>
      </div>

      <FormOptimizationExample />
    </div>
  );
}
