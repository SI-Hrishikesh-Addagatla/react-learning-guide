import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, CheckCircle2 } from 'lucide-react';

const UseAsync = () => {
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
          <span className="text-foreground">useAsync</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <Wifi className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">useAsync Hook</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">Custom Hook</Badge>
          <Badge variant="outline">Async</Badge>
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
                Create a useAsync hook that handles async operations with loading, error, and success states.
                The hook should manage the entire async lifecycle and prevent race conditions.
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
                  <span>Create useAsync custom hook</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Accept async function as parameter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Return {'{data, loading, error, execute}'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Handle loading state properly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Catch and expose errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Prevent memory leaks (cleanup on unmount)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Demo with API fetch example</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>💡 Hints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Use useState for data, loading, and error states</p>
              <p>• Use useCallback for execute function</p>
              <p>• Use useEffect for cleanup</p>
              <p>• Track mounted state with useRef to prevent updates after unmount</p>
              <p>• Wrap async calls in try-catch blocks</p>
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
                <h3 className="font-semibold">useAsync Demo</h3>
                <div className="space-y-3">
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm text-center">
                    Fetch User Data
                  </div>
                  <div className="p-4 bg-background rounded border">
                    <div className="text-sm font-medium mb-2">Status:</div>
                    <div className="text-xs text-muted-foreground">
                      Loading: false<br />
                      Error: null<br />
                      Data: null
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded text-sm">
                    <div className="font-medium mb-2">When loading:</div>
                    <div className="text-muted-foreground">Show spinner...</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded text-sm">
                    <div className="font-medium mb-2">When success:</div>
                    <div className="space-y-1">
                      <div>Name: John Doe</div>
                      <div>Email: john@example.com</div>
                    </div>
                  </div>
                  <div className="p-4 bg-destructive/10 rounded text-sm">
                    <div className="font-medium mb-2">When error:</div>
                    <div className="text-destructive">Failed to fetch data</div>
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
                  <span>Shows loading state during async operation</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Displays data on success</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Shows error message on failure</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Can retry after error</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>No memory leaks on unmount</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Handles rapid successive calls correctly</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UseAsync;
