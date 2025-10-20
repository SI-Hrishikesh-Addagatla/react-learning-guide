import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
}

export const TodoExample = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Example 3: Array State Management</CardTitle>
          <Badge variant="outline">Advanced</Badge>
        </div>
        <CardDescription>
          Managing complex state with arrays - adding and removing items
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-6 rounded-lg space-y-4">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Add a new todo..."
              className="flex-1"
            />
            <Button onClick={addTodo}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>

          <div className="space-y-2">
            {todos.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No todos yet. Add one above!
              </div>
            ) : (
              <div className="space-y-2">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center justify-between p-3 bg-background border rounded-lg hover:border-primary transition-colors"
                  >
                    <span>{todo.text}</span>
                    <Button
                      onClick={() => deleteTodo(todo.id)}
                      variant="ghost"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground">
              Total todos: <span className="font-semibold text-foreground">{todos.length}</span>
            </p>
          </div>
        </div>

        <div className="bg-background p-4 rounded-lg border">
          <h4 className="font-semibold mb-3">Code Implementation:</h4>
          <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
            <code>{`const [todos, setTodos] = useState<Todo[]>([]);

// Add todo - spread existing array and add new item
const addTodo = () => {
  setTodos(prev => [...prev, { id: Date.now(), text: inputValue }]);
};

// Delete todo - filter out the item
const deleteTodo = (id: number) => {
  setTodos(prev => prev.filter(todo => todo.id !== id));
};`}</code>
          </pre>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">Working with Arrays in State:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li><strong>Adding:</strong> Use spread operator <code className="text-primary bg-primary/10 px-1 rounded">{`[...prev, newItem]`}</code></li>
            <li><strong>Removing:</strong> Use filter <code className="text-primary bg-primary/10 px-1 rounded">{`prev.filter(item => item.id !== id)`}</code></li>
            <li><strong>Updating:</strong> Use map <code className="text-primary bg-primary/10 px-1 rounded">{`prev.map(item => ...)`}</code></li>
            <li><strong>Important:</strong> Never mutate the array directly - always create a new one</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
