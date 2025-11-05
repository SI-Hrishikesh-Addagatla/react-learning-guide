import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ListChecks, CheckCircle2 } from 'lucide-react';

const FormWizard = () => {
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
        <span className="text-foreground">Form Wizard</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <ListChecks className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">Multi-Step Form Wizard</h1>
          <Badge variant="destructive">Advanced</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Build a multi-step registration form with validation and navigation using useReducer.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Create a 3-step registration wizard: Personal Info, Account Details, and Preferences. 
            Use <code className="px-2 py-1 bg-muted rounded">useReducer</code> to manage form state, 
            current step, validation errors, and navigation.
          </p>
          <p>
            Each step should validate before allowing navigation to the next step.
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
              <span>Actions: NEXT_STEP, PREV_STEP, UPDATE_FIELD, SET_ERRORS, SUBMIT_FORM</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>State: currentStep, formData, errors, isSubmitted</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Step 1: First Name, Last Name, Email (all required)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Step 2: Username, Password, Confirm Password (all required)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Step 3: Newsletter checkbox, Country select</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Progress indicator showing current step</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Validate each step before allowing Next</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Display validation errors</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Show summary on final step before submit</span>
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
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</div>
                <span className="text-sm font-medium">Personal</span>
              </div>
              <div className="flex-1 h-px bg-muted my-4 mx-2"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm">2</div>
                <span className="text-sm text-muted-foreground">Account</span>
              </div>
              <div className="flex-1 h-px bg-muted my-4 mx-2"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm">3</div>
                <span className="text-sm text-muted-foreground">Preferences</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm">First Name</label>
                <div className="border rounded px-3 py-2 text-sm mt-1">[Input]</div>
              </div>
              <div>
                <label className="text-sm">Last Name</label>
                <div className="border rounded px-3 py-2 text-sm mt-1">[Input]</div>
              </div>
              <div>
                <label className="text-sm">Email</label>
                <div className="border rounded px-3 py-2 text-sm mt-1">[Input]</div>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <div className="px-4 py-2 border rounded text-sm opacity-50">[Previous]</div>
              <div className="px-4 py-2 border rounded bg-primary text-primary-foreground text-sm">[Next]</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Hints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">• State structure: <code className="px-2 py-1 bg-muted rounded">{'{ currentStep: 1, formData: {...}, errors: {...} }'}</code></p>
          <p className="text-sm">• Create validation function for each step</p>
          <p className="text-sm">• Disable Next button if current step has errors</p>
          <p className="text-sm">• Password matching: errors.confirmPassword if passwords don't match</p>
          <p className="text-sm">• Use conditional rendering to show different steps</p>
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
              <span>Progress indicator updates correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Cannot proceed with empty required fields</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Email validation works</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Password confirmation validation works</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Can navigate backward without losing data</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Summary shows all entered data</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Submit button only appears on final step</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormWizard;
