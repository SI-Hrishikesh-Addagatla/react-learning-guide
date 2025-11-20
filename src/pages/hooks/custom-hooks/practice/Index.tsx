import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, ToggleLeft, Loader, ArrowDown } from 'lucide-react';

const practices = [
  {
    path: '/hooks/custom-hooks/practice/use-toggle',
    title: 'useToggle Hook',
    description: 'Create a reusable toggle hook for boolean states',
    difficulty: 'Beginner',
    icon: ToggleLeft,
  },
  {
    path: '/hooks/custom-hooks/practice/use-async',
    title: 'useAsync Hook',
    description: 'Build a custom hook for handling async operations',
    difficulty: 'Intermediate',
    icon: Loader,
  },
  {
    path: '/hooks/custom-hooks/practice/use-infinite-scroll',
    title: 'useInfiniteScroll Hook',
    description: 'Implement infinite scrolling with a custom hook',
    difficulty: 'Advanced',
    icon: ArrowDown,
  },
];

const CustomHooksPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/custom-hooks" className="hover:text-foreground">Custom Hooks</Link>
        <span>/</span>
        <span className="text-foreground">Practice</span>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Code className="h-10 w-10" />
          Custom Hooks Practice Problems
        </h1>
        <p className="text-lg text-muted-foreground">
          Master custom hook creation through hands-on challenges. Build reusable hooks for common patterns.
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
            1. Start with <strong>useToggle Hook</strong> to understand basic custom hook patterns
          </p>
          <p className="text-sm text-muted-foreground">
            2. Move to <strong>useAsync Hook</strong> to handle complex state management
          </p>
          <p className="text-sm text-muted-foreground">
            3. Challenge yourself with <strong>useInfiniteScroll Hook</strong> to master advanced patterns
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomHooksPractice;
