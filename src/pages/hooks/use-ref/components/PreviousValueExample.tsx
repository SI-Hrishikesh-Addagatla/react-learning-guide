import { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

export const PreviousValueExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const previousCount = usePrevious(count);
  const previousName = usePrevious(name);

  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Tracking Previous Values</h2>
        <div className="space-y-6">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Component Renders</p>
            <p className="text-3xl font-bold">{renderCount.current}</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Counter</Label>
              <div className="flex gap-2">
                <Button onClick={() => setCount(count - 1)} variant="outline">
                  Decrease
                </Button>
                <Button onClick={() => setCount(count + 1)}>
                  Increase
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Current Count</p>
                  <p className="text-2xl font-bold">{count}</p>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Previous Count</p>
                  <p className="text-2xl font-bold">{previousCount ?? 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name-input">Name</Label>
              <Input
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name..."
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Current Name</p>
                  <p className="text-lg font-semibold break-words">{name || 'Empty'}</p>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Previous Name</p>
                  <p className="text-lg font-semibold break-words">{previousName || 'Empty'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}

function Component() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Store previous values using <code className="px-2 py-1 bg-muted rounded">useRef</code></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Update ref in <code className="px-2 py-1 bg-muted rounded">useEffect</code> after render</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Track render counts without causing re-renders</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Create custom hooks for reusable logic</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
