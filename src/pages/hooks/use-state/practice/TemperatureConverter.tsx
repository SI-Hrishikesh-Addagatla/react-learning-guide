import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Thermometer, CheckCircle2 } from 'lucide-react';

const TemperatureConverter = () => {
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
          <Link to="/hooks/use-state" className="text-muted-foreground hover:text-foreground transition-colors">
            useState
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-state/practice" className="text-muted-foreground hover:text-foreground transition-colors">
            Practice
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Temperature Converter</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Thermometer className="w-8 h-8 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-4xl font-bold">Temperature Converter</h1>
              <Badge>Beginner</Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Build a converter that switches between Celsius and Fahrenheit
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
            Create a temperature converter that allows users to input a temperature value and switch between Celsius and Fahrenheit units. The conversion should happen in real-time as the user types.
          </p>
          <div className="space-y-2">
            <p className="text-sm font-medium">Conversion formulas:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
              <li>Celsius to Fahrenheit: (C × 9/5) + 32</li>
              <li>Fahrenheit to Celsius: (F - 32) × 5/9</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              'Input field for temperature value (number)',
              'Toggle or select to switch between Celsius and Fahrenheit',
              'Display converted temperature in real-time',
              'Show the unit symbol (°C or °F) next to values',
              'Handle empty input gracefully',
              'Round results to 2 decimal places'
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
                <h3 className="text-lg font-semibold mb-1">Temperature Converter</h3>
                <p className="text-xs text-muted-foreground">Convert between Celsius and Fahrenheit</p>
              </div>
              
              <div className="space-y-4 p-6 border-2 border-border rounded-lg bg-background">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Temperature</label>
                  <div className="flex gap-2">
                    <div className="flex-1 h-10 border-2 border-border rounded-md bg-background px-3 flex items-center">
                      <span className="text-sm text-muted-foreground">Enter value...</span>
                    </div>
                    <div className="h-10 w-20 border-2 border-border rounded-md bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">°C</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-10 w-40 border-2 border-primary rounded-md bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">Switch Unit</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Converted</label>
                  <div className="h-16 border-2 border-dashed border-border rounded-md bg-muted/50 flex items-center justify-center">
                    <span className="text-2xl font-bold">32.00 °F</span>
                  </div>
                </div>
              </div>
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
            <p className="font-medium">Consider tracking:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">temperature</code> - the input value (string or number)</li>
              <li><code className="text-xs bg-muted px-1 py-0.5 rounded">unit</code> - current unit ('celsius' or 'fahrenheit')</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Hint: You can calculate the converted value during render instead of storing it in state!
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
            <p>✓ Enter 0°C, should show 32°F</p>
            <p>✓ Enter 100°C, should show 212°F</p>
            <p>✓ Switch to Fahrenheit input mode</p>
            <p>✓ Enter 32°F, should show 0°C</p>
            <p>✓ Clear input, should handle gracefully</p>
            <p>✓ Results rounded to 2 decimal places</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TemperatureConverter;
