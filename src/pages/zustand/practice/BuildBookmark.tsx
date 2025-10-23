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
                    <div className="h-8 bg-primary/20 rounded w-48 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-64"></div>
                  </div>

                  {/* Filters */}
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-8 bg-primary/30 rounded w-20"></div>
                    <div className="h-8 bg-muted rounded w-24"></div>
                    <div className="h-8 bg-muted rounded w-28"></div>
                    <div className="h-8 bg-muted rounded w-20"></div>
                  </div>

                  {/* Search & Add */}
                  <div className="flex gap-2">
                    <div className="h-10 bg-background rounded flex-1"></div>
                    <div className="h-10 bg-primary/40 rounded w-32"></div>
                  </div>

                  {/* Bookmark Cards Grid */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="border rounded-lg p-3 bg-background">
                        <div className="flex justify-between items-start mb-2">
                          <div className="h-5 bg-foreground/80 rounded w-32"></div>
                          <div className="h-5 w-5 bg-muted rounded"></div>
                        </div>
                        <div className="h-3 bg-muted rounded w-full mb-2"></div>
                        <div className="h-3 bg-muted rounded w-3/4 mb-3"></div>
                        <div className="flex gap-2">
                          <div className="h-6 bg-secondary/30 rounded w-16 text-xs"></div>
                          <div className="h-6 bg-muted rounded w-12"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="border-t pt-3 flex justify-between text-sm">
                    <div className="h-4 bg-muted rounded w-32"></div>
                    <div className="h-4 bg-muted rounded w-24"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm space-y-2">
                <h4 className="font-semibold">Component Breakdown:</h4>
                <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                  <li>Header with title and description</li>
                  <li>Category filter tabs</li>
                  <li>Search bar and "Add Bookmark" button</li>
                  <li>Bookmark cards in a responsive grid</li>
                  <li>Each card shows title, URL, description, category, and actions</li>
                  <li>Footer with statistics</li>
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
