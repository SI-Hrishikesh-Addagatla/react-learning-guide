import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MousePointer, Maximize, Eye } from 'lucide-react';

export const EventListenerExample = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(true);

  // Effect 1: Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty array: set up once on mount

  // Effect 2: Track window size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Effect 3: Track page visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Example 3: Event Listeners</CardTitle>
          <Badge variant="outline">Multiple Effects</Badge>
        </div>
        <CardDescription>
          Setting up and cleaning up multiple event listeners in separate effects
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-6 rounded-lg">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-background border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer className="h-5 w-5 text-primary" />
                <span className="font-semibold">Mouse Position</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">X:</span>
                  <span className="font-mono">{mousePosition.x}px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Y:</span>
                  <span className="font-mono">{mousePosition.y}px</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-background border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Maximize className="h-5 w-5 text-primary" />
                <span className="font-semibold">Window Size</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Width:</span>
                  <span className="font-mono">{windowSize.width}px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Height:</span>
                  <span className="font-mono">{windowSize.height}px</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-background border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-5 w-5 text-primary" />
                <span className="font-semibold">Page Visibility</span>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${isVisible ? 'bg-primary' : 'bg-muted-foreground'}`} />
                  <span>{isVisible ? 'Visible' : 'Hidden'}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Switch tabs to test
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background p-4 rounded-lg border">
          <h4 className="font-semibold mb-3">Code Implementation:</h4>
          <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
            <code>{`// Separate effect for each concern

// Effect 1: Mouse tracking
useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

// Effect 2: Window resize
useEffect(() => {
  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };
  handleResize(); // Initial call
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

// Effect 3: Visibility tracking
useEffect(() => {
  const handleVisibilityChange = () => {
    setIsVisible(!document.hidden);
  };
  document.addEventListener('visibilitychange', handleVisibilityChange);
  return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
}, []);`}</code>
          </pre>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Key Patterns:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li><strong>Separate effects:</strong> Each listener gets its own useEffect for clarity</li>
            <li><strong>Empty dependencies:</strong> [] means set up once on mount, clean up on unmount</li>
            <li><strong>Always cleanup:</strong> Remove listeners to prevent memory leaks</li>
            <li><strong>Initial values:</strong> Call handlers immediately when needed (like window size)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
