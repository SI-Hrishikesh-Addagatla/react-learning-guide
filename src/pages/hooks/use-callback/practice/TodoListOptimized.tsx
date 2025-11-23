import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { List, CheckCircle2 } from 'lucide-react';

const TodoListOptimized = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/use-callback" className="hover:text-foreground">useCallback</Link>
          <span>/</span>
          <Link to="/hooks/use-callback/practice" className="hover:text-foreground">Practice</Link>
          <span>/</span>
          <span className="text-foreground">Optimized Todo List</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <List className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Optimized Todo List</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">useCallback</Badge>
          <Badge variant="outline">React.memo</Badge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🎯 Challenge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Build a performant todo list that uses useCallback and React.memo to prevent unnecessary
                re-renders of todo items. Each todo should only re-render when its own data changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📋 Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Add todos with text input</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Toggle todo completion status</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Delete todos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Use useCallback for all handlers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Wrap TodoItem component with React.memo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Show render count for each todo item</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Filter todos (All/Active/Completed)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>💡 Hints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Create a separate TodoItem component and wrap it with React.memo</p>
              <p>• Use useCallback for toggle, delete, and add handlers</p>
              <p>• Pass todo ID to handlers instead of entire todo object</p>
              <p>• Use useRef to track render count per todo item</p>
              <p>• Consider using useMemo for filtered todo list</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🎨 UI Wireframe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-6 space-y-4">
                <div className="flex gap-2">
                  <div className="flex-1 p-2 bg-background rounded border text-sm text-muted-foreground">
                    Add new todo...
                  </div>
                  <div className="px-3 py-2 bg-primary/10 rounded text-sm">Add</div>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="px-2 py-1 bg-primary text-primary-foreground rounded">All</span>
                  <span className="px-2 py-1 bg-muted rounded">Active</span>
                  <span className="px-2 py-1 bg-muted rounded">Completed</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 bg-background rounded border">
                    <input type="checkbox" className="rounded" />
                    <span className="flex-1">Buy groceries</span>
                    <span className="text-xs text-muted-foreground">Renders: 1</span>
                    <span className="text-destructive text-sm">×</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded border">
                    <input type="checkbox" checked className="rounded" />
                    <span className="flex-1 line-through text-muted-foreground">Complete project</span>
                    <span className="text-xs text-muted-foreground">Renders: 1</span>
                    <span className="text-destructive text-sm">×</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✅ Testing Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Can add new todos</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Toggle completion works correctly</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Delete removes todo from list</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Filter buttons show correct todos</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Render count stays at 1 when other todos update</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Adding todo doesn't re-render existing todos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TodoListOptimized;
