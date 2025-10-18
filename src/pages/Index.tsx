// Update this page (the content is just a fallback if you fail to update the page)

import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ListTodo, User, ShoppingCart } from 'lucide-react';

const examples = [
  {
    path: '/counter',
    title: 'Counter',
    description: 'Basic state management with actions',
    icon: Package,
    color: 'text-blue-500',
  },
  {
    path: '/todos',
    title: 'Todo List',
    description: 'Array management and CRUD operations',
    icon: ListTodo,
    color: 'text-green-500',
  },
  {
    path: '/profile',
    title: 'User Profile',
    description: 'Complex state with persistence middleware',
    icon: User,
    color: 'text-purple-500',
  },
  {
    path: '/cart',
    title: 'Shopping Cart',
    description: 'Advanced state with computed values and devtools',
    icon: ShoppingCart,
    color: 'text-orange-500',
  },
];

const Index = () => {
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
            <Card className="h-full hover:border-primary transition-colors cursor-pointer group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-muted ${example.color}`}>
                    <example.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="flex items-center justify-between">
                      {example.title}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </div>
                </div>
                <CardDescription>{example.description}</CardDescription>
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

export default Index;
