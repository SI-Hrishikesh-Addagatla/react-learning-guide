import { Link } from 'react-router-dom';
import { DataFetchingExample } from './components/DataFetchingExample';

const DataFetching = () => {
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
          <span className="text-foreground font-medium">Data Fetching</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Data Fetching</h1>
          <p className="text-xl text-muted-foreground">
            Fetch data from an API when component mounts or dependencies change
          </p>
        </div>
      </div>

      <DataFetchingExample />
    </div>
  );
};

export default DataFetching;
