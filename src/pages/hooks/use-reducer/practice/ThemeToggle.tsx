import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Moon, CheckCircle2 } from 'lucide-react';

const ThemeToggle = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-reducer" className="hover:text-foreground">useReducer</Link>
        <span>/</span>
        <Link to="/hooks/use-reducer/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Theme Toggle</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Moon className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">Theme Toggle</h1>
          <Badge>Beginner</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Manage application theme state using useReducer with multiple theme options.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Build a theme switcher that supports multiple themes: Light, Dark, and Auto (system preference). 
            Use <code className="px-2 py-1 bg-muted rounded">useReducer</code> to manage the theme state.
          </p>
          <p>
            The UI should update to reflect the current theme with different background and text colors.
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
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Define a reducer with actions: SET_LIGHT, SET_DARK, SET_AUTO, TOGGLE</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>State should track: current theme and previous theme</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Display three buttons: Light, Dark, Auto</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Add a TOGGLE action that cycles through themes</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Highlight the active theme button</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Apply theme styles to a preview card</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎨 Wireframe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold mb-4">Current Theme: Light</div>
              <div className="flex gap-2 justify-center mb-6">
                <div className="px-4 py-2 border rounded bg-primary text-primary-foreground">[Light]</div>
                <div className="px-4 py-2 border rounded">[Dark]</div>
                <div className="px-4 py-2 border rounded">[Auto]</div>
              </div>
              <div className="px-4 py-2 border rounded">[Toggle Theme]</div>
            </div>
            <div className="border rounded p-6 bg-muted">
              <div className="text-center">Preview Card with Current Theme</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Hints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">• State: <code className="px-2 py-1 bg-muted rounded">{'{ theme: "light", previousTheme: null }'}</code></p>
          <p className="text-sm">• Actions: <code className="px-2 py-1 bg-muted rounded">{'{ type: "SET_DARK" }'}</code></p>
          <p className="text-sm">• Toggle logic: cycle through ['light', 'dark', 'auto']</p>
          <p className="text-sm">• Use conditional classes based on current theme</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>✅ Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Clicking Light/Dark/Auto buttons changes theme</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Active theme button is highlighted</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Toggle button cycles through all themes</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Preview card reflects current theme colors</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThemeToggle;
