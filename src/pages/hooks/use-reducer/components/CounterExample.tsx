import { useReducer } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type State = { count: number };
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'incrementBy'; payload: number };

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'incrementBy':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export const CounterExample = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Counter with useReducer</h2>
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="p-8 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2 text-center">Count</p>
              <p className="text-6xl font-bold text-center">{state.count}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Button onClick={() => dispatch({ type: 'decrement' })} variant="outline">
              -1
            </Button>
            <Button onClick={() => dispatch({ type: 'increment' })}>
              +1
            </Button>
            <Button onClick={() => dispatch({ type: 'incrementBy', payload: 5 })} variant="secondary">
              +5
            </Button>
            <Button onClick={() => dispatch({ type: 'incrementBy', payload: 10 })} variant="secondary">
              +10
            </Button>
            <Button onClick={() => dispatch({ type: 'reset' })} variant="outline">
              Reset
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`type State = { count: number };
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'incrementBy'; payload: number };

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'incrementBy':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(counterReducer, { count: 0 });

// Dispatch actions
dispatch({ type: 'increment' });
dispatch({ type: 'incrementBy', payload: 5 });`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Reducer function takes current state and action, returns new state</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Actions describe what happened (intent)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Dispatch function triggers state updates</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>TypeScript discriminated unions for type-safe actions</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
