import { useTodoStore } from '@/stores/todoStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus } from 'lucide-react';
import { useState } from 'react';

const Todos = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodoStore();
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Todo List Example</h1>
        <p className="text-muted-foreground">
          Managing arrays and CRUD operations with Zustand.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Todo</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1"
            />
            <Button type="submit">
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Active Todos
              <Badge variant="secondary">{activeTodos.length}</Badge>
            </CardTitle>
            <CardDescription>Tasks that need to be completed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activeTodos.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No active todos</p>
              ) : (
                activeTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card"
                  >
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                    />
                    <span className="flex-1 text-sm">{todo.text}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Completed Todos
              <Badge variant="secondary">{completedTodos.length}</Badge>
            </CardTitle>
            <CardDescription>Tasks that are done</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {completedTodos.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No completed todos
                </p>
              ) : (
                <>
                  {completedTodos.map((todo) => (
                    <div
                      key={todo.id}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card"
                    >
                      <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => toggleTodo(todo.id)}
                      />
                      <span className="flex-1 text-sm line-through text-muted-foreground">
                        {todo.text}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={clearCompleted}
                    className="w-full"
                  >
                    Clear Completed
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Array Management</h3>
            <p className="text-sm text-muted-foreground">
              Demonstrates adding, updating, and removing items from arrays in Zustand state.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Immutable Updates</h3>
            <p className="text-sm text-muted-foreground">
              All state updates create new arrays/objects rather than mutating existing ones.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Todos;
