import { useMemo, useState, memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface User {
  name: string;
  age: number;
  email: string;
}

// Memoized child component
const UserProfile = memo(({ user }: { user: User }) => {
  console.log('UserProfile rendered');
  return (
    <Card className="p-4 bg-primary/10">
      <h4 className="font-semibold mb-2">User Profile</h4>
      <p className="text-sm"><strong>Name:</strong> {user.name}</p>
      <p className="text-sm"><strong>Age:</strong> {user.age}</p>
      <p className="text-sm"><strong>Email:</strong> {user.email}</p>
    </Card>
  );
});

UserProfile.displayName = 'UserProfile';

export const ComplexObjectExample = () => {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(25);
  const [count, setCount] = useState(0);

  // Memoized user object
  const user = useMemo(() => {
    console.log('Creating user object...');
    return {
      name,
      age,
      email: `${name.toLowerCase().replace(' ', '.')}@example.com`,
    };
  }, [name, age]);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Complex Object Memoization</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label>Counter (doesn't recreate user object)</Label>
            <div className="flex gap-2 items-center">
              <Button onClick={() => setCount(count + 1)}>
                Increment
              </Button>
              <span className="text-2xl font-bold">{count}</span>
            </div>
          </div>

          <UserProfile user={user} />
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`const UserProfile = memo(({ user }) => {
  console.log('UserProfile rendered');
  return <div>{user.name}</div>;
});

function Component() {
  const [name, setName] = useState('John');
  const [count, setCount] = useState(0);

  // Memoize object to prevent reference change
  const user = useMemo(() => {
    console.log('Creating user...');
    return {
      name,
      email: \`\${name}@example.com\`,
    };
  }, [name]);

  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <UserProfile user={user} />
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
            <span>Prevents object recreation on every render</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Works with <code className="px-2 py-1 bg-muted rounded">React.memo()</code> to prevent child re-renders</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Object reference stays stable unless dependencies change</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Check console to see when object is created and component renders</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
