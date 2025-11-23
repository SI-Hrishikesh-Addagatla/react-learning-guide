import { Link } from 'react-router-dom';
import { Code, FileText, MousePointer } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const examples = [
  {
    path: '/hooks/use-imperative-handle/input-focus',
    title: 'Input Focus Control',
    description: 'Expose focus method to parent component',
    icon: MousePointer,
  },
  {
    path: '/hooks/use-imperative-handle/form-control',
    title: 'Form Control',
    description: 'Expose form methods like reset and validate',
    icon: FileText,
  },
  {
    path: '/hooks/use-imperative-handle/modal-control',
    title: 'Modal Control',
    description: 'Control modal state from parent component',
    icon: Code,
  },
];

const UseImperativeHandleIndex = () => {
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
          <span className="text-foreground font-medium">useImperativeHandle</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">useImperativeHandle</h1>
          <p className="text-xl text-muted-foreground">
            Customize the instance value exposed to parent components
          </p>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">What is useImperativeHandle?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <code className="px-2 py-1 bg-muted rounded">useImperativeHandle</code> is a React Hook that lets you customize the handle exposed as a ref. It's used with <code className="px-2 py-1 bg-muted rounded">forwardRef</code> to expose specific methods or values to parent components.
          </p>
          
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Key Characteristics:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Exposes custom imperative methods to parent components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Works with forwardRef to pass refs through components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Encapsulates component internals while exposing controlled API</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Useful for component libraries and reusable components</span>
              </li>
            </ul>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">When to Use:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Building reusable component libraries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Exposing imperative methods (focus, scroll, reset)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Controlling child components from parent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Integrating with third-party DOM libraries</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {examples.map((example) => (
            <Link key={example.path} to={example.path}>
              <Card className="p-6 hover:shadow-lg transition-all hover:scale-105">
                <example.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-muted-foreground">{example.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎯 Ready to Practice?
          </CardTitle>
          <CardDescription>
            Master imperative APIs with practical challenges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/hooks/use-imperative-handle/practice">
            <div className="flex items-center justify-between p-4 border-2 border-primary rounded-lg bg-background hover:bg-primary/5 transition-colors cursor-pointer">
              <div>
                <div className="font-medium">Practice Problems</div>
                <div className="text-sm text-muted-foreground">Build components with imperative controls</div>
              </div>
              <Badge>3 Challenges</Badge>
            </div>
          </Link>
        </CardContent>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">💡 Learning Path</h3>
        <p className="text-muted-foreground">
          Start with <strong>Input Focus Control</strong> to understand the basics, then explore <strong>Form Control</strong> for more complex scenarios, and finish with <strong>Modal Control</strong> to see real-world applications.
        </p>
      </Card>
    </div>
  );
};

export default UseImperativeHandleIndex;
