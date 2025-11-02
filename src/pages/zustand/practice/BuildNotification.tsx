import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getRelativeTime } from '@/utils/getRelativeTime';
import { useNotificationStore } from './stores/notifications/notificationStore';
import { createNotification } from './stores/notifications/notificationData';

const BuildNotification = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const {notifications,addNotification,dismissNotification,markAsRead,clearAll,getUnreadCount,filterNotificationsByStatus} = useNotificationStore();

  const getIconForType = (type: string) => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error': 
        return '✗';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return '';
    }
  }

  const filterNotifications = filterNotificationsByStatus ? filterNotificationsByStatus(activeFilter) : notifications;

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className='flex justify-between flex-wrap'>
        <Link to="/zustand/practice">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Practice
          </Button>
        </Link>
        <Button variant="outline" className="mb-6" onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? 'Show Instructions' : 'Show Preview'}
        </Button>
      </div>

      {showPreview ? (
        <>
          <div className="border rounded-lg p-4 bg-muted/30">
              <div className="space-y-4">
                {/* Header */}
                <div className="border-b pb-3">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      🔔 Notifications
                    </div>
                    <Badge variant="destructive" className='h-6 w-12 bg-destructive/30 flex items-center justify-center text-sm'>
                      {getUnreadCount()}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Manage your notifications
                  </div>
                </div>

                {/* Test Action Buttons */}
                <div>
                  <div className="text-xs font-semibold mb-2 text-muted-foreground">Test Notification Triggers (Click to Add Sample Notification):</div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant='success_light' size='sm' className="text-xs" onClick={()=> {addNotification(createNotification('success'))}}>✓ Success Button</Button>
                    <Button variant='error_light' size='sm' className="text-xs" onClick={()=> {addNotification(createNotification('error'))}}>✗ Error Button</Button>
                    <Button variant='warning_light' size='sm' className="text-xs" onClick={()=> {addNotification(createNotification('warning'))}}>⚠ Warning Button</Button>
                    <Button variant='info_light' size='sm' className="text-xs" onClick={()=> {addNotification(createNotification('info'))}}>ℹ Info Button</Button>
                  </div>
                </div>

                {/* Filter Tabs */}
                <div>
                  <div className="text-xs font-semibold mb-2 text-muted-foreground">Filter:</div>
                  <Tabs value={activeFilter} onValueChange={(value) => setActiveFilter(value)}>
                    <TabsList className="flex gap-2 flex-wrap h-auto bg-transparent p-0">
                      <TabsTrigger 
                        value="all" 
                        className="h-9 bg-muted rounded px-4 text-sm font-medium data-[state=active]:bg-primary/30"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger 
                        value="unread" 
                        className="h-9 bg-muted rounded px-4 text-sm font-medium data-[state=active]:bg-primary/30"
                      >
                        Unread
                      </TabsTrigger>
                      <TabsTrigger 
                        value="read" 
                        className="h-9 bg-muted rounded px-4 text-sm font-medium data-[state=active]:bg-primary/30"
                      >
                        Read
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Notification List */}
                <div>
                  <div className="space-y-2">
                    {filterNotifications.map((notif, i) => (
                      <div key={i} className="border rounded-lg p-3 bg-background relative">
                        {/* Header Row */}
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px]`}>
                              {getIconForType(notif.type)}
                            </div>
                            <div className="text-sm font-semibold">{notif.title}</div>
                            {!notif.isRead && (
                              <div className="h-2 w-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                          <div className="flex gap-1">
                            <Button className="bg-muted rounded text-xs text-white hover:text-black" size='icon_xs' onClick={() => {markAsRead(notif.id)}}>✓</Button>
                            <Button className="bg-muted rounded text-xs text-white hover:text-black" size='icon_xs' onClick={() => {dismissNotification(notif.id)}}>✕</Button>
                          </div>
                        </div>
                        {/* Message Row */}
                        <div className="text-xs text-muted-foreground mb-1">
                          {notif.message}
                        </div>
                        {/* Timestamp Row */}
                        <div className="text-xs text-muted-foreground/60">{getRelativeTime(notif.createdAt)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="border-t pt-3">
                  <Button variant="destructive_light" size='sm' className='w-full text-sm' onClick={clearAll}>Clear All Notifications</Button>
                </div>
              </div>
            </div>
        </>
      ):(
        <>
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
                        <div className="text-xs font-semibold mb-2 text-muted-foreground">Test Notification Triggers (Click to Add Sample Notification):</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-9 bg-green-500/20 rounded flex items-center justify-center text-xs font-medium border border-green-500/30">
                            ✓ Success Button
                          </div>
                          <div className="h-9 bg-red-500/20 rounded flex items-center justify-center text-xs font-medium border border-red-500/30">
                            ✗ Error Button
                          </div>
                          <div className="h-9 bg-yellow-500/20 rounded flex items-center justify-center text-xs font-medium border border-yellow-500/30">
                            ⚠ Warning Button
                          </div>
                          <div className="h-9 bg-blue-500/20 rounded flex items-center justify-center text-xs font-medium border border-blue-500/30">
                            ℹ Info Button
                          </div>
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-2 italic">
                          When clicked, these buttons call addNotification() with sample data
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
                        <div className="text-xs font-semibold mb-2 text-muted-foreground">Notification Cards (Each shows one notification):</div>
                        <div className="space-y-2">
                          {[
                            { icon: '✓', color: 'green', title: 'Success', message: 'Your profile was updated successfully', isRead: false },
                            { icon: '✗', color: 'red', title: 'Error', message: 'Failed to save changes. Please try again', isRead: false },
                            { icon: '⚠', color: 'yellow', title: 'Warning', message: 'Your session will expire in 5 minutes', isRead: true },
                          ].map((notif, i) => (
                            <div key={i} className="border rounded-lg p-3 bg-background relative">
                              {/* Header Row */}
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className={`h-4 w-4 bg-${notif.color}-500/40 rounded-full flex items-center justify-center text-[8px]`}>
                                    {notif.icon}
                                  </div>
                                  <div className="text-xs font-semibold">{notif.title} ← TITLE</div>
                                  {!notif.isRead && (
                                    <div className="h-2 w-2 bg-primary rounded-full" title="Blue dot = unread"></div>
                                  )}
                                </div>
                                <div className="flex gap-1">
                                  <div className="h-6 w-6 bg-muted rounded flex items-center justify-center text-[10px] border border-border cursor-pointer hover:bg-muted/80" title="Mark as Read (removes blue dot)">
                                    ✓
                                  </div>
                                  <div className="h-6 w-6 bg-muted rounded flex items-center justify-center text-[10px] border border-border cursor-pointer hover:bg-muted/80" title="Dismiss (removes notification)">
                                    ✕
                                  </div>
                                </div>
                              </div>
                              {/* Message Row */}
                              <div className="text-[10px] text-muted-foreground mb-1">
                                {notif.message} ← MESSAGE
                              </div>
                              {/* Timestamp Row */}
                              <div className="text-[10px] text-muted-foreground/60">2 minutes ago ← TIMESTAMP</div>
                              
                              {/* Annotation for read/unread */}
                              {notif.isRead && (
                                <div className="absolute top-1 right-1 text-[8px] bg-muted px-1 rounded">READ (no dot)</div>
                              )}
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

                  <div className="mt-4 text-sm space-y-3">
                    <h4 className="font-semibold text-base">🔍 Detailed Explanation:</h4>
                    
                    <div className="space-y-2 border-l-2 border-primary pl-4">
                      <div>
                        <strong className="text-primary">Test Notification Triggers:</strong>
                        <p className="text-muted-foreground text-xs mt-1">These are 4 buttons that when clicked, add a sample notification to the list. For example, clicking "Success Button" calls <code className="bg-muted px-1 rounded">addNotification()</code> with type='success', title='Success', message='Your profile was updated successfully'</p>
                      </div>

                      <div>
                        <strong className="text-primary">Filter Tabs:</strong>
                        <p className="text-muted-foreground text-xs mt-1">"All" shows all notifications, "Unread" shows only notifications with blue dot, "Read" shows only notifications without blue dot</p>
                      </div>

                      <div>
                        <strong className="text-primary">Notification Card Structure:</strong>
                        <ul className="text-muted-foreground text-xs mt-1 space-y-1 ml-4">
                          <li>• <strong>Icon:</strong> Colored circle with symbol (✓/✗/⚠/ℹ)</li>
                          <li>• <strong>Title:</strong> "Success", "Error", "Warning", or "Info"</li>
                          <li>• <strong>Blue Dot:</strong> Shows if notification is unread (isRead = false)</li>
                          <li>• <strong>Message:</strong> The actual notification text like "Your profile was updated successfully"</li>
                          <li>• <strong>Timestamp:</strong> When the notification was created (e.g., "2 minutes ago")</li>
                        </ul>
                      </div>

                      <div>
                        <strong className="text-primary">Action Buttons on Each Card:</strong>
                        <ul className="text-muted-foreground text-xs mt-1 space-y-1 ml-4">
                          <li>• <strong>✓ Button (Mark as Read):</strong> Calls <code className="bg-muted px-1 rounded">markAsRead(id)</code> - removes the blue dot, sets isRead=true</li>
                          <li>• <strong>✕ Button (Dismiss):</strong> Calls <code className="bg-muted px-1 rounded">dismissNotification(id)</code> - removes the notification from the list completely</li>
                        </ul>
                      </div>

                      <div>
                        <strong className="text-primary">Auto-dismiss Feature:</strong>
                        <p className="text-muted-foreground text-xs mt-1">When a notification is added, start a 5-second timer using <code className="bg-muted px-1 rounded">setTimeout(() =&gt; dismissNotification(id), 5000)</code></p>
                      </div>

                      <div>
                        <strong className="text-primary">Clear All Button:</strong>
                        <p className="text-muted-foreground text-xs mt-1">Calls <code className="bg-muted px-1 rounded">clearAll()</code> to remove all notifications at once</p>
                      </div>
                    </div>
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
        </>
      )}
    </div>
  );
};


export default BuildNotification;
