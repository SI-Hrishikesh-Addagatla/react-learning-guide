import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, List, Zap } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-callback/practice/button-click-tracker',
    title: 'Button Click Tracker',
    description: 'Track button clicks without re-creating callback functions',
    difficulty: 'Beginner',
    icon: Zap,
  },
  {
    path: '/hooks/use-callback/practice/todo-list-optimized',
    title: 'Optimized Todo List',
    description: 'Build a performant todo list with memoized callbacks',
    difficulty: 'Intermediate',
    icon: List,
  },
  {
    path: '/hooks/use-callback/practice/dynamic-form-builder',
    title: 'Dynamic Form Builder',
    description: 'Create a form builder with optimized event handlers',
    difficulty: 'Advanced',
    icon: Code,
  },
];

const difficultyColors = {
  Beginner: 'default',
  Intermediate: 'secondary',
  Advanced: 'destructive',
} as const;

const UseCallbackPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/use-callback" className="hover:text-foreground">useCallback</Link>
          <span>/</span>
          <span className="text-foreground">Practice</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">useCallback Practice</h1>
        <p className="text-xl text-muted-foreground">
          Master performance optimization with these hands-on challenges
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
          <p>• Start with the <strong className="text-foreground">Button Click Tracker</strong> to understand callback memoization basics</p>
          <p>• Move to <strong className="text-foreground">Optimized Todo List</strong> to see real performance benefits</p>
          <p>• Challenge yourself with <strong className="text-foreground">Dynamic Form Builder</strong> for complex scenarios</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseCallbackPractice;
