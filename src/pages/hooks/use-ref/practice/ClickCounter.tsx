import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MousePointer, CheckCircle2 } from 'lucide-react';

const ClickCounter = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-ref" className="hover:text-foreground">useRef</Link>
        <span>/</span>
        <Link to="/hooks/use-ref/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Click Counter</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <MousePointer className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">Click Counter</h1>
          <Badge>Beginner</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Track the number of button clicks without causing component re-renders.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Build a component that tracks button clicks using <code className="px-2 py-1 bg-muted rounded">useRef</code>.
            The click count should persist across renders but NOT cause re-renders when updated.
          </p>
          <p>
            Also include a separate counter using <code className="px-2 py-1 bg-muted rounded">useState</code> to show 
            how many times the component has re-rendered for comparison.
          </p>
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
              <span>Use <code className="px-2 py-1 bg-muted rounded">useRef</code> to track total clicks</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Display the current click count (without triggering re-render)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Use <code className="px-2 py-1 bg-muted rounded">useState</code> to track render count</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Add a "Show Clicks" button that displays the ref value (causes re-render)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Add a "Reset" button to reset both counters</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎨 Wireframe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 space-y-4">
            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground">Render Count: 0</div>
              <div className="text-2xl font-bold">Clicks: 0</div>
            </div>
            <div className="flex gap-2 justify-center">
              <div className="px-4 py-2 border rounded">[Click Me]</div>
              <div className="px-4 py-2 border rounded">[Show Clicks]</div>
              <div className="px-4 py-2 border rounded">[Reset]</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Hints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">• Use <code className="px-2 py-1 bg-muted rounded">clickRef.current++</code> to increment without re-render</p>
          <p className="text-sm">• Access the ref value with <code className="px-2 py-1 bg-muted rounded">clickRef.current</code></p>
          <p className="text-sm">• Use <code className="px-2 py-1 bg-muted rounded">useState</code> for the render counter</p>
          <p className="text-sm">• The "Show Clicks" button should trigger a state update to force re-render</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>✅ Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Clicking "Click Me" does NOT increase render count</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Clicking "Show Clicks" displays accumulated clicks and increases render count</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>"Reset" button clears both counters</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Multiple clicks followed by "Show Clicks" shows correct total</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClickCounter;
