import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RotateCcw } from 'lucide-react';

export const TimerExample = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      // Set up interval when timer is running
      interval = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function: clear interval when component unmounts
    // or when isRunning changes
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // Effect re-runs when isRunning changes

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Example 2: Timer with Cleanup</CardTitle>
          <Badge variant="outline">Cleanup Pattern</Badge>
        </div>
        <CardDescription>
          Using useEffect with cleanup to manage intervals and prevent memory leaks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-6 rounded-lg">
          <div className="text-center space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Elapsed Time</p>
              <div className="text-6xl font-bold text-primary font-mono">
                {formatTime(seconds)}
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button
                onClick={() => setIsRunning(!isRunning)}
                size="lg"
                variant={isRunning ? 'secondary' : 'default'}
              >
                {isRunning ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Start
                  </>
                )}
              </Button>
              <Button onClick={handleReset} size="lg" variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Status: <span className={isRunning ? 'text-primary font-semibold' : ''}>{isRunning ? 'Running' : 'Paused'}</span>
            </div>
          </div>
        </div>

        <div className="bg-background p-4 rounded-lg border">
          <h4 className="font-semibold mb-3">Code Implementation:</h4>
          <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
            <code>{`const [seconds, setSeconds] = useState(0);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  let interval;

  if (isRunning) {
    interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  }

  // Cleanup: runs before next effect or unmount
  return () => {
    if (interval) {
      clearInterval(interval);
    }
  };
}, [isRunning]);`}</code>
          </pre>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Why Cleanup Is Important:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>Prevents memory leaks from running intervals</li>
            <li>Cleanup runs before the next effect execution</li>
            <li>Cleanup also runs when component unmounts</li>
            <li>Without cleanup, old intervals continue running</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
