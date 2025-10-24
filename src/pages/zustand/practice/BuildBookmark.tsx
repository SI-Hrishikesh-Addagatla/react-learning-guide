import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const BuildBookmark = () => {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <Link to="/zustand/practice">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Practice
        </Button>
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold">Build a Bookmark Manager</h1>
          <Badge variant="secondary">Medium</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Create a complete bookmark manager application from scratch using Zustand for state management.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Problem Statement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Build a bookmark manager where users can save, organize, and manage their favorite websites.
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Features Required:</h4>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>Add new bookmarks (URL, title, description, category)</li>
                  <li>Display all bookmarks in a card grid</li>
                  <li>Filter bookmarks by category</li>
                  <li>Search bookmarks by title or URL</li>
                  <li>Delete bookmarks</li>
                  <li>Edit existing bookmarks</li>
                  <li>Mark bookmarks as favorite</li>
                  <li>View total count of bookmarks</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Store Structure:</h4>
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`interface Bookmark {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
  isFavorite: boolean;
  createdAt: Date;
}

interface BookmarkState {
  bookmarks: Bookmark[];
  addBookmark: (bookmark) => void;
  deleteBookmark: (id) => void;
  updateBookmark: (id, updates) => void;
  toggleFavorite: (id) => void;
  // Add more as needed
}`}
                </pre>
              </div>

              <Alert>
                <AlertDescription>
                  <strong>Bonus:</strong> Use persist middleware to save bookmarks to localStorage
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>UI Wireframe</CardTitle>
              <CardDescription>Reference design for your implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 bg-muted/30">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="border-b pb-3">
                    <div className="flex items-center justify-center h-8 bg-primary/20 rounded w-full mb-2">
                      <span className="text-sm font-bold">📚 My Bookmarks</span>
                    </div>
                    <div className="flex items-center justify-center h-4 bg-muted rounded w-full text-xs">
                      Save and organize your favorite websites
                    </div>
                  </div>

                  {/* Category Filters */}
                  <div>
                    <div className="text-xs font-semibold mb-2 text-muted-foreground">Filter by Category:</div>
                    <div className="flex gap-2 flex-wrap">
                      <div className="h-8 bg-primary/30 rounded px-3 flex items-center text-xs font-medium">All</div>
                      <div className="h-8 bg-muted rounded px-3 flex items-center text-xs">Work</div>
                      <div className="h-8 bg-muted rounded px-3 flex items-center text-xs">Personal</div>
                      <div className="h-8 bg-muted rounded px-3 flex items-center text-xs">Learning</div>
                    </div>
                  </div>

                  {/* Search & Add Button */}
                  <div>
                    <div className="text-xs font-semibold mb-2 text-muted-foreground">Search & Add:</div>
                    <div className="flex gap-2">
                      <div className="h-10 bg-background border rounded flex-1 flex items-center px-3 text-xs text-muted-foreground">
                        🔍 Search bookmarks...
                      </div>
                      <div className="h-10 bg-primary/40 rounded px-4 flex items-center text-xs font-medium">
                        + Add Bookmark
                      </div>
                    </div>
                  </div>

                  {/* Bookmark Cards Grid */}
                  <div>
                    <div className="text-xs font-semibold mb-2 text-muted-foreground">Bookmark Cards (2-column grid):</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="border rounded-lg p-3 bg-background">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs">⭐</span>
                              <div className="text-xs font-semibold">React Documentation</div>
                            </div>
                            <div className="flex gap-1">
                              <div className="h-5 w-5 bg-muted rounded flex items-center justify-center text-[10px]">✏️</div>
                              <div className="h-5 w-5 bg-muted rounded flex items-center justify-center text-[10px]">🗑️</div>
                            </div>
                          </div>
                          <div className="text-[10px] text-primary mb-1">https://react.dev</div>
                          <div className="text-[10px] text-muted-foreground mb-2">
                            Official React documentation and tutorials
                          </div>
                          <div className="flex gap-2 items-center">
                            <div className="h-5 bg-secondary/30 rounded px-2 flex items-center text-[10px]">
                              Learning
                            </div>
                            <div className="text-[10px] text-muted-foreground">2 days ago</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Footer */}
                  <div className="border-t pt-3 flex justify-between text-xs">
                    <div className="text-muted-foreground">Total: 12 bookmarks</div>
                    <div className="text-muted-foreground">⭐ 5 favorites</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm space-y-2">
                <h4 className="font-semibold">Detailed Component Breakdown:</h4>
                <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                  <li><strong>Header:</strong> Title "My Bookmarks" and subtitle description</li>
                  <li><strong>Category Filter Tabs:</strong> Buttons for "All", "Work", "Personal", "Learning" (highlight active)</li>
                  <li><strong>Search Input:</strong> Full-width input with search icon to filter by title/URL</li>
                  <li><strong>Add Button:</strong> "Add Bookmark" button next to search (opens dialog/form)</li>
                  <li><strong>Bookmark Cards:</strong> 2-column responsive grid showing:
                    <ul className="list-circle ml-5 mt-1">
                      <li>Star icon (filled if favorite, empty if not)</li>
                      <li>Title (clickable to open URL)</li>
                      <li>URL (displayed in smaller text)</li>
                      <li>Description (2 lines max)</li>
                      <li>Category badge</li>
                      <li>Created date</li>
                      <li>Edit and Delete icon buttons</li>
                    </ul>
                  </li>
                  <li><strong>Footer Stats:</strong> Total bookmark count and favorite count</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-base">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>Step 1:</strong> Create the store at <code className="bg-background px-1 py-0.5 rounded">src/stores/bookmarkStore.ts</code></p>
              <p><strong>Step 2:</strong> Replace this component's content with your implementation</p>
              <p><strong>Step 3:</strong> Build the UI following the wireframe</p>
              <p><strong>Step 4:</strong> Connect the UI to your Zustand store</p>
              <p><strong>Step 5:</strong> Test all features thoroughly</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuildBookmark;
