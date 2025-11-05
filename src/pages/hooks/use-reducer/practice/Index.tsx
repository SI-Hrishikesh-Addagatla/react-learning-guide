import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Moon, ShoppingBag, ListChecks } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-reducer/practice/theme-toggle',
    title: 'Theme Toggle',
    description: 'Manage theme state with a reducer',
    difficulty: 'Beginner',
    icon: Moon,
  },
  {
    path: '/hooks/use-reducer/practice/shopping-cart',
    title: 'Shopping Cart',
    description: 'Complex cart operations with reducer',
    difficulty: 'Intermediate',
    icon: ShoppingBag,
  },
  {
    path: '/hooks/use-reducer/practice/form-wizard',
    title: 'Multi-Step Form Wizard',
    description: 'Build a form wizard with validation',
    difficulty: 'Advanced',
    icon: ListChecks,
  },
];

const UseReducerPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-reducer" className="hover:text-foreground">useReducer</Link>
        <span>/</span>
        <span className="text-foreground">Practice</span>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Code className="h-10 w-10" />
          useReducer Practice Problems
        </h1>
        <p className="text-lg text-muted-foreground">
          Master useReducer through hands-on challenges. Build real-world features with complex state logic.
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
            1. Start with <strong>Theme Toggle</strong> to understand basic reducer patterns
          </p>
          <p className="text-sm text-muted-foreground">
            2. Move to <strong>Shopping Cart</strong> to handle complex state updates
          </p>
          <p className="text-sm text-muted-foreground">
            3. Challenge yourself with <strong>Form Wizard</strong> to master multi-step state management
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseReducerPractice;
