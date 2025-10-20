import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const examples = [
  {
    path: '/hooks/use-effect/data-fetching',
    title: 'Data Fetching',
    description: 'Fetch data from an API when component mounts or dependencies change',
    difficulty: 'Common Pattern',
  },
  {
    path: '/hooks/use-effect/timer',
    title: 'Timer with Cleanup',
    description: 'Using useEffect with cleanup to manage intervals and prevent memory leaks',
    difficulty: 'Cleanup Pattern',
  },
  {
    path: '/hooks/use-effect/event-listeners',
    title: 'Event Listeners',
    description: 'Setting up and cleaning up multiple event listeners in separate effects',
    difficulty: 'Multiple Effects',
  },
];

const UseEffectIndex = () => {
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
          <span className="text-foreground font-medium">useEffect</span>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold">
              <code className="text-primary">useEffect</code>
            </h1>
            <Badge>Beginner</Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            Handle side effects like data fetching, subscriptions, and DOM manipulation
          </p>
        </div>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>What is useEffect?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <code className="text-primary bg-primary/10 px-2 py-1 rounded">useEffect</code> is a React hook that lets you perform side effects in functional components. 
            It runs after every render by default, but you can control when it runs using dependencies.
          </p>
          
          <div className="bg-background p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">Basic Syntax:</h4>
            <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">
              <code>{`useEffect(() => {
  // Side effect code here
  
  return () => {
    // Cleanup code here (optional)
  };
}, [dependencies]);`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-background border">
              <h4 className="font-semibold mb-1 text-sm">Effect Function</h4>
              <p className="text-xs text-muted-foreground">Runs after render with side effect logic</p>
            </div>
            <div className="p-3 rounded-lg bg-background border">
              <h4 className="font-semibold mb-1 text-sm">Cleanup Function</h4>
              <p className="text-xs text-muted-foreground">Optional return to clean up subscriptions/listeners</p>
            </div>
            <div className="p-3 rounded-lg bg-background border">
              <h4 className="font-semibold mb-1 text-sm">Dependencies</h4>
              <p className="text-xs text-muted-foreground">Array controlling when effect re-runs</p>
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
            <h4 className="font-semibold mb-2">Dependency Array Behavior:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>No array:</strong> <code className="text-primary bg-primary/10 px-1 rounded">useEffect(() {'{}'} ...)</code> - Runs after every render</li>
              <li><strong>Empty array:</strong> <code className="text-primary bg-primary/10 px-1 rounded">useEffect(() {'{}'} ..., [])</code> - Runs only once (mount)</li>
              <li><strong>With dependencies:</strong> <code className="text-primary bg-primary/10 px-1 rounded">useEffect(() {'{}'} ..., [dep1, dep2])</code> - Runs when dependencies change</li>
            </ul>
          </div>
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
                <strong>Always clean up side effects</strong>
                <p className="text-sm text-muted-foreground">Return cleanup function for timers, subscriptions, and listeners</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong>Include all dependencies</strong>
                <p className="text-sm text-muted-foreground">Add all values from component scope used inside the effect</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong>Separate concerns</strong>
                <p className="text-sm text-muted-foreground">Use multiple useEffect calls for different side effects</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong>Avoid infinite loops</strong>
                <p className="text-sm text-muted-foreground">Be careful with dependency arrays that change every render</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseEffectIndex;
