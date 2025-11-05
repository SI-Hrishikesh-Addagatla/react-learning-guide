import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Filter, Zap } from 'lucide-react';

const examples = [
  {
    path: '/hooks/use-memo/expensive-calculation',
    title: 'Expensive Calculation',
    description: 'Memoizing computationally expensive operations',
    icon: Calculator,
  },
  {
    path: '/hooks/use-memo/filtered-list',
    title: 'Filtered List',
    description: 'Optimizing list filtering and sorting',
    icon: Filter,
  },
  {
    path: '/hooks/use-memo/complex-object',
    title: 'Complex Object',
    description: 'Preventing unnecessary re-renders with memoized objects',
    icon: Zap,
  },
];

const UseMemoIndex = () => {
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
          <span className="text-foreground font-medium">useMemo</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">useMemo Hook</h1>
          <p className="text-xl text-muted-foreground">
            Optimize performance by memoizing expensive computations
          </p>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">What is useMemo?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <code className="px-2 py-1 bg-muted rounded">useMemo</code> is a React Hook that lets you cache 
            the result of a calculation between re-renders. It only recalculates when dependencies change.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Key characteristics:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Memoizes computed values (not functions)</li>
              <li>Prevents expensive recalculations</li>
              <li>Only recomputes when dependencies change</li>
              <li>Returns the memoized value</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">When to use useMemo:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Expensive calculations (sorting, filtering large lists)</li>
              <li>Preventing child component re-renders</li>
              <li>Computing derived data from props or state</li>
              <li>Creating objects/arrays passed as props</li>
            </ul>
          </div>
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="font-semibold text-foreground mb-2">⚠️ Don't overuse!</p>
            <p>Only use useMemo when you have measurable performance issues. Premature optimization can make code harder to read.</p>
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
          <CardTitle className="flex items-center gap-2">🎯 Ready to Practice?</CardTitle>
          <CardDescription>Optimize performance with hands-on challenges</CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/hooks/use-memo/practice">
            <div className="flex items-center justify-between p-4 border-2 border-primary rounded-lg bg-background hover:bg-primary/5 transition-colors cursor-pointer">
              <div>
                <div className="font-medium">Practice Problems</div>
                <div className="text-sm text-muted-foreground">Build optimized features with useMemo</div>
              </div>
              <Badge>3 Challenges</Badge>
            </div>
          </Link>
        </CardContent>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-xl font-semibold mb-4">Learning Path</h3>
        <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
          <li>Start with <strong className="text-foreground">Expensive Calculation</strong> - See the performance benefit</li>
          <li>Move to <strong className="text-foreground">Filtered List</strong> - Optimize real-world scenarios</li>
          <li>Finish with <strong className="text-foreground">Complex Object</strong> - Prevent unwanted re-renders</li>
        </ol>
      </Card>
    </div>
  );
};

export default UseMemoIndex;
