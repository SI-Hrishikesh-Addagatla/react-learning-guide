import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserPlus, CheckCircle2 } from 'lucide-react';

const UserProfile = () => {
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
          <span className="text-foreground">User Profile Editor</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <UserPlus className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">User Profile Editor</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Intermediate</Badge>
          <Badge variant="outline">react-hook-form</Badge>
          <Badge variant="outline">Nested Fields</Badge>
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
                Build a comprehensive user profile editor with nested objects (address, preferences) and
                arrays (phone numbers). Use react-hook-form's advanced features like nested fields and field arrays.
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
                  <span>Personal info: name, email, bio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Nested address object: street, city, zip, country</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Dynamic phone numbers array (add/remove)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Preferences: newsletter, notifications (checkboxes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Use useFieldArray for phone numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Comprehensive Zod validation schema</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span>Show form data preview</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>💡 Hints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Use dot notation for nested fields: address.street</p>
              <p>• Import useFieldArray for dynamic arrays</p>
              <p>• Define nested schemas in Zod with z.object()</p>
              <p>• Use z.array() for phone numbers validation</p>
              <p>• Consider watch() to show live form preview</p>
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
                <h3 className="font-semibold">Edit Profile</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-background rounded border">
                    <div className="font-medium mb-2">Personal Information</div>
                    <div className="space-y-2">
                      <input type="text" placeholder="Name" className="w-full p-2 bg-muted rounded" />
                      <input type="email" placeholder="Email" className="w-full p-2 bg-muted rounded" />
                      <textarea placeholder="Bio" className="w-full p-2 bg-muted rounded h-16" />
                    </div>
                  </div>
                  <div className="p-3 bg-background rounded border">
                    <div className="font-medium mb-2">Address</div>
                    <div className="space-y-2">
                      <input type="text" placeholder="Street" className="w-full p-2 bg-muted rounded" />
                      <div className="grid grid-cols-2 gap-2">
                        <input type="text" placeholder="City" className="p-2 bg-muted rounded" />
                        <input type="text" placeholder="Zip" className="p-2 bg-muted rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-background rounded border">
                    <div className="font-medium mb-2">Phone Numbers</div>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <input type="tel" placeholder="+1 555..." className="flex-1 p-2 bg-muted rounded" />
                        <span className="text-destructive">×</span>
                      </div>
                      <div className="text-primary text-xs">+ Add Phone</div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded">
                    Save Profile
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
                  <span>All personal fields validate correctly</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Nested address fields work properly</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Can add multiple phone numbers</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Can remove phone numbers</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Checkboxes update correctly</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Form preview shows current values</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
