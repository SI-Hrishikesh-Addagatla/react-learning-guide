import { Link } from 'react-router-dom';
import { ExpensiveCalculationExample } from './components/ExpensiveCalculationExample';

export default function ExpensiveCalculation() {
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
          <span className="text-foreground">Expensive Calculation</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Expensive Calculation</h1>
        <p className="text-xl text-muted-foreground">
          Optimize performance by memoizing expensive computations
        </p>
      </div>

      <ExpensiveCalculationExample />
    </div>
  );
}
