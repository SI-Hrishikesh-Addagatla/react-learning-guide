import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const FormExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
      toast({
        title: "Form Submitted!",
        description: `Welcome, ${name}!`,
      });
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubmitted(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Example 2: Form State Management</CardTitle>
          <Badge variant="outline">Intermediate</Badge>
        </div>
        <CardDescription>
          Managing multiple independent state values for form inputs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                disabled={submitted}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={submitted}
              />
            </div>
            
            {submitted ? (
              <div className="p-4 bg-primary/10 border border-primary rounded-lg">
                <p className="font-semibold text-primary">Submission Successful!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Name: {name}<br />
                  Email: {email}
                </p>
                <Button 
                  onClick={handleReset} 
                  variant="outline" 
                  size="sm"
                  className="mt-3"
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <Button type="submit" className="w-full">
                Submit Form
              </Button>
            )}
          </form>
        </div>

        <div className="bg-background p-4 rounded-lg border">
          <h4 className="font-semibold mb-3">Code Implementation:</h4>
          <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
            <code>{`const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  if (name && email) {
    setSubmitted(true);
  }
};

<Input
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
/>`}</code>
          </pre>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Key Concepts:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>Each input has its own state variable</li>
            <li><code className="text-primary bg-primary/10 px-1 rounded">onChange</code> handler updates state on every keystroke</li>
            <li>Controlled inputs: React state is the "source of truth"</li>
            <li>Boolean state for form submission status</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
