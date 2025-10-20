import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const DataFetchingExample = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    // This effect runs whenever postId changes
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]); // Effect re-runs when postId changes

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Example 1: Data Fetching</CardTitle>
          <Badge variant="outline">Common Pattern</Badge>
        </div>
        <CardDescription>
          Fetch data from an API when component mounts or dependencies change
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-6 rounded-lg space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Post ID:</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((id) => (
                <Button
                  key={id}
                  size="sm"
                  variant={postId === id ? 'default' : 'outline'}
                  onClick={() => setPostId(id)}
                >
                  {id}
                </Button>
              ))}
            </div>
          </div>

          {loading && (
            <div className="flex items-center justify-center py-8">
              <RefreshCw className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive rounded-lg">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <span className="text-sm text-destructive">{error}</span>
            </div>
          )}

          {post && !loading && (
            <div className="p-4 bg-background border rounded-lg">
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{post.body}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-background p-4 rounded-lg border">
          <h4 className="font-semibold mb-3">Code Implementation:</h4>
          <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
            <code>{`const [post, setPost] = useState(null);
const [loading, setLoading] = useState(false);
const [postId, setPostId] = useState(1);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(\`/api/posts/\${postId}\`);
      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [postId]); // Re-fetch when postId changes`}</code>
          </pre>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">How It Works:</h4>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>useEffect runs after initial render (mount)</li>
            <li>Async function fetches data from API</li>
            <li>Loading state shows spinner during fetch</li>
            <li>When postId changes, effect runs again</li>
            <li>Error handling displays user-friendly messages</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};
