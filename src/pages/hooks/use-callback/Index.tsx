import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Component, MousePointer, FileText } from 'lucide-react';

const examples = [
  {
    path: '/hooks/use-callback/parent-child',
    title: 'Parent-Child Optimization',
    description: 'Preventing unnecessary child component re-renders',
    icon: Component,
  },
  {
    path: '/hooks/use-callback/event-handler',
    title: 'Event Handler Stability',
    description: 'Stabilize event listeners in useEffect dependencies',
    icon: MousePointer,
  },
  {
    path: '/hooks/use-callback/form-optimization',
    title: 'Form Optimization',
    description: 'Optimize large forms with memoized callbacks',
    icon: FileText,
  },
];

const UseCallbackIndex = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks" className="text-muted-foreground hover:text-foreground transition-colors">
            Hooks
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">useCallback</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">useCallback Hook</h1>
          <p className="text-xl text-muted-foreground">
            Optimize performance by memoizing callback functions
          </p>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">What is useCallback?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <code className="px-2 py-1 bg-muted rounded">useCallback</code> is a React Hook that lets you cache 
            a function definition between re-renders. It returns a memoized version of the callback.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Key characteristics:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Memoizes functions (not values)</li>
              <li>Prevents function recreation on every render</li>
              <li>Only recreates when dependencies change</li>
              <li>Essential for optimizing child components</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">When to use useCallback:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Passing callbacks to optimized child components</li>
              <li>Functions used in useEffect dependencies</li>
              <li>Event handlers in lists with many items</li>
              <li>Callbacks passed to custom hooks</li>
            </ul>
          </div>
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="font-semibold text-foreground mb-2">💡 useMemo vs useCallback</p>
            <p><code className="px-2 py-1 bg-muted rounded">useMemo</code> caches the result of calling a function.</p>
            <p><code className="px-2 py-1 bg-muted rounded">useCallback</code> caches the function itself.</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example) => {
          const Icon = example.icon;
          return (
            <Link key={example.path} to={example.path}>
              <Card className="p-6 h-full hover:border-primary transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-muted-foreground">{example.description}</p>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>🎯 Ready to Practice?</CardTitle>
          <CardDescription>Test your optimization skills</CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/hooks/use-callback/practice">
            <div className="flex items-center justify-between p-4 border-2 border-primary rounded-lg bg-background hover:bg-primary/5 transition-colors cursor-pointer">
              <div>
                <div className="font-medium">Practice Problems</div>
                <div className="text-sm text-muted-foreground">Build performant components</div>
              </div>
              <Badge>3 Challenges</Badge>
            </div>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseCallbackIndex;
