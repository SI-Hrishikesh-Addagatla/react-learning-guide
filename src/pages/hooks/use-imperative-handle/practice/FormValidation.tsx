import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckSquare, CheckCircle2 } from 'lucide-react';

const FormValidationPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-imperative-handle" className="hover:text-foreground">useImperativeHandle</Link>
        <span>/</span>
        <Link to="/hooks/use-imperative-handle/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Form Validation</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <CheckSquare className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Form Validation Control</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary">Intermediate</Badge>
              <Badge variant="outline">useImperativeHandle</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Expose form validation methods to parent component using useImperativeHandle
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Build a form with imperative validation controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Create a custom form component that exposes validation methods (validate, getValues, reset, setFieldValue) to the parent. The parent should control validation from external buttons.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create CustomForm component using forwardRef</li>
                <li>Expose: validate(), getValues(), reset(), setFieldValue(name, value)</li>
                <li>Form fields: name, email, age, terms (checkbox)</li>
                <li>Validation rules: name (required, min 2), email (required, format), age (required, 18+), terms (must be checked)</li>
                <li>Parent component with external control buttons</li>
                <li>Validate button (triggers validation without submission)</li>
                <li>Get Values button (displays current form values)</li>
                <li>Prefill button (sets default values)</li>
                <li>Reset button (clears form)</li>
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
                <span>CustomForm component with forwardRef</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>validate() returns boolean and sets error messages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>getValues() returns object with all field values</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>reset() clears all fields and errors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>setFieldValue(name, value) updates specific field</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Display validation errors below each field</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Success toast when validation passes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Show current values in a card when Get Values clicked</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎨 Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-6 space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-lg mb-4">External Controls</h3>
                <div className="flex gap-2 flex-wrap">
                  <div className="border rounded px-3 py-1 text-sm">[Validate]</div>
                  <div className="border rounded px-3 py-1 text-sm">[Get Values]</div>
                  <div className="border rounded px-3 py-1 text-sm">[Prefill]</div>
                  <div className="border rounded px-3 py-1 text-sm">[Reset]</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm mb-1">Name *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                  <div className="text-xs text-red-600 mt-1">Required field</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Email *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Age *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">I agree to terms and conditions *</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="text-sm font-medium mb-2">Current Values:</div>
                <div className="border rounded p-3 text-sm bg-muted">
                  <div>Name: John Doe</div>
                  <div>Email: john@example.com</div>
                  <div>Age: 25</div>
                  <div>Terms: true</div>
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
                How do I structure the form state?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use useState for values object and errors object. Create validation functions for each field. In validate(), check all fields and update errors state. Return true if no errors.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                What methods should useImperativeHandle expose?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Expose: validate (runs validation, returns boolean), getValues (returns current values object), reset (clears values and errors), setFieldValue (updates single field), and optionally setValues (updates multiple fields).
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I validate email format?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email). For age validation, check: parseInt(age) &gt;= 18. For terms, check: terms === true.
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
                <span className="text-sm">Validate button shows errors for empty fields</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Email validation works correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Age validation requires 18+</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Terms checkbox must be checked</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Get Values displays current form state</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Prefill button sets default values</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Reset clears form and errors</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormValidationPractice;
