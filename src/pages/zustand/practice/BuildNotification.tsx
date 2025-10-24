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
                      <div className="flex items-center justify-center h-8 bg-primary/20 rounded w-48 text-sm font-bold">
                        🔔 Notifications
                      </div>
                      <div className="h-6 w-12 bg-destructive/30 rounded-full flex items-center justify-center text-xs font-bold">
                        5
                      </div>
                    </div>
                    <div className="flex items-center justify-center h-4 bg-muted rounded w-full mt-2 text-xs">
                      Manage your notifications
                    </div>
                  </div>

                  {/* Test Action Buttons */}
                  <div>
                    <div className="text-xs font-semibold mb-2 text-muted-foreground">Test Notification Triggers:</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-9 bg-green-500/20 rounded flex items-center justify-center text-xs font-medium">
                        ✓ Trigger Success
                      </div>
                      <div className="h-9 bg-red-500/20 rounded flex items-center justify-center text-xs font-medium">
                        ✗ Trigger Error
                      </div>
                      <div className="h-9 bg-yellow-500/20 rounded flex items-center justify-center text-xs font-medium">
                        ⚠ Trigger Warning
                      </div>
                      <div className="h-9 bg-blue-500/20 rounded flex items-center justify-center text-xs font-medium">
                        ℹ Trigger Info
                      </div>
                    </div>
                  </div>

                  {/* Filter Tabs */}
                  <div>
                    <div className="text-xs font-semibold mb-2 text-muted-foreground">Filter:</div>
                    <div className="flex gap-2">
                      <div className="h-8 bg-primary/30 rounded px-3 flex items-center text-xs font-medium">All</div>
                      <div className="h-8 bg-muted rounded px-3 flex items-center text-xs">Unread</div>
                      <div className="h-8 bg-muted rounded px-3 flex items-center text-xs">Read</div>
                    </div>
                  </div>

                  {/* Notification List */}
                  <div>
                    <div className="text-xs font-semibold mb-2 text-muted-foreground">Notification Cards:</div>
                    <div className="space-y-2">
                      {[
                        { icon: '✓', color: 'green', title: 'Success', message: 'Your profile was updated successfully' },
                        { icon: '✗', color: 'red', title: 'Error', message: 'Failed to save changes. Please try again' },
                        { icon: '⚠', color: 'yellow', title: 'Warning', message: 'Your session will expire in 5 minutes' },
                      ].map((notif, i) => (
                        <div key={i} className="border rounded-lg p-3 bg-background">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className={`h-4 w-4 bg-${notif.color}-500/40 rounded-full flex items-center justify-center text-[8px]`}>
                                {notif.icon}
                              </div>
                              <div className="text-xs font-semibold">{notif.title}</div>
                              <div className="h-2 w-2 bg-primary rounded-full" title="Unread indicator"></div>
                            </div>
                            <div className="flex gap-1">
                              <div className="h-6 w-6 bg-muted rounded flex items-center justify-center text-[10px]" title="Mark as read">
                                ✓
                              </div>
                              <div className="h-6 w-6 bg-muted rounded flex items-center justify-center text-[10px]" title="Dismiss">
                                ✕
                              </div>
                            </div>
                          </div>
                          <div className="text-[10px] text-muted-foreground mb-1">
                            {notif.message}
                          </div>
                          <div className="text-[10px] text-muted-foreground/60">2 minutes ago</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="border-t pt-3">
                    <div className="h-8 bg-destructive/20 rounded w-full flex items-center justify-center text-xs font-medium">
                      Clear All Notifications
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm space-y-2">
                <h4 className="font-semibold">Detailed Component Breakdown:</h4>
                <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                  <li><strong>Header:</strong> "Notifications" title with unread count badge (red circle)</li>
                  <li><strong>Test Buttons:</strong> 4 buttons to trigger sample notifications (Success, Error, Warning, Info)</li>
                  <li><strong>Filter Tabs:</strong> "All", "Unread", "Read" buttons (highlight active)</li>
                  <li><strong>Notification Cards:</strong> Vertically stacked list showing:
                    <ul className="list-circle ml-5 mt-1">
                      <li>Type icon (✓ success, ✗ error, ⚠ warning, ℹ info) with colored background</li>
                      <li>Title (Success/Error/Warning/Info)</li>
                      <li>Blue dot indicator for unread (hide for read)</li>
                      <li>Message text (2 lines)</li>
                      <li>Timestamp ("2 minutes ago")</li>
                      <li>Mark as read button (checkmark icon)</li>
                      <li>Dismiss button (X icon)</li>
                    </ul>
                  </li>
                  <li><strong>Auto-dismiss:</strong> Notifications should auto-dismiss after 5 seconds (use setTimeout)</li>
                  <li><strong>Clear All Button:</strong> Removes all notifications at once</li>
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
