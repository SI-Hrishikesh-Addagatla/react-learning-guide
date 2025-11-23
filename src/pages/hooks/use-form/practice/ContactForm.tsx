import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileCheck, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
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
          <span className="text-foreground">Contact Form</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <FileCheck className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Contact Form</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge>Beginner</Badge>
          <Badge variant="outline">react-hook-form</Badge>
          <Badge variant="outline">Zod</Badge>
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
                Create a contact form with validation using react-hook-form and Zod schema validation.
                Display field errors and show a success message on valid submission.
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
                  <span>Name field (required, min 2 characters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Email field (required, valid email format)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Subject field (required, min 5 characters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Message field (required, min 20 characters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Use Zod for schema validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Show inline error messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Display toast on successful submission</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>💡 Hints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Import useForm from react-hook-form</p>
              <p>• Define Zod schema with z.object()</p>
              <p>• Use zodResolver from @hookform/resolvers/zod</p>
              <p>• Access errors with formState.errors</p>
              <p>• Use register() to connect inputs to form</p>
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
                <h3 className="font-semibold text-center">Contact Us</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input type="text" className="w-full p-2 bg-background rounded border mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full p-2 bg-background rounded border mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Subject</label>
                    <input type="text" className="w-full p-2 bg-background rounded border mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea className="w-full p-2 bg-background rounded border mt-1 h-20" />
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded">
                    Send Message
                  </button>
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
                  <span>Shows error when name is too short</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Validates email format</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Subject must be at least 5 characters</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Message must be at least 20 characters</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Form submits with valid data</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Toast appears on successful submission</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
