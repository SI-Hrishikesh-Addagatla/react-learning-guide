import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, CheckCircle2 } from 'lucide-react';

const SearchFilter = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks" className="text-muted-foreground hover:text-foreground transition-colors">
            Hooks
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-effect" className="text-muted-foreground hover:text-foreground transition-colors">
            useEffect
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-effect/practice" className="text-muted-foreground hover:text-foreground transition-colors">
            Practice
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Search Filter</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Search className="w-8 h-8 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-4xl font-bold">Real-Time Search</h1>
              <Badge variant="destructive">Advanced</Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Search with API calls, loading states, and request cancellation
            </p>
          </div>
        </div>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Challenge Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            Build a search interface that fetches user data from an API based on search input. Implement debouncing, loading states, error handling, and request cancellation using AbortController. This is a comprehensive exercise covering advanced useEffect patterns.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              'Search input field with real-time filtering',
              'Debounce search by 500ms (don\'t search on every keystroke)',
              'Fetch users from API when search term changes',
              'Show loading spinner during API call',
              'Display search results (user cards with name and email)',
              'Show "No results found" when search returns empty',
              'Handle and display errors gracefully',
              'Cancel previous request when new search is triggered',
              'Show empty state when no search term'
            ].map((req, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{req}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Wireframe</CardTitle>
          <CardDescription>Use this as a reference for your implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-1">User Search</h3>
                <p className="text-xs text-muted-foreground">Search for users by name</p>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <div className="h-12 border-2 border-border rounded-lg bg-background px-4 flex items-center gap-2">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Search users...</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  Loading results...
                </div>

                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-2 border-border rounded-lg p-4 bg-background">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-muted"></div>
                        <div className="flex-1">
                          <div className="font-medium">John Doe</div>
                          <div className="text-sm text-muted-foreground">john.doe@example.com</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Endpoint</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p>Use the JSONPlaceholder API for testing:</p>
            <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
{`https://jsonplaceholder.typicode.com/users`}
            </pre>
            <p className="text-muted-foreground">
              This returns an array of 10 user objects. Filter them client-side by name based on the search term (case-insensitive).
            </p>
            <p className="text-muted-foreground">
              User object structure:
            </p>
            <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
{`{
  id: number,
  name: string,
  email: string,
  username: string,
  ...
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium mb-2">1. Debouncing and API call with AbortController:</p>
              <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
{`useEffect(() => {
  if (!searchTerm) {
    setResults([]);
    return;
  }

  const controller = new AbortController();
  
  const timer = setTimeout(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { signal: controller.signal }
      );
      const users = await response.json();
      
      // Filter by search term
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setResults(filtered);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError('Failed to fetch users');
      }
    } finally {
      setLoading(false);
    }
  }, 500); // 500ms debounce
  
  return () => {
    clearTimeout(timer);
    controller.abort(); // Cancel request
  };
}, [searchTerm]);`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>State to Manage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="font-medium">Track:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">searchTerm</code> - current search input</li>
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">results</code> - array of filtered users</li>
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">loading</code> - boolean loading state</li>
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">error</code> - error message string or null</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardHeader>
          <CardTitle className="text-amber-600 dark:text-amber-400">Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>✓ Type slowly, search triggers after 500ms pause</p>
            <p>✓ Type quickly, only final search executes</p>
            <p>✓ Loading spinner shows during fetch</p>
            <p>✓ Results update correctly</p>
            <p>✓ Search for "Leanne" finds matching user</p>
            <p>✓ Search for "zzz" shows "No results"</p>
            <p>✓ Clear search shows empty state</p>
            <p>✓ No console errors about aborted requests</p>
            <p>✓ Network tab shows cancelled requests (fast typing)</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-500/20 bg-blue-500/5">
        <CardHeader>
          <CardTitle className="text-blue-600 dark:text-blue-400">💡 Pro Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• AbortController is crucial for cancelling outdated requests</p>
            <p>• Check for 'AbortError' name to ignore cancellation errors</p>
            <p>• Debouncing improves performance and reduces API calls</p>
            <p>• Always cleanup: clear timeout AND abort request</p>
            <p>• Test with network throttling to see loading states clearly</p>
            <p>• Consider adding minimum search length (e.g., 2 characters)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchFilter;
