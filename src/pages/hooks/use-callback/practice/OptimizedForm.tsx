import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FormInput, CheckCircle2 } from 'lucide-react';

const OptimizedFormPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-callback" className="hover:text-foreground">useCallback</Link>
        <span>/</span>
        <Link to="/hooks/use-callback/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Optimized Form</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <FormInput className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Optimized Form</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="destructive">Advanced</Badge>
              <Badge variant="outline">useCallback</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Build a complex form with multiple memoized callbacks and field-level optimization
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Create a user profile form with real-time validation and optimized renders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Build a comprehensive user profile form with multiple fields, each in its own component. Optimize the form so that typing in one field doesn't re-render other fields.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create separate components for each form field (FormInput, FormSelect, etc.)</li>
                <li>Implement field-level validation with useCallback</li>
                <li>Memoize onChange handlers for each field</li>
                <li>Add async validation for username (check availability)</li>
                <li>Create memoized submit handler with validation</li>
                <li>Display validation errors without causing unnecessary re-renders</li>
                <li>Track individual field render counts</li>
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
                <span>Fields: username, email, password, confirm password, country (select)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Validation: required fields, email format, password match, username availability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Each field as a separate memoized component</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Memoized onChange handlers with proper dependencies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Debounced async username validation (simulate API call)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Form submission with all validations passing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Success/error toast on submit</span>
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
              <h3 className="font-semibold text-lg">User Profile Form</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm mb-1">Username *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input] (renders: 1)</div>
                  <div className="text-xs text-green-600 mt-1">✓ Available</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Email *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input] (renders: 1)</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Password *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input] (renders: 1)</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Confirm Password *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input] (renders: 1)</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Country *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Select] (renders: 1)</div>
                </div>
                <div className="border rounded bg-primary text-primary-foreground p-2 text-center">
                  [Submit Button]
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
                How do I prevent field re-renders?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Create individual field components (e.g., FormInputField) and wrap them with React.memo. Pass memoized onChange handlers and use a controlled approach where each field only receives its own value.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How should I handle async validation?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Create a memoized debounced callback that simulates an API call (setTimeout). Show loading state while validating. Include username in the dependency array but use a debounce to limit calls.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                What about password confirmation validation?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                The confirm password validation callback needs both password and confirmPassword in its dependencies. Use useCallback to memoize the validation function that compares these values.
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
                <span className="text-sm">Typing in one field doesn't re-render other fields</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Username validation shows loading state</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Email validation works correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Password confirmation validates correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Form submission blocked when validation fails</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Success toast shown on valid submission</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OptimizedFormPractice;
