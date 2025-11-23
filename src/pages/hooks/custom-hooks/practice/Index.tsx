import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Repeat, Wifi } from 'lucide-react';

const practices = [
  {
    path: '/hooks/custom-hooks/practice/use-toggle',
    title: 'useToggle Hook',
    description: 'Create a reusable toggle state hook',
    difficulty: 'Beginner',
    icon: Repeat,
  },
  {
    path: '/hooks/custom-hooks/practice/use-async',
    title: 'useAsync Hook',
    description: 'Build an async operation handler with loading states',
    difficulty: 'Intermediate',
    icon: Wifi,
  },
  {
    path: '/hooks/custom-hooks/practice/use-form-input',
    title: 'useFormInput Hook',
    description: 'Create a hook for managing form input state',
    difficulty: 'Advanced',
    icon: Code,
  },
];

const difficultyColors = {
  Beginner: 'default',
  Intermediate: 'secondary',
  Advanced: 'destructive',
} as const;

const CustomHooksPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/custom-hooks" className="hover:text-foreground">Custom Hooks</Link>
          <span>/</span>
          <span className="text-foreground">Practice</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">Custom Hooks Practice</h1>
        <p className="text-xl text-muted-foreground">
          Build your own reusable hooks from scratch
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
          <p>• Start with <strong className="text-foreground">useToggle</strong> to understand hook basics</p>
          <p>• Build <strong className="text-foreground">useAsync</strong> to handle async operations</p>
          <p>• Master <strong className="text-foreground">useFormInput</strong> for complex state management</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomHooksPractice;
