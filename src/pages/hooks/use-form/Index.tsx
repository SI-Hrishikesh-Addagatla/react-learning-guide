import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, CheckCircle2, UserPlus, LogIn, ClipboardList } from 'lucide-react';

const examples = [
  {
    path: '/hooks/use-form/registration',
    title: 'Registration Form',
    description: 'Build a complete registration form with validation',
    icon: UserPlus,
  },
  {
    path: '/hooks/use-form/login',
    title: 'Login Form',
    description: 'Create a login form with error handling',
    icon: LogIn,
  },
  {
    path: '/hooks/use-form/survey',
    title: 'Survey Form',
    description: 'Build a multi-field survey with dynamic validation',
    icon: ClipboardList,
  },
];

const UseFormIndex = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <span className="text-foreground">useForm</span>
        </nav>
        <div className="flex items-center gap-3 mb-2">
          <FileText className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">useForm Hook</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Master form management with react-hook-form
        </p>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>What is useForm?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <code className="px-2 py-1 bg-muted rounded">useForm</code> is a powerful hook from the 
            react-hook-form library that simplifies form handling in React. It provides built-in 
            validation, error handling, and performance optimization out of the box.
          </p>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Key Characteristics:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Built-in validation:</strong> Supports various validation rules and custom validators</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Performance optimized:</strong> Minimizes re-renders with uncontrolled components</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Error handling:</strong> Automatic error state management and display</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>TypeScript support:</strong> Full type safety for form data</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">When to use useForm:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Building forms with validation requirements</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Need to handle complex form state efficiently</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Want to reduce re-renders in form components</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Managing dynamic forms with changing fields</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Practical Examples</h2>
        
        <div className="grid gap-4">
          {examples.map((example) => (
            <Link key={example.path} to={example.path}>
              <Card className="transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <example.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {example.title}
                      </CardTitle>
                      <CardDescription>{example.description}</CardDescription>
                    </div>
                    <Badge variant="outline">Interactive</Badge>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Learning Path</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              <div>
                <strong>Start with Registration Form</strong>
                <p className="text-sm text-muted-foreground">Learn basic form setup and validation</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              <div>
                <strong>Practice with Login Form</strong>
                <p className="text-sm text-muted-foreground">Handle authentication patterns</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              <div>
                <strong>Build a Survey Form</strong>
                <p className="text-sm text-muted-foreground">Work with complex, multi-field forms</p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseFormIndex;
