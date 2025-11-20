import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Workflow, CheckCircle2 } from 'lucide-react';

const MultiStepRegistrationPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-form" className="hover:text-foreground">useForm</Link>
        <span>/</span>
        <Link to="/hooks/use-form/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Multi-Step Registration</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Workflow className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Multi-Step Registration</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="destructive">Advanced</Badge>
              <Badge variant="outline">useForm</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Build a multi-step registration form with validation at each step
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Create a 3-step registration form with react-hook-form</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Build a comprehensive registration form split into three steps: Account Info, Personal Details, and Preferences. Each step should validate before allowing progression, and users should be able to navigate back to previous steps.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Step 1: Username, email, password, confirm password</li>
                <li>Step 2: First name, last name, phone, date of birth</li>
                <li>Step 3: Country, interests (checkboxes), newsletter subscription</li>
                <li>Validate each step before allowing "Next"</li>
                <li>Allow navigation back to previous steps</li>
                <li>Show progress indicator (1 of 3, 2 of 3, etc.)</li>
                <li>Display summary on final step before submission</li>
                <li>Persist form data when navigating between steps</li>
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
                <span>Step indicator showing current step (1/3, 2/3, 3/3)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Step 1 validation: required fields, email format, password match, min 8 chars</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Step 2 validation: required fields, phone format, age 18+</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Step 3: Multi-select interests (at least one required)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Back button (disabled on step 1)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Next button (validates current step before proceeding)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Submit button (only on final step)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Review summary before final submission</span>
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
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 flex-1 bg-primary rounded" />
                <div className="h-2 flex-1 bg-muted rounded" />
                <div className="h-2 flex-1 bg-muted rounded" />
              </div>
              
              <h3 className="font-semibold text-lg">Step 1: Account Information</h3>
              <div className="text-sm text-muted-foreground mb-4">Step 1 of 3</div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm mb-1">Username *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Email *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Password *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Confirm Password *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                <div className="border rounded px-4 py-2 text-sm text-muted-foreground opacity-50">
                  [Back]
                </div>
                <div className="border rounded bg-primary text-primary-foreground px-4 py-2 text-sm">
                  [Next]
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
                How do I validate each step separately?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use trigger() from useForm to validate specific fields. For example: await trigger(['username', 'email', 'password']). If it returns true, proceed to the next step.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I persist data between steps?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                react-hook-form automatically persists form data. Use watch() to access current values for the summary, or getValues() to retrieve all form data at once.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How should I structure the component?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use a step state (0, 1, 2) to track the current step. Create separate components or JSX for each step and conditionally render based on the current step. The form wraps all steps.
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
                <span className="text-sm">Cannot proceed to step 2 with invalid step 1</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Can navigate back to previous steps</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Form data persists when going back</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Progress indicator updates correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">All validations work correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Summary shows all entered data</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Success message on completion</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MultiStepRegistrationPractice;
