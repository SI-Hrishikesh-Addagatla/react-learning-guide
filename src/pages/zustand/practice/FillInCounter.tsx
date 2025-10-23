import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, RotateCcw } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';

// TODO: Import your counter store here
// import { useCounterStore } from '@/stores/practiceCounterStore';

const FillInCounter = () => {
  // TODO: Get state and actions from your store
  // const { count, increment, decrement, reset, incrementByAmount } = useCounterStore();
  
  // Placeholder state for demo (remove this when you implement the store)
  const [count] = useState(0);
  const increment = () => console.log('Implement increment');
  const decrement = () => console.log('Implement decrement');
  const reset = () => console.log('Implement reset');
  const incrementByAmount = (amount: number) => console.log('Implement incrementByAmount', amount);

  const [customAmount, setCustomAmount] = useState('5');

  const handleCustomIncrement = () => {
    const amount = parseInt(customAmount);
    if (!isNaN(amount)) {
      incrementByAmount(amount);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Link to="/zustand/practice">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Practice
        </Button>
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold">Counter Store - Fill in the Blanks</h1>
          <Badge>Easy</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          The UI is ready. Your task is to create the Zustand store to make it functional.
        </p>
      </div>

      <Alert className="mb-6">
        <AlertDescription>
          <strong>Instructions:</strong>
          <ol className="list-decimal ml-5 mt-2 space-y-1">
            <li>Create a new file: <code className="bg-muted px-1 py-0.5 rounded">src/stores/practiceCounterStore.ts</code></li>
            <li>Implement a Zustand store with: count (number), increment, decrement, reset, and incrementByAmount(amount) functions</li>
            <li>Import and use the store in this component (replace the TODO comments)</li>
            <li>Test all buttons to ensure they work correctly</li>
          </ol>
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Counter Display</CardTitle>
            <CardDescription>Current count value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-6xl font-bold text-center text-primary py-8">
              {count}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Controls</CardTitle>
            <CardDescription>Modify the counter value</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button onClick={decrement} variant="outline" className="flex-1" size="lg">
                <Minus className="mr-2 h-4 w-4" />
                Decrement
              </Button>
              <Button onClick={increment} className="flex-1" size="lg">
                <Plus className="mr-2 h-4 w-4" />
                Increment
              </Button>
            </div>

            <Button onClick={reset} variant="destructive" className="w-full" size="lg">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset to 0
            </Button>

            <div className="pt-4 border-t">
              <Label htmlFor="customAmount" className="mb-2 block">
                Custom Amount
              </Label>
              <div className="flex gap-2">
                <Input
                  id="customAmount"
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                />
                <Button onClick={handleCustomIncrement}>
                  Add
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 bg-muted/50">
        <CardHeader>
          <CardTitle>Hint: Store Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
{`import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByAmount: (amount: number) => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  // TODO: Write your code here
  count: 0,
  increment: () => {
    // TODO: Implement increment
  },
  decrement: () => {
    // TODO: Implement decrement
  },
  reset: () => {
    // TODO: Implement reset
  },
  incrementByAmount: (amount) => {
    // TODO: Implement incrementByAmount
  },
}));`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default FillInCounter;
