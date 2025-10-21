import { useCallback, useState, memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Memoized child component
const ChildComponent = memo(({ onAction, label }: { onAction: () => void; label: string }) => {
  console.log(`${label} rendered`);
  return (
    <Card className="p-4 bg-primary/10">
      <p className="mb-2">{label}</p>
      <Button onClick={onAction} size="sm">Click Me</Button>
    </Card>
  );
});

ChildComponent.displayName = 'ChildComponent';

export const ParentChildExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [parentCount, setParentCount] = useState(0);

  // Memoized callback - only recreated when count1 changes
  const handleAction1 = useCallback(() => {
    console.log('Action 1 called');
    setCount1(c => c + 1);
  }, []);

  // Memoized callback - only recreated when count2 changes
  const handleAction2 = useCallback(() => {
    console.log('Action 2 called');
    setCount2(c => c + 1);
  }, []);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Parent-Child Optimization</h2>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Parent Render Count</p>
            <p className="text-3xl font-bold">{parentCount}</p>
            <Button onClick={() => setParentCount(p => p + 1)} className="mt-2">
              Re-render Parent
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold">Child 1 Count: {count1}</p>
              <ChildComponent onAction={handleAction1} label="Memoized Child 1" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold">Child 2 Count: {count2}</p>
              <ChildComponent onAction={handleAction2} label="Memoized Child 2" />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`const Child = memo(({ onAction, label }) => {
  console.log(\`\${label} rendered\`);
  return <button onClick={onAction}>{label}</button>;
});

function Parent() {
  const [count1, setCount1] = useState(0);
  const [parentCount, setParentCount] = useState(0);

  // Callback is memoized - stable reference
  const handleAction = useCallback(() => {
    console.log('Action called');
    setCount1(c => c + 1);
  }, []);

  return (
    <div>
      <button onClick={() => setParentCount(p => p + 1)}>
        Re-render Parent
      </button>
      <Child onAction={handleAction} label="Child" />
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
            <span><code className="px-2 py-1 bg-muted rounded">useCallback</code> prevents function recreation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Works with <code className="px-2 py-1 bg-muted rounded">React.memo()</code> to prevent child re-renders</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Children only re-render when their props actually change</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Check console to see rendering behavior</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
