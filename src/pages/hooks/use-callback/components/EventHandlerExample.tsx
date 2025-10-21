import { useCallback, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const EventHandlerExample = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTracking, setIsTracking] = useState(false);
  const [eventCount, setEventCount] = useState(0);

  // Memoized event handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setEventCount(c => c + 1);
  }, []);

  useEffect(() => {
    console.log('Effect running - setting up event listener');
    
    if (isTracking) {
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        console.log('Cleanup - removing event listener');
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isTracking, handleMouseMove]);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Event Handler Demo</h2>
        <div className="space-y-4">
          <Button 
            onClick={() => setIsTracking(!isTracking)}
            variant={isTracking ? 'destructive' : 'default'}
          >
            {isTracking ? 'Stop Tracking' : 'Start Tracking'}
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Mouse X</p>
              <p className="text-2xl font-bold">{position.x}</p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Mouse Y</p>
              <p className="text-2xl font-bold">{position.y}</p>
            </div>
          </div>

          <div className="p-4 bg-secondary/10 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Events Captured</p>
            <p className="text-2xl font-bold">{eventCount}</p>
          </div>

          {isTracking && (
            <p className="text-sm text-muted-foreground">
              Move your mouse to see position tracking
            </p>
          )}
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function Component() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTracking, setIsTracking] = useState(false);

  // Memoized callback for stable reference
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (isTracking) {
      // Listener added/removed only when necessary
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isTracking, handleMouseMove]);

  return (
    <div>
      <button onClick={() => setIsTracking(!isTracking)}>
        {isTracking ? 'Stop' : 'Start'} Tracking
      </button>
      <p>X: {position.x}, Y: {position.y}</p>
    </div>
  );
}`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Stable callback reference prevents unnecessary effect re-runs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Avoids removing and re-adding event listeners</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Essential for <code className="px-2 py-1 bg-muted rounded">useEffect</code> dependencies</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Check console to see effect cleanup behavior</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
