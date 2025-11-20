import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MousePointer, CheckCircle2 } from 'lucide-react';

const EventHandlerPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-callback" className="hover:text-foreground">useCallback</Link>
        <span>/</span>
        <Link to="/hooks/use-callback/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Event Handler</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <MousePointer className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Event Handler Optimization</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Beginner</Badge>
              <Badge variant="outline">useCallback</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Optimize event handlers to prevent unnecessary re-renders in child components
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Build an optimized counter with increment/decrement buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Create a parent component that passes increment and decrement functions to child button components. Without useCallback, the child buttons will re-render on every parent state change.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create a Counter component with count state</li>
                <li>Create Button child components that accept onClick handlers</li>
                <li>Use useCallback to memoize increment/decrement functions</li>
                <li>Use React.memo on child components to prevent unnecessary renders</li>
                <li>Add a render counter to verify optimization works</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📋 Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Display current count value</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Increment and decrement buttons as separate components</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Memoize callback functions with useCallback</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Wrap child components with React.memo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Display render count for each component to verify optimization</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎨 Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-6 space-y-4">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Count: 0</div>
                <div className="text-xs text-muted-foreground">Parent renders: 1</div>
              </div>
              <div className="flex gap-4 justify-center">
                <div className="border rounded p-3">
                  <div className="font-medium mb-1">[- Button]</div>
                  <div className="text-xs text-muted-foreground">Renders: 1</div>
                </div>
                <div className="border rounded p-3">
                  <div className="font-medium mb-1">[+ Button]</div>
                  <div className="text-xs text-muted-foreground">Renders: 1</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>💡 Hints</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                When should I use useCallback?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use useCallback when passing functions as props to memoized child components. Without it, a new function instance is created on every render, causing child components to re-render even when wrapped with React.memo.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                What dependencies should I include?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                For increment/decrement, you might use the functional form of setState (setCount(prev =&gt; prev + 1)) which doesn't require count as a dependency. Otherwise, include any values from the component scope used inside the callback.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I track renders?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use a useRef to store a render count that increments on every render. Display this value to verify that memoization is working correctly.
              </p>
            </details>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>✅ Testing Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Counter increments correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Counter decrements correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Button components don't re-render when count changes</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Parent render count increases with each button click</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Child render counts stay at 1 after initial render</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventHandlerPractice;
