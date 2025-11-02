import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, CheckCircle2 } from 'lucide-react';

const WindowTracker = () => {
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
          <Link to="/hooks/use-effect" className="text-muted-foreground hover:text-foreground transition-colors">
            useEffect
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-effect/practice" className="text-muted-foreground hover:text-foreground transition-colors">
            Practice
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Window Tracker</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Monitor className="w-8 h-8 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-4xl font-bold">Window Resize Tracker</h1>
              <Badge>Beginner</Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Track window dimensions with proper event listener cleanup
            </p>
          </div>
        </div>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Challenge Description</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            Create a component that displays the current window width and height, updating in real-time as the user resizes their browser window. This exercise teaches you about event listeners and cleanup functions in useEffect.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              'Display current window width in pixels',
              'Display current window height in pixels',
              'Update dimensions in real-time when window is resized',
              'Show a responsive breakpoint label (Mobile/Tablet/Desktop)',
              'Properly cleanup event listener when component unmounts',
              'Initialize with current window dimensions on mount'
            ].map((req, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{req}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Wireframe</CardTitle>
          <CardDescription>Use this as a reference for your implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
            <div className="max-w-md mx-auto space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-1">Window Size Tracker</h3>
                <p className="text-xs text-muted-foreground">Resize your browser to see changes</p>
              </div>
              
              <div className="space-y-4 p-6 border-2 border-border rounded-lg bg-background">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 p-4 border-2 border-border rounded-lg bg-muted/50">
                    <div className="text-xs text-muted-foreground">Width</div>
                    <div className="text-3xl font-bold">1920</div>
                    <div className="text-xs text-muted-foreground">pixels</div>
                  </div>
                  
                  <div className="space-y-2 p-4 border-2 border-border rounded-lg bg-muted/50">
                    <div className="text-xs text-muted-foreground">Height</div>
                    <div className="text-3xl font-bold">1080</div>
                    <div className="text-xs text-muted-foreground">pixels</div>
                  </div>
                </div>

                <div className="p-4 border-2 border-primary rounded-lg bg-primary/10">
                  <div className="text-xs text-muted-foreground mb-1">Breakpoint</div>
                  <div className="text-xl font-bold text-primary">Desktop</div>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  Try resizing your browser window
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Breakpoint Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-2 border-b">
              <span className="font-medium">Mobile</span>
              <span className="text-muted-foreground">Width {'<'} 768px</span>
            </div>
            <div className="flex justify-between p-2 border-b">
              <span className="font-medium">Tablet</span>
              <span className="text-muted-foreground">768px ≤ Width {'<'} 1024px</span>
            </div>
            <div className="flex justify-between p-2">
              <span className="font-medium">Desktop</span>
              <span className="text-muted-foreground">Width ≥ 1024px</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium mb-1">Event Listener Setup:</p>
              <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
{`useEffect(() => {
  const handleResize = () => {
    // Update state with new dimensions
  };
  
  window.addEventListener('resize', handleResize);
  
  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); // Empty dependency array = runs once on mount`}
              </pre>
            </div>
            
            <div className="pt-2">
              <p className="font-medium mb-1">Get Window Dimensions:</p>
              <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
{`window.innerWidth  // Current window width
window.innerHeight // Current window height`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>State to Manage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="font-medium">Track:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">width</code> - current window width</li>
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">height</code> - current window height</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              The breakpoint label can be derived from the width value during render!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/20 bg-amber-500/5">
        <CardHeader>
          <CardTitle className="text-amber-600 dark:text-amber-400">Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>✓ Initial dimensions display correctly</p>
            <p>✓ Dimensions update smoothly when resizing</p>
            <p>✓ Breakpoint changes from Desktop → Tablet → Mobile</p>
            <p>✓ No console errors or warnings</p>
            <p>✓ Check console: event listener is cleaned up (no memory leaks)</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-500/20 bg-blue-500/5">
        <CardHeader>
          <CardTitle className="text-blue-600 dark:text-blue-400">💡 Pro Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• The cleanup function is crucial to prevent memory leaks</p>
            <p>• Initialize state with current window dimensions</p>
            <p>• Empty dependency array [] means effect runs only once (on mount)</p>
            <p>• Consider adding a debounce for performance (optional challenge!)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WindowTracker;
