import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ToggleLeft, CheckCircle2 } from 'lucide-react';

const UseTogglePractice = () => {
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
        <span className="text-foreground">useToggle</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <ToggleLeft className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">useToggle Hook</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Beginner</Badge>
              <Badge variant="outline">Custom Hooks</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Create a reusable toggle hook for boolean states
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Build a custom useToggle hook and use it in multiple components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Create a reusable custom hook called useToggle that manages boolean state with toggle, setTrue, and setFalse functions. Use this hook to create a theme switcher, modal control, and feature flag toggle.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create useToggle hook that returns [value, toggle, setTrue, setFalse]</li>
                <li>Implement theme switcher (Light/Dark) using useToggle</li>
                <li>Create a modal that opens/closes with useToggle</li>
                <li>Build a feature flag toggle for showing advanced features</li>
                <li>Add a sidebar collapse/expand toggle</li>
                <li>Hook should accept optional initial value (default: false)</li>
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
                <span>useToggle hook in a separate hooks folder</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Hook returns: [value, toggle, setTrue, setFalse]</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Optional initialValue parameter</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Theme switcher button showing current theme</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Modal with open/close functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Feature toggle that shows/hides advanced options</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Sidebar collapse/expand button</span>
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
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-semibold">useToggle Demo</h3>
                <div className="border rounded px-3 py-1 text-sm">[☀️ Light Mode]</div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="font-medium mb-2">Theme Switcher</div>
                  <div className="border rounded p-2 text-sm">Current: Light</div>
                  <div className="border rounded bg-primary text-primary-foreground px-3 py-1 text-sm mt-2 inline-block">
                    [Toggle Theme]
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Modal Control</div>
                  <div className="border rounded bg-primary text-primary-foreground px-3 py-1 text-sm inline-block">
                    [Open Modal]
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Feature Toggle</div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-6 border rounded-full bg-muted" />
                    <span className="text-sm">Show Advanced Features</span>
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Sidebar</div>
                  <div className="flex gap-2">
                    <div className="w-48 border rounded p-3 text-sm">[Sidebar Content]</div>
                    <button className="border rounded px-2">[←]</button>
                  </div>
                </div>
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
                How should I structure the useToggle hook?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use useState with initialValue. Create three memoized functions: toggle (uses prev =&gt; !prev), setTrue (sets to true), setFalse (sets to false). Return as an array or object.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                Should I use useCallback?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Yes! Wrap toggle, setTrue, and setFalse with useCallback to prevent unnecessary re-renders when passing these functions to child components.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I implement the theme switcher?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use useToggle with initial value false (light). When true, apply dark theme classes. Display current theme and toggle button to switch between them.
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
                <span className="text-sm">useToggle hook toggles correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">setTrue and setFalse functions work</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Theme switcher changes theme</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Modal opens and closes correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Feature toggle shows/hides content</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Sidebar expands and collapses</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UseTogglePractice;
