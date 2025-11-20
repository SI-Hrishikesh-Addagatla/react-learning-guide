import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Timer, CheckSquare, Play } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-imperative-handle/practice/countdown-timer',
    title: 'Countdown Timer Control',
    description: 'Control a countdown timer imperatively from parent',
    difficulty: 'Beginner',
    icon: Timer,
  },
  {
    path: '/hooks/use-imperative-handle/practice/form-validation',
    title: 'Form Validation Control',
    description: 'Expose form validation methods to parent component',
    difficulty: 'Intermediate',
    icon: CheckSquare,
  },
  {
    path: '/hooks/use-imperative-handle/practice/media-player',
    title: 'Media Player Control',
    description: 'Build a media player with imperative controls',
    difficulty: 'Advanced',
    icon: Play,
  },
];

const UseImperativeHandlePractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-imperative-handle" className="hover:text-foreground">useImperativeHandle</Link>
        <span>/</span>
        <span className="text-foreground">Practice</span>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Code className="h-10 w-10" />
          useImperativeHandle Practice Problems
        </h1>
        <p className="text-lg text-muted-foreground">
          Master useImperativeHandle through hands-on challenges. Learn to expose custom methods to parent components.
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
            1. Start with <strong>Countdown Timer Control</strong> to understand imperative handles
          </p>
          <p className="text-sm text-muted-foreground">
            2. Move to <strong>Form Validation Control</strong> to work with complex methods
          </p>
          <p className="text-sm text-muted-foreground">
            3. Challenge yourself with <strong>Media Player Control</strong> to master advanced scenarios
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseImperativeHandlePractice;
