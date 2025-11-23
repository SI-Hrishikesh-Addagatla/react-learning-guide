import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, UserPlus, FileCheck } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-form/practice/contact-form',
    title: 'Contact Form',
    description: 'Build a validated contact form with error messages',
    difficulty: 'Beginner',
    icon: FileCheck,
  },
  {
    path: '/hooks/use-form/practice/user-profile',
    title: 'User Profile Editor',
    description: 'Create a complex profile form with nested fields',
    difficulty: 'Intermediate',
    icon: UserPlus,
  },
  {
    path: '/hooks/use-form/practice/wizard-form',
    title: 'Multi-Step Wizard',
    description: 'Build a wizard form with validation at each step',
    difficulty: 'Advanced',
    icon: Code,
  },
];

const difficultyColors = {
  Beginner: 'default',
  Intermediate: 'secondary',
  Advanced: 'destructive',
} as const;

const UseFormPractice = () => {
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
          <span className="text-foreground">Practice</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">useForm Practice</h1>
        <p className="text-xl text-muted-foreground">
          Master form validation and management with react-hook-form
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <Link key={practice.path} to={practice.path}>
              <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant={difficultyColors[practice.difficulty]}>
                      {practice.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>💡 Practice Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-muted-foreground">
          <p>• Start with <strong className="text-foreground">Contact Form</strong> to learn basic validation</p>
          <p>• Progress to <strong className="text-foreground">User Profile Editor</strong> for complex schemas</p>
          <p>• Master <strong className="text-foreground">Multi-Step Wizard</strong> for advanced form flows</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseFormPractice;
