import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader, CheckCircle2 } from 'lucide-react';

const UseAsyncPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
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

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Loader className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">useAsync Hook</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary">Intermediate</Badge>
              <Badge variant="outline">Custom Hooks</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Build a custom hook for handling async operations with loading, error, and success states
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Create a reusable useAsync hook for API calls and async operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Build a custom useAsync hook that handles loading states, errors, and data for async operations. Use it to fetch and display user data, post data, and handle form submissions.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create useAsync hook that manages loading, error, and data states</li>
                <li>Hook should accept an async function and dependencies</li>
                <li>Return status, data, error, and execute function</li>
                <li>Fetch and display user list from JSONPlaceholder API</li>
                <li>Show loading spinner while fetching</li>
                <li>Display error message if request fails</li>
                <li>Add refresh button to re-fetch data</li>
                <li>Handle cleanup to prevent memory leaks</li>
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
                <span>useAsync hook in hooks folder</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Hook returns: status, data, error, execute</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Status: 'idle', 'loading', 'success', 'error'</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Fetch users from https://jsonplaceholder.typicode.com/users</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Display loading spinner during fetch</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Show error alert if fetch fails</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Display user cards with name, email, and website</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Refresh button to re-fetch data</span>
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
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">User Directory</h3>
                <div className="border rounded px-3 py-1 text-sm">[Refresh]</div>
              </div>
              
              <div className="text-center py-8">
                <div className="text-4xl mb-2">⟳</div>
                <div className="text-sm text-muted-foreground">Loading users...</div>
              </div>
              
              <div className="border-t pt-4 text-sm text-muted-foreground">
                When loaded, shows:
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="border rounded p-3">
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">john@example.com</div>
                  <div className="text-xs text-muted-foreground">example.com</div>
                </div>
                <div className="border rounded p-3">
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-sm text-muted-foreground">jane@example.com</div>
                  <div className="text-xs text-muted-foreground">example.com</div>
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
                How should I structure the useAsync hook?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use useReducer or useState to manage status, data, and error. Create an execute function that calls the async function, sets loading, then sets success/error. Use useEffect with dependencies to auto-execute.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I prevent memory leaks?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use a cleanup flag (let cancelled = false) in useEffect. Check this flag before setting state after async operations. Return a cleanup function that sets cancelled = true.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                Should the hook execute automatically?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                You can support both patterns: auto-execute on mount with dependencies, or provide an execute function for manual triggering. Consider accepting an immediate parameter to control this behavior.
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
                <span className="text-sm">Loading state shows spinner</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Users display after loading</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Error state shows error message</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Refresh button re-fetches data</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">No memory leaks on unmount</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Hook is reusable for different APIs</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UseAsyncPractice;
