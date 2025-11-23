import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Globe, Timer } from 'lucide-react';

const examples = [
  {
    path: '/hooks/custom-hooks/local-storage',
    title: 'useLocalStorage',
    description: 'Sync state with browser localStorage',
    icon: Database,
  },
  {
    path: '/hooks/custom-hooks/fetch',
    title: 'useFetch',
    description: 'Reusable data fetching hook',
    icon: Globe,
  },
  {
    path: '/hooks/custom-hooks/debounce',
    title: 'useDebounce',
    description: 'Delay state updates with debouncing',
    icon: Timer,
  },
];

const CustomHooksIndex = () => {
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
          <span className="text-foreground font-medium">Custom Hooks</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Custom Hooks</h1>
          <p className="text-xl text-muted-foreground">
            Build reusable logic by creating your own hooks
          </p>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">What are Custom Hooks?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Custom Hooks let you extract component logic into reusable functions. They're JavaScript functions 
            whose names start with "use" and that may call other Hooks.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Key characteristics:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Name must start with "use"</li>
              <li>Can call other React Hooks</li>
              <li>Share stateful logic, not state itself</li>
              <li>Each call is completely independent</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Benefits of Custom Hooks:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Reuse stateful logic across components</li>
              <li>Keep components clean and focused</li>
              <li>Test logic independently</li>
              <li>Share logic across your team</li>
            </ul>
          </div>
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="font-semibold text-foreground mb-2">💡 Custom Hook Rules</p>
            <p>Follow the same rules as built-in Hooks: only call them at the top level and from React functions.</p>
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
          <CardTitle className="flex items-center gap-2">
            🎯 Ready to Practice?
          </CardTitle>
          <CardDescription>
            Build your own custom hooks from scratch
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/hooks/custom-hooks/practice">
            <div className="flex items-center justify-between p-4 border-2 border-primary rounded-lg bg-background hover:bg-primary/5 transition-colors cursor-pointer">
              <div>
                <div className="font-medium">Practice Problems</div>
                <div className="text-sm text-muted-foreground">Create reusable custom hooks</div>
              </div>
              <Badge>3 Challenges</Badge>
            </div>
          </Link>
        </CardContent>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-xl font-semibold mb-4">Learning Path</h3>
        <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
          <li>Start with <strong className="text-foreground">useLocalStorage</strong> - Simple custom hook</li>
          <li>Move to <strong className="text-foreground">useFetch</strong> - Async operations</li>
          <li>Finish with <strong className="text-foreground">useDebounce</strong> - Advanced techniques</li>
        </ol>
      </Card>
    </div>
  );
};

export default CustomHooksIndex;
