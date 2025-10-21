import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export const LocalStorageExample = () => {
  const [name, setName] = useLocalStorage('user-name', '');
  const [theme, setTheme] = useLocalStorage('user-theme', 'light');
  const [count, setCount] = useLocalStorage('user-count', 0);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">useLocalStorage Demo</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name (persisted)</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
            />
          </div>

          <div className="space-y-2">
            <Label>Theme Preference</Label>
            <div className="flex gap-2">
              <Button
                variant={theme === 'light' ? 'default' : 'outline'}
                onClick={() => setTheme('light')}
              >
                Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'default' : 'outline'}
                onClick={() => setTheme('dark')}
              >
                Dark
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Counter (persisted)</Label>
            <div className="flex gap-2 items-center">
              <Button onClick={() => setCount(c => c - 1)} variant="outline">
                -
              </Button>
              <span className="text-2xl font-bold min-w-[3rem] text-center">{count}</span>
              <Button onClick={() => setCount(c => c + 1)}>
                +
              </Button>
              <Button onClick={() => setCount(0)} variant="destructive">
                Reset
              </Button>
            </div>
          </div>

          <Card className="p-4 bg-muted/50">
            <p className="text-sm text-muted-foreground">
              💡 Tip: Refresh the page to see your data persist!
            </p>
          </Card>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = 
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

// Usage
const [name, setName] = useLocalStorage('name', '');`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Automatically syncs state with localStorage</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Data persists across page refreshes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Works like regular useState but with persistence</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Handles JSON serialization automatically</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
