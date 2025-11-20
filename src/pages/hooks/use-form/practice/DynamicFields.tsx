import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ListPlus, CheckCircle2 } from 'lucide-react';

const DynamicFieldsPractice = () => {
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
        <span className="text-foreground">Dynamic Fields</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <ListPlus className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Dynamic Field Form</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary">Intermediate</Badge>
              <Badge variant="outline">useForm</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Create a form with dynamically added and removed fields using useFieldArray
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Build a project form where users can add/remove team members dynamically</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Create a project form that allows users to add multiple team members. Each team member should have name, email, and role fields. Users should be able to add, remove, and validate each team member.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Use react-hook-form with useFieldArray</li>
                <li>Create static fields for project name and description</li>
                <li>Add dynamic team member fields (name, email, role)</li>
                <li>Add "Add Team Member" button to create new field groups</li>
                <li>Add remove button for each team member (except the first)</li>
                <li>Validate all fields including dynamic ones</li>
                <li>Handle form submission with all team members</li>
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
                <span>Project name field (required)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Project description textarea (required)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Dynamic team member fields: name (required), email (required, valid), role (select, required)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>At least one team member required</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Add button to add new team members</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Remove button for each member (disabled if only one)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Role options: Developer, Designer, Manager, QA</span>
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
              <h3 className="font-semibold text-lg">New Project</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm mb-1">Project Name *</div>
                  <div className="border rounded p-2 text-sm text-muted-foreground">[Input]</div>
                </div>
                <div>
                  <div className="text-sm mb-1">Description *</div>
                  <div className="border rounded p-2 h-20 text-sm text-muted-foreground">[Textarea]</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="font-medium mb-3">Team Members</div>
                  <div className="border rounded p-3 mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Member 1</span>
                      <button className="text-xs text-muted-foreground">[Remove]</button>
                    </div>
                    <div className="space-y-2">
                      <div className="border rounded p-2 text-xs">[Name input]</div>
                      <div className="border rounded p-2 text-xs">[Email input]</div>
                      <div className="border rounded p-2 text-xs">[Role select]</div>
                    </div>
                  </div>
                  
                  <button className="border-2 border-dashed rounded p-2 w-full text-sm">
                    + Add Team Member
                  </button>
                </div>
                
                <div className="border rounded bg-primary text-primary-foreground p-2 text-center">
                  [Create Project]
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
                How do I use useFieldArray?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Import useFieldArray from react-hook-form and call it with control and name: const &#123; fields, append, remove &#125; = useFieldArray(&#123; control, name: "teamMembers" &#125;). Map over fields to render each team member.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I register dynamic fields?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use the field index in the register name: register(`teamMembers.$&#123;index&#125;.name`). This creates unique field names like "teamMembers.0.name", "teamMembers.1.name", etc.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I add new team members?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Call append(&#123; name: "", email: "", role: "" &#125;) to add a new team member with default values. Call remove(index) to remove a specific team member.
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
                <span className="text-sm">Can add new team members</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Can remove team members (except last one)</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Each team member validates independently</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Email validation works for all members</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Form submission includes all team members</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Success message shows all submitted data</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DynamicFieldsPractice;
