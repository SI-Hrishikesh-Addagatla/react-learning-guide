import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Package, ListTodo, User, ShoppingCart, Users } from 'lucide-react';

const examples = [
  {
    path: '/zustand/counter',
    title: 'Counter',
    description: 'Basic state management with actions',
    icon: Package,
    difficulty: 'Beginner',
  },
  {
    path: '/zustand/todos',
    title: 'Todo List',
    description: 'Array management and CRUD operations',
    icon: ListTodo,
    difficulty: 'Beginner',
  },
  {
    path: '/zustand/profile',
    title: 'User Profile',
    description: 'Complex state with persistence middleware',
    icon: User,
    difficulty: 'Intermediate',
  },
  {
    path: '/zustand/cart',
    title: 'Shopping Cart',
    description: 'Advanced state with computed values and devtools',
    icon: ShoppingCart,
    difficulty: 'Intermediate',
  },
  {
    path: '/zustand/collaboration',
    title: 'Team Collaboration',
    description: 'Multi-component coordination with shared store',
    icon: Users,
    difficulty: 'Advanced',
  },
];

const ZustandIndex = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Zustand State Management</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive demonstration of Zustand features through practical examples.
          Each example showcases different aspects of state management.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {examples.map((example) => (
          <Link key={example.path} to={example.path}>
            <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <example.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="flex items-center justify-between">
                      <span>{example.title}</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-2">{example.description}</CardDescription>
                <div className="mt-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {example.difficulty}
                  </span>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What is Zustand?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Zustand is a small, fast, and scalable state management solution for React.
            It uses hooks and has a simple, unopinionated API.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-muted">
              <h3 className="font-semibold mb-2">Simple</h3>
              <p className="text-sm text-muted-foreground">
                Minimal boilerplate with a straightforward API
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <h3 className="font-semibold mb-2">Flexible</h3>
              <p className="text-sm text-muted-foreground">
                Works with any React architecture, no providers needed
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <h3 className="font-semibold mb-2">Powerful</h3>
              <p className="text-sm text-muted-foreground">
                Middleware support for persistence, devtools, and more
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ZustandIndex;
