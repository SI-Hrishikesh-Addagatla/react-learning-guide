import { useReducer, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
};

type Action =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number }
  | { type: 'SET_FILTER'; filter: State['filter'] }
  | { type: 'CLEAR_COMPLETED' };

let nextId = 1;

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nextId++, text: action.text, completed: false },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
}

export const TodoExample = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: 'all',
  });
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', text: inputValue });
      setInputValue('');
    }
  };

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: state.todos.length,
    active: state.todos.filter((t) => !t.completed).length,
    completed: state.todos.filter((t) => t.completed).length,
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Todo List with useReducer</h2>
        
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1"
          />
          <Button type="submit">Add</Button>
        </form>

        <div className="flex gap-2 mb-4">
          <Button
            variant={state.filter === 'all' ? 'default' : 'outline'}
            onClick={() => dispatch({ type: 'SET_FILTER', filter: 'all' })}
            size="sm"
          >
            All ({stats.total})
          </Button>
          <Button
            variant={state.filter === 'active' ? 'default' : 'outline'}
            onClick={() => dispatch({ type: 'SET_FILTER', filter: 'active' })}
            size="sm"
          >
            Active ({stats.active})
          </Button>
          <Button
            variant={state.filter === 'completed' ? 'default' : 'outline'}
            onClick={() => dispatch({ type: 'SET_FILTER', filter: 'completed' })}
            size="sm"
          >
            Completed ({stats.completed})
          </Button>
        </div>

        <div className="space-y-2 mb-4">
          {filteredTodos.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No todos {state.filter !== 'all' && `in ${state.filter}`}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
              >
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() =>
                    dispatch({ type: 'TOGGLE_TODO', id: todo.id })
                  }
                />
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? 'line-through text-muted-foreground'
                      : 'text-foreground'
                  }`}
                >
                  {todo.text}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    dispatch({ type: 'DELETE_TODO', id: todo.id })
                  }
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            ))
          )}
        </div>

        {stats.completed > 0 && (
          <Button
            variant="outline"
            onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
            className="w-full"
          >
            Clear Completed
          </Button>
        )}
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`type Todo = { id: number; text: string; completed: boolean };
type State = { todos: Todo[]; filter: 'all' | 'active' | 'completed' };

type Action =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number }
  | { type: 'SET_FILTER'; filter: State['filter'] };

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: nextId++, text: action.text, completed: false }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
}`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Complex CRUD operations in one reducer</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Multiple state properties (todos + filter)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Immutable updates using spread operator</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Derived state from filtering todos</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
