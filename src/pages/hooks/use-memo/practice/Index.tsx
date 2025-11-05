import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Filter, Calculator, BarChart3 } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-memo/practice/filtered-list',
    title: 'Filtered Product List',
    description: 'Optimize list filtering with memoization',
    difficulty: 'Beginner',
    icon: Filter,
  },
  {
    path: '/hooks/use-memo/practice/complex-calculation',
    title: 'Complex Calculation',
    description: 'Memoize expensive computations',
    difficulty: 'Intermediate',
    icon: Calculator,
  },
  {
    path: '/hooks/use-memo/practice/data-dashboard',
    title: 'Data Dashboard',
    description: 'Build a dashboard with multiple memoized values',
    difficulty: 'Advanced',
    icon: BarChart3,
  },
];

const UseMemoPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-memo" className="hover:text-foreground">useMemo</Link>
        <span>/</span>
        <span className="text-foreground">Practice</span>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Code className="h-10 w-10" />
          useMemo Practice Problems
        </h1>
        <p className="text-lg text-muted-foreground">
          Master useMemo through hands-on challenges. Learn to optimize performance with memoization.
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
            1. Start with <strong>Filtered Product List</strong> to understand basic memoization
          </p>
          <p className="text-sm text-muted-foreground">
            2. Move to <strong>Complex Calculation</strong> to memoize expensive operations
          </p>
          <p className="text-sm text-muted-foreground">
            3. Challenge yourself with <strong>Data Dashboard</strong> to manage multiple memoized values
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseMemoPractice;
