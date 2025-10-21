import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export const FetchExample = () => {
  const [postId, setPostId] = useState(1);
  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">useFetch Demo</h2>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <Button
              onClick={() => setPostId((id) => Math.max(1, id - 1))}
              disabled={loading}
              variant="outline"
            >
              Previous Post
            </Button>
            <Button
              onClick={() => setPostId((id) => Math.min(100, id + 1))}
              disabled={loading}
            >
              Next Post
            </Button>
            <Badge variant="secondary">Post #{postId}</Badge>
          </div>

          {loading && (
            <Card className="p-6 bg-muted/50">
              <p className="text-center">Loading...</p>
            </Card>
          )}

          {error && (
            <Card className="p-6 bg-destructive/10 border-destructive">
              <p className="text-destructive">Error: {error}</p>
            </Card>
          )}

          {post && !loading && !error && (
            <Card className="p-6 bg-primary/10">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-2">User ID: {post.userId}</p>
              <p className="text-sm">{post.body}</p>
            </Card>
          )}
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('HTTP error');
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useFetch<Post>('/api/post/1');`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Encapsulates fetch logic with loading and error states</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Automatically refetches when URL changes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Type-safe with TypeScript generics</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Reusable across different API endpoints</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
