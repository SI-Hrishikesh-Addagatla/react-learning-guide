import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ClipboardList, CheckCircle2 } from 'lucide-react';

const MultiStepForm = () => {
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
          <Link to="/hooks/use-state" className="text-muted-foreground hover:text-foreground transition-colors">
            useState
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-state/practice" className="text-muted-foreground hover:text-foreground transition-colors">
            Practice
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Multi-Step Form</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <ClipboardList className="w-8 h-8 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-4xl font-bold">Multi-Step Form</h1>
              <Badge variant="destructive">Advanced</Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Build a registration form with progress tracking and validation
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
            Create a multi-step registration form with three steps: Personal Info, Account Details, and Preferences. Include progress tracking, navigation between steps, validation, and a summary view.
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
              'Step 1: Personal Info (Name, Email, Phone)',
              'Step 2: Account Details (Username, Password, Confirm Password)',
              'Step 3: Preferences (Newsletter checkbox, Notifications toggle)',
              'Progress indicator showing current step (1/3, 2/3, 3/3)',
              'Next/Previous navigation buttons',
              'Disable Next button if current step is incomplete',
              'Final step shows summary of all entered data',
              'Submit button on final step',
              'Ability to go back and edit any step'
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
            <div className="max-w-lg mx-auto space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Registration Form</h3>
                
                {/* Progress */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div className="w-16 h-1 bg-border"></div>
                  <div className="w-10 h-10 rounded-full bg-muted border-2 border-border flex items-center justify-center text-sm">2</div>
                  <div className="w-16 h-1 bg-border"></div>
                  <div className="w-10 h-10 rounded-full bg-muted border-2 border-border flex items-center justify-center text-sm">3</div>
                </div>
                <p className="text-xs text-muted-foreground mb-6">Step 1 of 3: Personal Information</p>
              </div>

              <div className="space-y-4 p-6 border-2 border-border rounded-lg bg-background">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name *</label>
                  <div className="h-10 border-2 border-border rounded-md bg-background px-3 flex items-center">
                    <span className="text-sm text-muted-foreground">Enter your name</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <div className="h-10 border-2 border-border rounded-md bg-background px-3 flex items-center">
                    <span className="text-sm text-muted-foreground">Enter your email</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone *</label>
                  <div className="h-10 border-2 border-border rounded-md bg-background px-3 flex items-center">
                    <span className="text-sm text-muted-foreground">Enter your phone</span>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <div className="h-10 px-6 border-2 border-border rounded-md bg-muted opacity-50 flex items-center">
                    <span className="text-sm">Previous</span>
                  </div>
                  <div className="h-10 px-6 border-2 border-primary rounded-md bg-primary/10 flex items-center">
                    <span className="text-sm font-medium">Next</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-center text-muted-foreground">
                * Required fields
              </div>
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
            <p className="font-medium">Form data structure:</p>
            <pre className="text-xs bg-muted p-4 rounded-lg overflow-x-auto">
{`{
  currentStep: 1,
  personalInfo: {
    name: '',
    email: '',
    phone: ''
  },
  accountDetails: {
    username: '',
    password: '',
    confirmPassword: ''
  },
  preferences: {
    newsletter: false,
    notifications: true
  }
}`}
            </pre>
            <p className="text-muted-foreground mt-4">
              Consider: Single state object vs multiple useState calls? How to validate each step? How to navigate between steps?
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Validation Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p className="font-medium">Step 1:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>All fields required</li>
              <li>Email must be valid format</li>
            </ul>
            
            <p className="font-medium mt-4">Step 2:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>All fields required</li>
              <li>Password minimum 6 characters</li>
              <li>Passwords must match</li>
            </ul>

            <p className="font-medium mt-4">Step 3:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>No validation needed (optional preferences)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardHeader>
          <CardTitle className="text-amber-600 dark:text-amber-400">Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>✓ Cannot proceed to step 2 without completing step 1</p>
            <p>✓ Progress indicator updates correctly</p>
            <p>✓ Can navigate back and see previously entered data</p>
            <p>✓ Password validation works correctly</p>
            <p>✓ Passwords must match to proceed</p>
            <p>✓ Summary shows all entered information</p>
            <p>✓ Can edit any step from summary</p>
            <p>✓ Submit logs or displays final form data</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiStepForm;
