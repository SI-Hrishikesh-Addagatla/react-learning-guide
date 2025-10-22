import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  ToggleLeft, 
  RefreshCw, 
  Target, 
  Zap, 
  Repeat, 
  Wrench 
} from 'lucide-react';

const hooks = [
  {
    path: '/hooks/use-state',
    title: 'useState',
    description: 'Manage component state with the most fundamental React hook',
    icon: ToggleLeft,
    examples: 3,
    difficulty: 'Beginner',
    useCases: ['Form inputs', 'Toggle states', 'Counter logic'],
  },
  {
    path: '/hooks/use-effect',
    title: 'useEffect',
    description: 'Handle side effects like data fetching, subscriptions, and DOM manipulation',
    icon: RefreshCw,
    examples: 3,
    difficulty: 'Beginner',
    useCases: ['API calls', 'Event listeners', 'Timers'],
  },
  {
    path: '/hooks/use-ref',
    title: 'useRef',
    description: 'Reference DOM elements and persist values without re-rendering',
    icon: Target,
    examples: 3,
    difficulty: 'Intermediate',
    useCases: ['DOM access', 'Previous values', 'Uncontrolled components'],
  },
  {
    path: '/hooks/use-reducer',
    title: 'useReducer',
    description: 'Manage complex state logic with reducer pattern',
    icon: RefreshCw,
    examples: 3,
    difficulty: 'Intermediate',
    useCases: ['Complex state', 'Multiple actions', 'Predictable updates'],
  },
  {
    path: '/hooks/use-memo',
    title: 'useMemo',
    description: 'Optimize performance by memoizing expensive computations',
    icon: Zap,
    examples: 3,
    difficulty: 'Intermediate',
    useCases: ['Expensive calculations', 'Filtering large lists', 'Complex derivations'],
  },
  {
    path: '/hooks/use-callback',
    title: 'useCallback',
    description: 'Prevent unnecessary re-renders by memoizing callback functions',
    icon: Repeat,
    examples: 3,
    difficulty: 'Intermediate',
    useCases: ['Event handlers', 'Child component props', 'Dependency optimization'],
  },
  {
    path: '/hooks/use-imperative-handle',
    title: 'useImperativeHandle',
    description: 'Customize the instance value exposed to parent components with refs',
    icon: Wrench,
    examples: 3,
    difficulty: 'Advanced',
    useCases: ['Custom components', 'Controlled APIs', 'Imperative actions'],
  },
  {
    path: '/hooks/custom-hooks',
    title: 'Custom Hooks',
    description: 'Create reusable hooks to share logic across components',
    icon: Wrench,
    examples: 3,
    difficulty: 'Intermediate',
    useCases: ['Shared logic', 'API abstraction', 'State patterns'],
  },
];

const difficultyColors = {
  Beginner: 'default',
  Intermediate: 'secondary',
  Advanced: 'destructive',
} as const;

const HooksIndex = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">React Hooks</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Master React Hooks</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive guide to React hooks with practical examples and step-by-step explanations
          </p>
        </div>
      </div>

      <Card className="bg-muted/50 border-primary/20">
        <CardHeader>
          <CardTitle>What are React Hooks?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground">
            React Hooks are functions that let you use state and other React features in functional components.
            They were introduced in React 16.8 to enable stateful logic without writing class components.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-background border">
              <h4 className="font-semibold mb-1 text-sm">No Classes Needed</h4>
              <p className="text-xs text-muted-foreground">Write components as functions</p>
            </div>
            <div className="p-3 rounded-lg bg-background border">
              <h4 className="font-semibold mb-1 text-sm">Reusable Logic</h4>
              <p className="text-xs text-muted-foreground">Share stateful logic with custom hooks</p>
            </div>
            <div className="p-3 rounded-lg bg-background border">
              <h4 className="font-semibold mb-1 text-sm">Better Organization</h4>
              <p className="text-xs text-muted-foreground">Group related code together</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {hooks.map((hook) => (
          <Link key={hook.path} to={hook.path}>
            <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <hook.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant={difficultyColors[hook.difficulty]}>
                    {hook.difficulty}
                  </Badge>
                </div>
                <CardTitle className="flex items-center justify-between text-xl">
                  <code className="text-primary">{hook.title}</code>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
                <CardDescription className="text-sm">{hook.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Common Use Cases:</p>
                  <div className="flex flex-wrap gap-2">
                    {hook.useCases.map((useCase) => (
                      <Badge key={useCase} variant="outline" className="text-xs">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-sm text-muted-foreground">
                    {hook.examples} practical examples
                  </span>
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                    Learn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Learning Path</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              <div>
                <strong>Start with useState and useEffect</strong>
                <p className="text-sm text-muted-foreground">These are the foundation of React hooks</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              <div>
                <strong>Learn useRef for DOM access</strong>
                <p className="text-sm text-muted-foreground">Understand references and side effects</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              <div>
                <strong>Understand useReducer for complex state</strong>
                <p className="text-sm text-muted-foreground">Manage state with reducer pattern</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">4.</span>
              <div>
                <strong>Master useMemo and useCallback</strong>
                <p className="text-sm text-muted-foreground">Optimize performance when needed</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">5.</span>
              <div>
                <strong>Explore useImperativeHandle</strong>
                <p className="text-sm text-muted-foreground">Advanced patterns for component APIs</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">6.</span>
              <div>
                <strong>Create Custom Hooks</strong>
                <p className="text-sm text-muted-foreground">Build reusable logic for your applications</p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default HooksIndex;
