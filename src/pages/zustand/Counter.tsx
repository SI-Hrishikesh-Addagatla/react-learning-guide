import { useCounterStore } from '@/stores/counterStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import { useState } from 'react';

const Counter = () => {
  const { count, increment, decrement, reset, incrementByAmount } = useCounterStore();
  const [customAmount, setCustomAmount] = useState('5');

  const handleCustomIncrement = () => {
    const amount = parseInt(customAmount);
    if (!isNaN(amount)) {
      incrementByAmount(amount);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Counter Example</h1>
        <p className="text-muted-foreground">
          Basic Zustand store demonstrating simple state management with actions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Counter State</CardTitle>
          <CardDescription>
            This demonstrates the most basic Zustand store with state and actions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Current Count</p>
              <p className="text-6xl font-bold">{count}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={decrement} variant="outline" size="lg">
              <Minus className="mr-2" />
              Decrement
            </Button>
            <Button onClick={increment} size="lg">
              <Plus className="mr-2" />
              Increment
            </Button>
            <Button onClick={reset} variant="secondary" size="lg">
              <RotateCcw className="mr-2" />
              Reset
            </Button>
          </div>

          <div className="border-t pt-6">
            <Label htmlFor="customAmount">Increment by Custom Amount</Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="customAmount"
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount"
              />
              <Button onClick={handleCustomIncrement}>Add</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Store Definition</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))`}</code>
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Usage in Component</h3>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`const { count, increment, decrement, reset } = useCounterStore()`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Counter;
