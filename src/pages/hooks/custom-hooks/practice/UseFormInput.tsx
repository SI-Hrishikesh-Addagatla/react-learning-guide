import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle2 } from 'lucide-react';

const UseFormInput = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/custom-hooks" className="hover:text-foreground">Custom Hooks</Link>
          <span>/</span>
          <Link to="/hooks/custom-hooks/practice" className="hover:text-foreground">Practice</Link>
          <span>/</span>
          <span className="text-foreground">useFormInput</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <Code className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">useFormInput Hook</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive">Advanced</Badge>
          <Badge variant="outline">Custom Hook</Badge>
          <Badge variant="outline">Forms</Badge>
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
                Create a useFormInput hook that manages form input state with validation, error messages,
                touched state, and reset functionality. Build a complete form using multiple instances of this hook.
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
                  <span>Create useFormInput custom hook</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Accept initial value and validation function</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Return value, error, touched, onChange, onBlur, reset</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Validate on blur (touched state)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Show errors only after field is touched</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Build a form with email, password, name</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Implement custom validators for each field</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Validate entire form before submit</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>💡 Hints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Use useState for value, error, and touched states</p>
              <p>• Validation function should return error string or null</p>
              <p>• onBlur sets touched to true and runs validation</p>
              <p>• Create reusable validators (email, minLength, required)</p>
              <p>• Consider using useCallback for handlers</p>
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
                <h3 className="font-semibold">Registration Form</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input type="text" className="w-full p-2 bg-background rounded border mt-1" />
                    <div className="text-xs text-destructive mt-1">
                      (Error: Name is required)
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full p-2 bg-background rounded border mt-1" />
                    <div className="text-xs text-destructive mt-1">
                      (Error: Invalid email format)
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Password</label>
                    <input type="password" className="w-full p-2 bg-background rounded border mt-1" />
                    <div className="text-xs text-destructive mt-1">
                      (Error: Min 8 characters)
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-muted text-foreground rounded text-sm">
                      Reset
                    </button>
                    <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded text-sm">
                      Submit
                    </button>
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
                  <span>Fields update on input change</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Errors show only after field is touched</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Email validation works correctly</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Password length validation works</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Reset clears all fields and errors</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Submit blocked if any field has error</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UseFormInput;
