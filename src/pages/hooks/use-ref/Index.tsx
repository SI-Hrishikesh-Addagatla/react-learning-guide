import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Focus, Video, History } from 'lucide-react';

const examples = [
  {
    path: '/hooks/use-ref/input-focus',
    title: 'Input Focus',
    description: 'Managing focus on input elements without re-rendering',
    icon: Focus,
  },
  {
    path: '/hooks/use-ref/video-player',
    title: 'Video Player',
    description: 'Controlling video playback with DOM references',
    icon: Video,
  },
  {
    path: '/hooks/use-ref/previous-value',
    title: 'Previous Value',
    description: 'Tracking previous state values across renders',
    icon: History,
  },
];

const UseRefIndex = () => {
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
          <span className="text-foreground font-medium">useRef</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">useRef Hook</h1>
          <p className="text-xl text-muted-foreground">
            Reference values that persist across renders without causing re-renders
          </p>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">What is useRef?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <code className="px-2 py-1 bg-muted rounded">useRef</code> is a React Hook that lets you reference 
            a value that's not needed for rendering. It returns a mutable ref object whose <code className="px-2 py-1 bg-muted rounded">.current</code> property 
            is initialized to the passed argument.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Key characteristics:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Persists values across renders without causing re-renders</li>
              <li>Commonly used to access DOM elements directly</li>
              <li>Can store any mutable value (similar to instance variables)</li>
              <li>Updating a ref doesn't trigger a re-render</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Common use cases:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Managing focus, text selection, or media playback</li>
              <li>Storing previous state values</li>
              <li>Holding timers or interval IDs</li>
              <li>Storing values that don't affect rendering</li>
            </ul>
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
          <li>Start with <strong className="text-foreground">Input Focus</strong> - Learn basic ref usage</li>
          <li>Move to <strong className="text-foreground">Video Player</strong> - Control DOM elements</li>
          <li>Finish with <strong className="text-foreground">Previous Value</strong> - Advanced ref patterns</li>
        </ol>
      </Card>
    </div>
  );
};

export default UseRefIndex;
