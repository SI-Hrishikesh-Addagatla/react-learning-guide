import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const BuildNotification = () => {
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
          <h1 className="text-4xl font-bold">Build a Notification System</h1>
          <Badge variant="secondary">Medium</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Create a notification management system with toast messages using Zustand.
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
                Build a notification center that displays, manages, and dismisses notifications with different types and priorities.
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Features Required:</h4>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>Add notifications with type (success, error, warning, info)</li>
                  <li>Display notifications in a list</li>
                  <li>Auto-dismiss notifications after a timeout</li>
                  <li>Manually dismiss notifications</li>
                  <li>Mark notifications as read/unread</li>
                  <li>Filter by notification type</li>
                  <li>Clear all notifications</li>
                  <li>Show unread count badge</li>
                  <li>Trigger sample notifications with buttons</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Store Structure:</h4>
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification) => void;
  dismissNotification: (id) => void;
  markAsRead: (id) => void;
  clearAll: () => void;
  getUnreadCount: () => number;
  // Add more as needed
}`}
                </pre>
              </div>

              <Alert>
                <AlertDescription>
                  <strong>Bonus:</strong> Use devtools middleware for debugging and implement auto-dismiss with setTimeout
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
                    <div className="flex items-center justify-between">
                      <div className="h-8 bg-primary/20 rounded w-48"></div>
                      <div className="h-6 w-12 bg-destructive/30 rounded-full"></div>
                    </div>
                    <div className="h-4 bg-muted rounded w-64 mt-2"></div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-9 bg-green-500/20 rounded"></div>
                    <div className="h-9 bg-red-500/20 rounded"></div>
                    <div className="h-9 bg-yellow-500/20 rounded"></div>
                    <div className="h-9 bg-blue-500/20 rounded"></div>
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex gap-2">
                    <div className="h-8 bg-primary/30 rounded w-16"></div>
                    <div className="h-8 bg-muted rounded w-20"></div>
                    <div className="h-8 bg-muted rounded w-20"></div>
                  </div>

                  {/* Notification List */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border rounded-lg p-3 bg-background">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-green-500/40 rounded-full"></div>
                            <div className="h-4 bg-foreground/80 rounded w-32"></div>
                          </div>
                          <div className="flex gap-1">
                            <div className="h-6 w-6 bg-muted rounded"></div>
                            <div className="h-6 w-6 bg-muted rounded"></div>
                          </div>
                        </div>
                        <div className="h-3 bg-muted rounded w-full mb-1"></div>
                        <div className="h-3 bg-muted rounded w-4/5"></div>
                        <div className="h-3 bg-muted/50 rounded w-24 mt-2"></div>
                      </div>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="border-t pt-3">
                    <div className="h-8 bg-destructive/20 rounded w-full"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm space-y-2">
                <h4 className="font-semibold">Component Breakdown:</h4>
                <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                  <li>Header with title and unread badge</li>
                  <li>Test buttons to trigger different notification types</li>
                  <li>Filter tabs (All, Read, Unread)</li>
                  <li>Notification list with cards</li>
                  <li>Each card shows icon, title, message, timestamp, and actions</li>
                  <li>"Clear All" button at the bottom</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-base">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>Step 1:</strong> Create the store at <code className="bg-background px-1 py-0.5 rounded">src/stores/notificationStore.ts</code></p>
              <p><strong>Step 2:</strong> Replace this component's content with your implementation</p>
              <p><strong>Step 3:</strong> Build the UI following the wireframe</p>
              <p><strong>Step 4:</strong> Connect the UI to your Zustand store</p>
              <p><strong>Step 5:</strong> Implement auto-dismiss functionality</p>
              <p><strong>Step 6:</strong> Test all notification types and features</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuildNotification;
