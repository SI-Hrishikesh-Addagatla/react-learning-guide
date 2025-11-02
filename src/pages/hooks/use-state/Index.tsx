import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const examples = [
  {
    path: '/hooks/use-state/counter',
    title: 'Simple Counter',
    description: 'Learn basic state management with increment, decrement, and reset operations',
    difficulty: 'Basic',
  },
  {
    path: '/hooks/use-state/form',
    title: 'Form State Management',
    description: 'Managing multiple independent state values for form inputs',
    difficulty: 'Intermediate',
  },
  {
    path: '/hooks/use-state/todos',
    title: 'Array State Management',
    description: 'Managing complex state with arrays - adding and removing items',
    difficulty: 'Advanced',
  },
];

const UseStateIndex = () => {
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
          <span className="text-foreground font-medium">useState</span>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold">
              <code className="text-primary">useState</code>
            </h1>
            <Badge>Beginner</Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            The fundamental hook for managing component state in React
          </p>
        </div>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>What is useState?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <code className="text-primary bg-primary/10 px-2 py-1 rounded">useState</code> is a React hook that lets you add state to functional components. 
            It returns an array with two elements: the current state value and a function to update it.
          </p>
          
          <div className="bg-background p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">Basic Syntax:</h4>
            <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">
              <code>{`const [state, setState] = useState(initialValue);`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-background border">
              <h4 className="font-semibold mb-1 text-sm">state</h4>
              <p className="text-xs text-muted-foreground">The current state value</p>
            </div>
            <div className="p-3 rounded-lg bg-background border">
              <h4 className="font-semibold mb-1 text-sm">setState</h4>
              <p className="text-xs text-muted-foreground">Function to update the state</p>
            </div>
            <div className="p-3 rounded-lg bg-background border">
              <h4 className="font-semibold mb-1 text-sm">initialValue</h4>
              <p className="text-xs text-muted-foreground">The initial state value</p>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
            <h4 className="font-semibold mb-2">Key Points:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>State updates trigger component re-renders</li>
              <li>State is preserved between re-renders</li>
              <li>State updates are asynchronous</li>
              <li>You can use functional updates: <code className="text-primary bg-primary/10 px-1 rounded">{`setState(prev => prev + 1)`}</code></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎯 Ready to Practice?
          </CardTitle>
          <CardDescription>
            Test your understanding with hands-on challenges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/hooks/use-state/practice">
            <div className="flex items-center justify-between p-4 border-2 border-primary rounded-lg bg-background hover:bg-primary/5 transition-colors cursor-pointer">
              <div>
                <div className="font-medium">Practice Problems</div>
                <div className="text-sm text-muted-foreground">Build real-world features with useState</div>
              </div>
              <Badge>3 Challenges</Badge>
            </div>
          </Link>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Practical Examples</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((example) => (
            <Link key={example.path} to={example.path}>
              <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{example.difficulty}</Badge>
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{example.title}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                    View Example
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong>Use descriptive names</strong>
                <p className="text-sm text-muted-foreground">Name your state variables clearly: <code>const [isLoading, setIsLoading]</code></p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong>Keep state minimal</strong>
                <p className="text-sm text-muted-foreground">Derive values when possible instead of storing them</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong>Use functional updates</strong>
                <p className="text-sm text-muted-foreground">When new state depends on previous: <code>{`setState(prev => prev + 1)`}</code></p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong>Split related state</strong>
                <p className="text-sm text-muted-foreground">Use multiple useState calls instead of one complex object</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseStateIndex;
