import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, CheckCircle2 } from 'lucide-react';

const ComplexCalculationPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-memo" className="hover:text-foreground">useMemo</Link>
        <span>/</span>
        <Link to="/hooks/use-memo/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Complex Calculation</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">Complex Calculation</h1>
          <Badge variant="secondary">Intermediate</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Optimize expensive calculations using useMemo for better performance.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Build a Fibonacci number calculator and prime number checker. 
            Use <code className="px-2 py-1 bg-muted rounded">useMemo</code> to cache expensive calculations 
            and prevent unnecessary recalculations when unrelated state changes.
          </p>
          <p>
            Include a theme toggle to demonstrate that memoization prevents recalculation on unrelated updates.
          </p>
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
              <span>Input for Fibonacci number (n) - calculate nth Fibonacci number</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Input for prime check - check if number is prime</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Use <code className="px-2 py-1 bg-muted rounded">useMemo</code> for both calculations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Add a theme toggle (unrelated state)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Log to console when calculations run</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Display calculation time</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Show calculation count for each function</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎨 Wireframe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 space-y-4">
            <div className="flex justify-end">
              <div className="px-3 py-1 border rounded text-sm">[Toggle Theme]</div>
            </div>
            
            <div className="border rounded p-4 space-y-3">
              <div className="font-bold">Fibonacci Calculator</div>
              <div className="flex gap-2">
                <input className="flex-1 border rounded px-3 py-2 text-sm" placeholder="Enter n" />
                <div className="px-4 py-2 border rounded text-sm">[Calculate]</div>
              </div>
              <div className="text-sm">
                <div>Result: 89</div>
                <div className="text-muted-foreground">Calculated 1 times</div>
                <div className="text-muted-foreground">Time: 0.5ms</div>
              </div>
            </div>

            <div className="border rounded p-4 space-y-3">
              <div className="font-bold">Prime Number Checker</div>
              <div className="flex gap-2">
                <input className="flex-1 border rounded px-3 py-2 text-sm" placeholder="Enter number" />
                <div className="px-4 py-2 border rounded text-sm">[Check]</div>
              </div>
              <div className="text-sm">
                <div>Result: Yes, 97 is prime</div>
                <div className="text-muted-foreground">Calculated 1 times</div>
                <div className="text-muted-foreground">Time: 1.2ms</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Hints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">• Fibonacci: <code className="px-2 py-1 bg-muted rounded">{'useMemo(() => calculateFib(n), [n])'}</code></p>
          <p className="text-sm">• Use recursive or iterative approach for Fibonacci</p>
          <p className="text-sm">• Prime check: test divisibility up to sqrt(n)</p>
          <p className="text-sm">• Use <code className="px-2 py-1 bg-muted rounded">performance.now()</code> to measure time</p>
          <p className="text-sm">• Use <code className="px-2 py-1 bg-muted rounded">useRef</code> to track calculation count</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>✅ Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Fibonacci calculation is correct</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Prime check works correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Toggling theme doesn't recalculate</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Same input doesn't trigger recalculation</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Calculation count increments only when needed</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Console logs show when calculations run</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplexCalculationPractice;
