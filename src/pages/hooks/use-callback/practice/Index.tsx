import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, MousePointer, Search, FormInput } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-callback/practice/event-handler',
    title: 'Event Handler Optimization',
    description: 'Optimize event handlers to prevent unnecessary re-renders',
    difficulty: 'Beginner',
    icon: MousePointer,
  },
  {
    path: '/hooks/use-callback/practice/search-filter',
    title: 'Memoized Search Filter',
    description: 'Create a search filter with optimized callback functions',
    difficulty: 'Intermediate',
    icon: Search,
  },
  {
    path: '/hooks/use-callback/practice/optimized-form',
    title: 'Optimized Form',
    description: 'Build a complex form with multiple memoized callbacks',
    difficulty: 'Advanced',
    icon: FormInput,
  },
];

const UseCallbackPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-callback" className="hover:text-foreground">useCallback</Link>
        <span>/</span>
        <span className="text-foreground">Practice</span>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Code className="h-10 w-10" />
          useCallback Practice Problems
        </h1>
        <p className="text-lg text-muted-foreground">
          Master useCallback through hands-on challenges. Learn to optimize callbacks and prevent unnecessary re-renders.
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
            1. Start with <strong>Event Handler Optimization</strong> to understand callback memoization basics
          </p>
          <p className="text-sm text-muted-foreground">
            2. Move to <strong>Memoized Search Filter</strong> to learn callback dependencies
          </p>
          <p className="text-sm text-muted-foreground">
            3. Challenge yourself with <strong>Optimized Form</strong> to master complex callback scenarios
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseCallbackPractice;
