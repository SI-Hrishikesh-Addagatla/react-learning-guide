import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, CheckCircle2 } from 'lucide-react';

const ButtonClickTracker = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/use-callback" className="hover:text-foreground">useCallback</Link>
          <span>/</span>
          <Link to="/hooks/use-callback/practice" className="hover:text-foreground">Practice</Link>
          <span>/</span>
          <span className="text-foreground">Button Click Tracker</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Button Click Tracker</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge>Beginner</Badge>
          <Badge variant="outline">useCallback</Badge>
          <Badge variant="outline">Performance</Badge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🎯 Challenge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Create a button click tracker that counts clicks for multiple buttons without re-creating
                callback functions on every render. Use useCallback to optimize the click handlers.
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
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Create three buttons (Button A, Button B, Button C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Track individual click counts for each button</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Use useCallback to memoize click handler</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Display total clicks across all buttons</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Add a reset button to clear all counts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Log when callback is re-created (for debugging)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>💡 Hints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Use an object or Map to store click counts for each button</p>
              <p>• Wrap your click handler with useCallback</p>
              <p>• Pass button ID as parameter to the handler</p>
              <p>• Include state dependencies in useCallback's dependency array</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🎨 UI Wireframe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6 space-y-4">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Button Click Tracker</h3>
                  <p className="text-sm text-muted-foreground">Total Clicks: 0</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-background rounded border">
                    <span>Button A: 0 clicks</span>
                    <div className="px-3 py-1 bg-primary/10 rounded text-sm">Click</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded border">
                    <span>Button B: 0 clicks</span>
                    <div className="px-3 py-1 bg-primary/10 rounded text-sm">Click</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded border">
                    <span>Button C: 0 clicks</span>
                    <div className="px-3 py-1 bg-primary/10 rounded text-sm">Click</div>
                  </div>
                </div>
                <div className="text-center pt-2">
                  <div className="px-4 py-2 bg-destructive/10 text-destructive rounded text-sm inline-block">
                    Reset All
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Testing Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Each button increments its own counter</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Total clicks updates correctly</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Reset button clears all counts</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>useCallback prevents unnecessary re-creations</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Console logs show callback memoization working</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ButtonClickTracker;
