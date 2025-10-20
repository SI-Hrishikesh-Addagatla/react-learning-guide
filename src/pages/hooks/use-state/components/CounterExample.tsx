import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, RotateCcw } from 'lucide-react';

export const CounterExample = () => {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Example 1: Simple Counter</CardTitle>
          <Badge variant="outline">Basic</Badge>
        </div>
        <CardDescription>
          Learn how to manage numeric state and handle increment/decrement operations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-6 rounded-lg">
          <div className="text-center space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Current Count</p>
              <div className="text-6xl font-bold text-primary">{count}</div>
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setCount(count - 1)}
                variant="outline"
                size="lg"
              >
                <Minus className="mr-2 h-4 w-4" />
                Decrement
              </Button>
              <Button
                onClick={() => setCount(0)}
                variant="secondary"
                size="lg"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
              <Button
                onClick={() => setCount(count + 1)}
                size="lg"
              >
                <Plus className="mr-2 h-4 w-4" />
                Increment
              </Button>
            </div>
            <Button
              onClick={() => setCount(prev => prev + 5)}
              variant="ghost"
              size="sm"
            >
              +5 (Functional Update)
            </Button>
          </div>
        </div>

        <div className="bg-background p-4 rounded-lg border">
          <h4 className="font-semibold mb-3">Code Implementation:</h4>
          <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
            <code>{`const [count, setCount] = useState(0);

// Direct update
<Button onClick={() => setCount(count - 1)}>
  Decrement
</Button>

// Reset to initial value
<Button onClick={() => setCount(0)}>
  Reset
</Button>

// Functional update (recommended when based on previous state)
<Button onClick={() => setCount(prev => prev + 5)}>
  +5
</Button>`}</code>
          </pre>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">How It Works:</h4>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li><code className="text-primary bg-primary/10 px-1 rounded">useState(0)</code> initializes count to 0</li>
            <li>Clicking buttons calls <code className="text-primary bg-primary/10 px-1 rounded">setCount</code> with new value</li>
            <li>React re-renders the component with updated count</li>
            <li>Functional update <code className="text-primary bg-primary/10 px-1 rounded">{`prev => prev + 5`}</code> ensures accurate updates</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};
