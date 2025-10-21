import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const DebounceExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [apiCallCount, setApiCallCount] = useState(0);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('API call with:', debouncedSearchTerm);
      setApiCallCount((count) => count + 1);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">useDebounce Demo</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">Search (500ms debounce)</Label>
            <Input
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type to search..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 bg-primary/10">
              <p className="text-sm text-muted-foreground mb-1">Immediate Value</p>
              <p className="text-lg font-semibold break-words">
                {searchTerm || 'Empty'}
              </p>
            </Card>
            <Card className="p-4 bg-secondary/10">
              <p className="text-sm text-muted-foreground mb-1">Debounced Value</p>
              <p className="text-lg font-semibold break-words">
                {debouncedSearchTerm || 'Empty'}
              </p>
            </Card>
          </div>

          <Card className="p-4 bg-muted/50">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">API Calls Made:</span>
              <span className="text-2xl font-bold">{apiCallCount}</span>
            </div>
          </Card>

          <Card className="p-4 bg-muted/50">
            <p className="text-sm text-muted-foreground">
              💡 Notice how API calls only happen after you stop typing for 500ms
            </p>
          </Card>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // Make API call
      fetchResults(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Delays execution until user stops typing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Reduces unnecessary API calls and improves performance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Uses setTimeout and cleanup to manage delays</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Essential for search inputs and autocomplete</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
