import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Mail, ListPlus, Workflow } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-form/practice/contact-form',
    title: 'Contact Form',
    description: 'Build a validated contact form with useForm',
    difficulty: 'Beginner',
    icon: Mail,
  },
  {
    path: '/hooks/use-form/practice/dynamic-fields',
    title: 'Dynamic Field Form',
    description: 'Create a form with dynamically added/removed fields',
    difficulty: 'Intermediate',
    icon: ListPlus,
  },
  {
    path: '/hooks/use-form/practice/multi-step-registration',
    title: 'Multi-Step Registration',
    description: 'Build a multi-step form with validation at each step',
    difficulty: 'Advanced',
    icon: Workflow,
  },
];

const UseFormPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-form" className="hover:text-foreground">useForm</Link>
        <span>/</span>
        <span className="text-foreground">Practice</span>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Code className="h-10 w-10" />
          useForm Practice Problems
        </h1>
        <p className="text-lg text-muted-foreground">
          Master react-hook-form through hands-on challenges. Build complex forms with validation and error handling.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <Link key={practice.path} to={practice.path}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant={
                      practice.difficulty === 'Beginner' ? 'default' :
                      practice.difficulty === 'Intermediate' ? 'secondary' :
                      'destructive'
                    }>
                      {practice.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">{practice.title}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>📚 Learning Path</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            1. Start with <strong>Contact Form</strong> to learn basic form validation
          </p>
          <p className="text-sm text-muted-foreground">
            2. Move to <strong>Dynamic Field Form</strong> to handle field arrays
          </p>
          <p className="text-sm text-muted-foreground">
            3. Challenge yourself with <strong>Multi-Step Registration</strong> to master complex form flows
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseFormPractice;
