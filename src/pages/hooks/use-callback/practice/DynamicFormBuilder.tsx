import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle2 } from 'lucide-react';

const DynamicFormBuilder = () => {
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
          <span className="text-foreground">Dynamic Form Builder</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <Code className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Dynamic Form Builder</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive">Advanced</Badge>
          <Badge variant="outline">useCallback</Badge>
          <Badge variant="outline">Dynamic Fields</Badge>
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
                Create a dynamic form builder where users can add/remove fields of different types.
                Use useCallback to optimize field handlers and prevent unnecessary re-renders when the form structure changes.
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
                  <span>Add fields dynamically (text, number, email, select)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Remove fields individually</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Track field values in state</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Use useCallback for all field handlers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Memoize individual field components</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Display form data preview in JSON</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Validate required fields on submit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Show render count per field</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>💡 Hints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Store fields as array of objects with id, type, label, value</p>
              <p>• Create reusable FormField component wrapped in React.memo</p>
              <p>• Use useCallback with proper dependencies for onChange handlers</p>
              <p>• Consider using useReducer for complex form state management</p>
              <p>• Pass field id to handlers instead of field index</p>
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
                  <select className="flex-1 p-2 bg-background rounded border text-sm">
                    <option>Select field type...</option>
                    <option>Text</option>
                    <option>Number</option>
                    <option>Email</option>
                  </select>
                  <div className="px-3 py-2 bg-primary/10 rounded text-sm">Add Field</div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-background rounded border space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Name (text)</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Renders: 1</span>
                        <span className="text-destructive text-sm cursor-pointer">×</span>
                      </div>
                    </div>
                    <input type="text" className="w-full p-2 bg-muted rounded text-sm" placeholder="Enter name..." />
                  </div>
                  <div className="p-3 bg-background rounded border space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Email (email)</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Renders: 1</span>
                        <span className="text-destructive text-sm cursor-pointer">×</span>
                      </div>
                    </div>
                    <input type="email" className="w-full p-2 bg-muted rounded text-sm" placeholder="Enter email..." />
                  </div>
                </div>
                <div className="p-3 bg-muted rounded">
                  <div className="text-xs font-mono">
                    &#123;"name": "", "email": ""&#125;
                  </div>
                </div>
                <div className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm text-center">
                  Submit Form
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
                  <span>Can add fields of different types</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Can remove fields individually</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Field values update correctly</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>JSON preview shows current form data</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Render counts stay low (fields don't re-render unnecessarily)</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Form validation works on submit</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DynamicFormBuilder;
