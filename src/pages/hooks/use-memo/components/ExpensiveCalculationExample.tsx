import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Expensive calculation function
const fibonacci = (n: number): number => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

export const ExpensiveCalculationExample = () => {
  const [number, setNumber] = useState(35);
  const [count, setCount] = useState(0);

  // Memoized expensive calculation
  const fibResult = useMemo(() => {
    console.log('Calculating fibonacci...');
    return fibonacci(number);
  }, [number]);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Expensive Calculation Demo</h2>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Fibonacci Result</p>
            <p className="text-3xl font-bold">{fibResult}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="number">Number (try 35-40)</Label>
            <Input
              id="number"
              type="number"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
              min="1"
              max="45"
            />
          </div>

          <div className="space-y-2">
            <Label>Counter (doesn't trigger recalculation)</Label>
            <div className="flex gap-2 items-center">
              <Button onClick={() => setCount(count + 1)}>
                Increment Counter
              </Button>
              <span className="text-2xl font-bold">{count}</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`const fibonacci = (n: number): number => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

function Component() {
  const [number, setNumber] = useState(35);
  const [count, setCount] = useState(0);

  // Only recalculates when number changes
  const fibResult = useMemo(() => {
    console.log('Calculating...');
    return fibonacci(number);
  }, [number]);

  return (
    <div>
      <p>Result: {fibResult}</p>
      <input 
        value={number} 
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
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
            <span><code className="px-2 py-1 bg-muted rounded">useMemo</code> caches expensive calculations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Only recalculates when dependencies change</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Other state changes don't trigger recalculation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Check console to see when calculation runs</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
