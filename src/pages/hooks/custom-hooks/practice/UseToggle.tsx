import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Repeat, CheckCircle2 } from 'lucide-react';

const UseToggle = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/custom-hooks" className="hover:text-foreground">Custom Hooks</Link>
          <span>/</span>
          <Link to="/hooks/custom-hooks/practice" className="hover:text-foreground">Practice</Link>
          <span>/</span>
          <span className="text-foreground">useToggle</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <Repeat className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">useToggle Hook</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge>Beginner</Badge>
          <Badge variant="outline">Custom Hook</Badge>
          <Badge variant="outline">useState</Badge>
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
                Create a custom useToggle hook that manages boolean state with toggle, setTrue, and setFalse functions.
                Build a demo component that uses this hook to control visibility of different elements.
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
                  <span>Create useToggle custom hook</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Accept optional initial value (default: false)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Return [value, toggle, setTrue, setFalse]</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Use the hook to toggle a modal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Use the hook to toggle dark mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Use the hook to show/hide content sections</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>💡 Hints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Use useState internally</p>
              <p>• Create functions using useCallback for optimization</p>
              <p>• toggle: () =&gt; setValue(prev =&gt; !prev)</p>
              <p>• setTrue: () =&gt; setValue(true)</p>
              <p>• setFalse: () =&gt; setValue(false)</p>
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
                <h3 className="font-semibold">useToggle Demo</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-background rounded border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Modal</span>
                      <div className="px-3 py-1 bg-primary/10 rounded text-sm">Show</div>
                    </div>
                    <div className="text-xs text-muted-foreground">Status: Hidden</div>
                  </div>
                  <div className="p-3 bg-background rounded border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Dark Mode</span>
                      <div className="px-3 py-1 bg-primary/10 rounded text-sm">Toggle</div>
                    </div>
                    <div className="text-xs text-muted-foreground">Status: Light</div>
                  </div>
                  <div className="p-3 bg-background rounded border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Details Section</span>
                      <div className="px-3 py-1 bg-primary/10 rounded text-sm">Toggle</div>
                    </div>
                    <div className="text-xs text-muted-foreground">Hidden content...</div>
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
                  <span>useToggle hook is created</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>toggle() flips the value</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>setTrue() always sets to true</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>setFalse() always sets to false</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Initial value works correctly</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Multiple instances work independently</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UseToggle;
