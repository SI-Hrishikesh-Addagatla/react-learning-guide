import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Calculator, FormInput, ListTodo } from 'lucide-react';

const examples = [
  {
    path: '/hooks/use-reducer/counter',
    title: 'Counter',
    description: 'Simple counter with multiple action types',
    icon: Calculator,
  },
  {
    path: '/hooks/use-reducer/form',
    title: 'Complex Form',
    description: 'Managing complex form state with validation',
    icon: FormInput,
  },
  {
    path: '/hooks/use-reducer/todo-list',
    title: 'Todo List',
    description: 'CRUD operations with reducer pattern',
    icon: ListTodo,
  },
];

const UseReducerIndex = () => {
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
          <span className="text-foreground font-medium">useReducer</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">useReducer Hook</h1>
          <p className="text-xl text-muted-foreground">
            Manage complex state logic with predictable state updates
          </p>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">What is useReducer?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <code className="px-2 py-1 bg-muted rounded">useReducer</code> is a React Hook that lets you add a reducer 
            to your component. It's an alternative to <code className="px-2 py-1 bg-muted rounded">useState</code> that's 
            more suitable for managing complex state logic.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Key characteristics:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Predictable state transitions through actions</li>
              <li>Centralized state update logic</li>
              <li>Similar pattern to Redux</li>
              <li>Better for complex state with multiple sub-values</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">When to use useReducer over useState:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>State has complex update logic</li>
              <li>Multiple related state values</li>
              <li>Next state depends on previous state</li>
              <li>Want to optimize performance with deep updates</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example) => {
          const Icon = example.icon;
          return (
            <Link key={example.path} to={example.path}>
              <Card className="p-6 h-full hover:border-primary transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-muted-foreground">{example.description}</p>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-xl font-semibold mb-4">Learning Path</h3>
        <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
          <li>Start with <strong className="text-foreground">Counter</strong> - Understand basic reducer pattern</li>
          <li>Move to <strong className="text-foreground">Complex Form</strong> - Handle multiple fields</li>
          <li>Finish with <strong className="text-foreground">Todo List</strong> - Master CRUD operations</li>
        </ol>
      </Card>
    </div>
  );
};

export default UseReducerIndex;
