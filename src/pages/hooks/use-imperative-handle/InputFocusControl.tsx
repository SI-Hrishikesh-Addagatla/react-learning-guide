import { Link } from 'react-router-dom';
import { InputFocusExample } from './components/InputFocusExample';

export default function InputFocusControl() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/use-imperative-handle" className="hover:text-foreground">useImperativeHandle</Link>
          <span>/</span>
          <span className="text-foreground">Input Focus</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Input Focus Control</h1>
        <p className="text-xl text-muted-foreground">
          Expose focus and clear methods to parent components
        </p>
      </div>

      <InputFocusExample />
    </div>
  );
}
