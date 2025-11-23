import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, CheckCircle2 } from 'lucide-react';

const WizardForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/use-form" className="hover:text-foreground">useForm</Link>
          <span>/</span>
          <Link to="/hooks/use-form/practice" className="hover:text-foreground">Practice</Link>
          <span>/</span>
          <span className="text-foreground">Multi-Step Wizard</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <Code className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Multi-Step Wizard Form</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="destructive">Advanced</Badge>
          <Badge variant="outline">react-hook-form</Badge>
          <Badge variant="outline">Multi-Step</Badge>
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
                Create a multi-step wizard form with step-by-step validation. Users should be able to navigate
                between steps, with each step validating only its fields. Maintain form state across steps.
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
                  <span>Step 1: Account (username, email, password)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Step 2: Personal (name, age, bio)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Step 3: Preferences (interests, notifications)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Step 4: Review (show all data before submit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Validate current step before proceeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Allow navigation to previous steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Progress indicator showing current step</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Use trigger() for partial validation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>💡 Hints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Use useState to track current step</p>
              <p>• Use trigger(['field1', 'field2']) for partial validation</p>
              <p>• Create separate schema for each step or use conditional validation</p>
              <p>• Store all form data in single form state</p>
              <p>• Use getValues() to populate review step</p>
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
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-primary">1. Account</span>
                  <span className="text-muted-foreground">2. Personal</span>
                  <span className="text-muted-foreground">3. Preferences</span>
                  <span className="text-muted-foreground">4. Review</span>
                </div>
                <div className="h-1 bg-muted rounded">
                  <div className="h-full w-1/4 bg-primary rounded" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Create Account</h3>
                  <input type="text" placeholder="Username" className="w-full p-2 bg-background rounded border" />
                  <input type="email" placeholder="Email" className="w-full p-2 bg-background rounded border" />
                  <input type="password" placeholder="Password" className="w-full p-2 bg-background rounded border" />
                </div>
                <div className="flex justify-between pt-2">
                  <div className="px-4 py-2 bg-muted text-muted-foreground rounded text-sm">
                    Back
                  </div>
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm">
                    Next
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
                  <span>Cannot proceed without valid data</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Can navigate back to previous steps</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Form data persists across steps</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Progress indicator updates correctly</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Review step shows all entered data</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Final submission works with complete data</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WizardForm;
