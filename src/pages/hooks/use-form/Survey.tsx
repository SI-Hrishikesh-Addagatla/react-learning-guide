import { Link } from 'react-router-dom';
import { SurveyExample } from './components/SurveyExample';

export default function Survey() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/use-form" className="hover:text-foreground">useForm</Link>
          <span>/</span>
          <span className="text-foreground">Survey Form</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Survey Form</h1>
        <p className="text-xl text-muted-foreground">
          Build a multi-field survey with dynamic validation
        </p>
      </div>

      <SurveyExample />
    </div>
  );
}
