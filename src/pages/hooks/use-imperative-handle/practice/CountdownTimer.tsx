import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timer, CheckCircle2 } from 'lucide-react';

const CountdownTimerPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-imperative-handle" className="hover:text-foreground">useImperativeHandle</Link>
        <span>/</span>
        <Link to="/hooks/use-imperative-handle/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Countdown Timer</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Timer className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Countdown Timer Control</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge>Beginner</Badge>
              <Badge variant="outline">useImperativeHandle</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Control a countdown timer imperatively from parent component
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Create a countdown timer with imperative controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Build a countdown timer component that exposes start, pause, reset, and addTime methods to the parent component using useImperativeHandle.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create CountdownTimer component using forwardRef</li>
                <li>Expose methods: start(), pause(), reset(), addTime(seconds)</li>
                <li>Display time in MM:SS format</li>
                <li>Parent component with control buttons</li>
                <li>Start/Pause button (toggles based on state)</li>
                <li>Reset button to return to initial time</li>
                <li>Add 30s and Add 60s buttons</li>
                <li>Show "Time's Up!" message when countdown reaches 0</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📋 Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Timer accepts initialSeconds prop (default: 60)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Display time in MM:SS format (e.g., "01:30")</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>start() method begins countdown</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>pause() method stops countdown</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>reset() method returns to initial time</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>addTime(seconds) method adds time to current countdown</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Toast notification when timer reaches 0</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Timer automatically pauses at 0</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎨 Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-6 space-y-6">
              <h3 className="font-semibold text-lg text-center">Countdown Timer</h3>
              
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">05:00</div>
                <div className="text-sm text-muted-foreground">Time Remaining</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex gap-2 justify-center">
                  <div className="border rounded bg-primary text-primary-foreground px-6 py-2">
                    [Start]
                  </div>
                  <div className="border rounded px-6 py-2">
                    [Reset]
                  </div>
                </div>
                
                <div className="flex gap-2 justify-center">
                  <div className="border rounded px-4 py-2 text-sm">
                    [+30s]
                  </div>
                  <div className="border rounded px-4 py-2 text-sm">
                    [+60s]
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>💡 Hints</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I structure the timer component?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use forwardRef and useImperativeHandle. Track time with useState, use useRef for interval. Create methods that control the interval and update state. useEffect to handle countdown logic.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I format time as MM:SS?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Convert seconds to minutes: Math.floor(seconds / 60). Get remaining seconds: seconds % 60. Use padStart(2, '0') to ensure two digits: `$&#123;minutes.toString().padStart(2, '0')&#125;:$&#123;secs.toString().padStart(2, '0')&#125;`
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I handle the interval?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Store interval ID in a ref. In start(), create setInterval that decrements time every 1000ms. In pause(), clear the interval. Always clear interval in useEffect cleanup and when reaching 0.
              </p>
            </details>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>✅ Testing Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Timer starts counting down</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Pause button stops the countdown</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Reset returns to initial time</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Add time buttons work correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Timer stops at 0</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Toast shows when time's up</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CountdownTimerPractice;
