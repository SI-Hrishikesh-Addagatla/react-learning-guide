import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const LoginExample = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Simulate authentication check
    if (data.email === 'test@example.com' && data.password === 'password123') {
      toast({
        title: 'Login Successful!',
        description: 'Welcome back!',
      });
    } else {
      setError('root', {
        message: 'Invalid email or password',
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Interactive Example</CardTitle>
          <CardDescription>
            Try logging in with email: test@example.com, password: password123
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                {...register('rememberMe')}
              />
              <Label
                htmlFor="rememberMe"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </Label>
            </div>

            {errors.root && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-destructive">{errors.root.message}</p>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Code Example</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`import { useForm } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginAPI(data);
      // Handle success
    } catch (error) {
      // Set form-level error
      setError('root', {
        message: 'Invalid credentials'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
            message: 'Invalid email'
          }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        {...register('password', {
          required: 'Password is required',
          minLength: { value: 6, message: 'Min 6 chars' }
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="checkbox" {...register('rememberMe')} />
      
      {errors.root && <p>{errors.root.message}</p>}
      
      <button type="submit">Login</button>
    </form>
  );
}`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-bold">1.</span>
              <div>
                <strong className="text-foreground">setError:</strong> Set errors programmatically after async validation
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">2.</span>
              <div>
                <strong className="text-foreground">Root errors:</strong> Use 'root' key for form-level errors
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">3.</span>
              <div>
                <strong className="text-foreground">Default values:</strong> Initialize form with default values
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">4.</span>
              <div>
                <strong className="text-foreground">isSubmitting:</strong> Track submission state for loading indicators
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">5.</span>
              <div>
                <strong className="text-foreground">Checkbox handling:</strong> Register checkbox inputs with proper binding
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
