import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Save, CheckCircle2 } from 'lucide-react';

const AutoSaveForm = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks" className="text-muted-foreground hover:text-foreground transition-colors">
            Hooks
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-effect" className="text-muted-foreground hover:text-foreground transition-colors">
            useEffect
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-effect/practice" className="text-muted-foreground hover:text-foreground transition-colors">
            Practice
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Auto-Save Form</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Save className="w-8 h-8 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-4xl font-bold">Auto-Save Form</h1>
              <Badge variant="secondary">Intermediate</Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Automatically save form data to localStorage with debouncing
            </p>
          </div>
        </div>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Challenge Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            Build a note-taking form that automatically saves content to localStorage after the user stops typing. The form should also load previously saved content when the component mounts. This teaches you about dependencies, debouncing, and localStorage integration.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              'Title and content textarea fields',
              'Auto-save to localStorage after 1 second of no typing',
              'Load saved data from localStorage on component mount',
              'Show "Saving..." status while debounce is pending',
              'Show "Saved!" status after successful save',
              'Clear button to reset form and localStorage',
              'Display last saved timestamp',
              'Handle empty state gracefully'
            ].map((req, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{req}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Wireframe</CardTitle>
          <CardDescription>Use this as a reference for your implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Auto-Save Notes</h3>
                  <p className="text-xs text-muted-foreground">Your notes are saved automatically</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    Saved!
                  </div>
                  <button className="h-8 px-3 border-2 border-destructive text-destructive rounded text-xs">
                    Clear
                  </button>
                </div>
              </div>
              
              <div className="space-y-4 p-6 border-2 border-border rounded-lg bg-background">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title</label>
                  <div className="h-10 border-2 border-border rounded-md bg-background px-3 flex items-center">
                    <span className="text-sm">My Notes</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Content</label>
                  <div className="min-h-[200px] border-2 border-border rounded-md bg-background p-3">
                    <p className="text-sm text-muted-foreground">
                      Start typing your notes here...
                    </p>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  Last saved: 2 minutes ago
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium mb-2">1. Load from localStorage on mount:</p>
              <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
{`useEffect(() => {
  const saved = localStorage.getItem('notes');
  if (saved) {
    const data = JSON.parse(saved);
    // Set title and content from data
  }
}, []); // Empty array = run once on mount`}
              </pre>
            </div>

            <div>
              <p className="font-medium mb-2">2. Auto-save with debouncing:</p>
              <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
{`useEffect(() => {
  // Set saving status
  const timer = setTimeout(() => {
    localStorage.setItem('notes', JSON.stringify({
      title,
      content,
      timestamp: new Date().toISOString()
    }));
    // Set saved status
  }, 1000); // 1 second debounce
  
  return () => clearTimeout(timer); // Cleanup
}, [title, content]); // Re-run when these change`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>State to Manage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="font-medium">Track:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">title</code> - note title</li>
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">content</code> - note content</li>
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">saveStatus</code> - 'idle' | 'saving' | 'saved'</li>
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">lastSaved</code> - timestamp of last save</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>localStorage Key</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>Use this key for localStorage:</p>
            <pre className="text-xs bg-muted p-3 rounded-lg">
{`const STORAGE_KEY = 'auto-save-notes';`}
            </pre>
            <p className="text-muted-foreground mt-2">
              Saved data structure:
            </p>
            <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
{`{
  title: string,
  content: string,
  timestamp: string (ISO format)
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardHeader>
          <CardTitle className="text-amber-600 dark:text-amber-400">Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>✓ Type in form, status shows "Saving..."</p>
            <p>✓ After 1 second, status changes to "Saved!"</p>
            <p>✓ Refresh page, data persists</p>
            <p>✓ Clear button removes data and resets form</p>
            <p>✓ After clear, refresh shows empty form</p>
            <p>✓ Timestamp updates correctly</p>
            <p>✓ Fast typing doesn't trigger multiple saves</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-500/20 bg-blue-500/5">
        <CardHeader>
          <CardTitle className="text-blue-600 dark:text-blue-400">💡 Pro Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• The cleanup function (clearTimeout) is crucial for debouncing</p>
            <p>• Dependencies [title, content] ensure effect runs when they change</p>
            <p>• Separate useEffect for initial load (empty deps) and auto-save</p>
            <p>• Use try-catch when parsing JSON from localStorage</p>
            <p>• Consider showing relative time ("2 minutes ago") for better UX</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutoSaveForm;
