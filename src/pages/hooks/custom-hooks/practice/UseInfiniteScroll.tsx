import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

const UseInfiniteScrollPractice = () => {
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
        <span className="text-foreground">useInfiniteScroll</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <ArrowDown className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">useInfiniteScroll Hook</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="destructive">Advanced</Badge>
              <Badge variant="outline">Custom Hooks</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Implement infinite scrolling with a custom hook using Intersection Observer
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Create a useInfiniteScroll hook for loading content as user scrolls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Build an advanced custom hook that implements infinite scrolling using the Intersection Observer API. Load posts from an API in pages as the user scrolls to the bottom of the list.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create useInfiniteScroll hook with Intersection Observer</li>
                <li>Hook should return: items, loading, error, hasMore, loaderRef</li>
                <li>Fetch posts from JSONPlaceholder API with pagination</li>
                <li>Load 10 posts per page</li>
                <li>Automatically load more when scrolling to bottom</li>
                <li>Show loading indicator at the bottom</li>
                <li>Handle end of data (hasMore = false)</li>
                <li>Add error handling and retry functionality</li>
                <li>Implement debouncing to prevent rapid API calls</li>
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
                <span>useInfiniteScroll hook with Intersection Observer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Fetch from https://jsonplaceholder.typicode.com/posts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Pagination: 10 posts per page using _page and _limit params</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Display post cards with title and body</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Loading spinner shows while fetching more</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>"No more posts" message when reaching the end</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Error handling with retry button</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Scroll to top button (appears after scrolling down)</span>
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
              <h3 className="font-semibold text-lg">Infinite Scroll Posts</h3>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                <div className="border rounded p-4">
                  <div className="font-medium mb-2">Post Title 1</div>
                  <div className="text-sm text-muted-foreground">Post body content here...</div>
                </div>
                <div className="border rounded p-4">
                  <div className="font-medium mb-2">Post Title 2</div>
                  <div className="text-sm text-muted-foreground">Post body content here...</div>
                </div>
                <div className="border rounded p-4">
                  <div className="font-medium mb-2">Post Title 3</div>
                  <div className="text-sm text-muted-foreground">Post body content here...</div>
                </div>
                
                <div className="text-center py-4">
                  <div className="text-2xl mb-2">⟳</div>
                  <div className="text-sm text-muted-foreground">Loading more posts...</div>
                </div>
              </div>
              
              <div className="fixed bottom-4 right-4 border rounded-full p-2 bg-primary text-primary-foreground">
                [↑]
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
                How do I use Intersection Observer?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Create a ref for the loader element. In useEffect, create an IntersectionObserver that triggers loading when the loader becomes visible. Observe the loader ref and disconnect on cleanup.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I implement pagination?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Track current page number in state. Fetch with query params: ?_page=$&#123;page&#125;&_limit=10. Increment page when loading more. Stop when response has fewer items than limit.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I prevent duplicate loads?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Check loading state before fetching. Use a flag to track if observer is active. Only trigger load if not currently loading and hasMore is true. Consider debouncing the observer callback.
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
                <span className="text-sm">Initial posts load on mount</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">More posts load when scrolling to bottom</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Loading indicator shows during fetch</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">No duplicate posts in the list</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">"No more posts" appears at end</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Scroll to top button works</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Error handling with retry works</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UseInfiniteScrollPractice;
