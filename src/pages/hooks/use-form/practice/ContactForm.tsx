import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, CheckCircle2 } from 'lucide-react';

const ContactFormPractice = () => {
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
        <span className="text-foreground">Contact Form</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Mail className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Contact Form</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Beginner</Badge>
              <Badge variant="outline">useForm</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Build a validated contact form using react-hook-form
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Create a contact form with validation using react-hook-form</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Build a contact form that uses react-hook-form for form state management and validation. Display validation errors and handle form submission.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Use react-hook-form's useForm hook</li>
                <li>Create fields for name, email, subject, and message</li>
                <li>Add validation rules (required, email format, min/max length)</li>
                <li>Display field-level error messages</li>
                <li>Handle form submission and show success message</li>
                <li>Add a reset button to clear the form</li>
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
                <span>Name field (required, min 2 characters)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Email field (required, valid email format)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Subject field (required, max 100 characters)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Message textarea (required, min 10 characters)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Display validation errors below each field</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Submit button (disabled while submitting)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Success toast on successful submission</span>
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
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm mb-1">Name *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                  <div className="text-xs text-red-600 mt-1">Error message here</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Email *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Subject *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Message *</div>
                  <div className="border rounded p-2 h-24 text-sm text-muted-foreground">[Textarea]</div>
                </div>
                <div className="flex gap-2">
                  <div className="border rounded bg-primary text-primary-foreground px-4 py-2 text-sm">
                    [Submit]
                  </div>
                  <div className="border rounded px-4 py-2 text-sm">
                    [Reset]
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
                How do I set up useForm?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Import useForm from react-hook-form and destructure register, handleSubmit, formState, and reset. Use register on each input to connect it to the form state.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I add validation?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Pass validation rules as the second argument to register: register("email", &#123; required: "Email is required", pattern: &#123; value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]&#123;2,&#125;$/i, message: "Invalid email" &#125; &#125;)
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I display errors?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Access errors from formState.errors. Display like: &#123;formState.errors.email?.message&#125;. You can style error messages with text-red-600 or use Alert components.
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
                <span className="text-sm">Form shows errors when submitting empty fields</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Email validation works for invalid formats</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Character length validations work correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Submit button disabled during submission</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Success message shown after valid submission</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Reset button clears all fields</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactFormPractice;
