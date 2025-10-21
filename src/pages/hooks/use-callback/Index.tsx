import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Component, MousePointer, RefreshCw } from 'lucide-react';

const examples = [
  {
    path: '/hooks/use-callback/child-optimization',
    title: 'Child Optimization',
    description: 'Preventing unnecessary child re-renders',
    icon: Component,
  },
  {
    path: '/hooks/use-callback/event-handlers',
    title: 'Event Handlers',
    description: 'Memoizing event handler functions',
    icon: MousePointer,
  },
  {
    path: '/hooks/use-callback/dependency-optimization',
    title: 'Dependency Optimization',
    description: 'Managing useEffect dependencies efficiently',
    icon: RefreshCw,
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

      <Card className="p-6 bg-muted/50">
        <h3 className="text-xl font-semibold mb-4">Learning Path</h3>
        <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
          <li>Start with <strong className="text-foreground">Child Optimization</strong> - Understand the basics</li>
          <li>Move to <strong className="text-foreground">Event Handlers</strong> - Real-world usage</li>
          <li>Finish with <strong className="text-foreground">Dependency Optimization</strong> - Advanced patterns</li>
        </ol>
      </Card>
    </div>
  );
};

export default UseCallbackIndex;
