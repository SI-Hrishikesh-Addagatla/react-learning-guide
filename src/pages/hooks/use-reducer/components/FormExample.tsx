import { useReducer } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type FormState = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors: {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
};

type FormAction =
  | { type: 'SET_FIELD'; field: keyof Omit<FormState, 'errors'>; value: string }
  | { type: 'SET_ERROR'; field: keyof FormState['errors']; error: string }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'RESET_FORM' };

const initialState: FormState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };
    case 'CLEAR_ERRORS':
      return {
        ...state,
        errors: {},
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

export const FormExample = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    dispatch({ type: 'CLEAR_ERRORS' });
    let isValid = true;

    if (state.username.length < 3) {
      dispatch({ type: 'SET_ERROR', field: 'username', error: 'Username must be at least 3 characters' });
      isValid = false;
    }

    if (!state.email.includes('@')) {
      dispatch({ type: 'SET_ERROR', field: 'email', error: 'Invalid email address' });
      isValid = false;
    }

    if (state.password.length < 6) {
      dispatch({ type: 'SET_ERROR', field: 'password', error: 'Password must be at least 6 characters' });
      isValid = false;
    }

    if (state.password !== state.confirmPassword) {
      dispatch({ type: 'SET_ERROR', field: 'confirmPassword', error: 'Passwords do not match' });
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: 'Form submitted successfully!',
        description: `Welcome, ${state.username}!`,
      });
      dispatch({ type: 'RESET_FORM' });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={state.username}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'username', value: e.target.value })}
              placeholder="Enter username"
            />
            {state.errors.username && (
              <p className="text-sm text-destructive">{state.errors.username}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={state.email}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
              placeholder="Enter email"
            />
            {state.errors.email && (
              <p className="text-sm text-destructive">{state.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={state.password}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })}
              placeholder="Enter password"
            />
            {state.errors.password && (
              <p className="text-sm text-destructive">{state.errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={state.confirmPassword}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'confirmPassword', value: e.target.value })}
              placeholder="Confirm password"
            />
            {state.errors.confirmPassword && (
              <p className="text-sm text-destructive">{state.errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline" onClick={() => dispatch({ type: 'RESET_FORM' })}>
              Reset
            </Button>
          </div>
        </form>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`type FormState = {
  username: string;
  email: string;
  errors: { username?: string; email?: string };
};

type FormAction =
  | { type: 'SET_FIELD'; field: string; value: string }
  | { type: 'SET_ERROR'; field: string; error: string }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'RESET_FORM' };

function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error }
      };
    case 'CLEAR_ERRORS':
      return { ...state, errors: {} };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(formReducer, initialState);`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Centralized state management for complex forms</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Separate actions for field updates and validation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Nested state objects for organized data</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Easy to add new fields without complex setState logic</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
