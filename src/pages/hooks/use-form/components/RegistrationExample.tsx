import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface RegistrationFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationExample = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistrationFormData>();

  const password = watch('password');

  const onSubmit = async (data: RegistrationFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Registration Successful!',
      description: `Welcome, ${data.username}!`,
    });
    
    reset();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Interactive Example</CardTitle>
          <CardDescription>Fill out the registration form</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                {...register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                })}
                placeholder="Enter username"
              />
              {errors.username && (
                <p className="text-sm text-destructive">{errors.username.message}</p>
              )}
            </div>

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
                placeholder="Enter email"
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
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message: 'Password must contain uppercase, lowercase, and number',
                  },
                })}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === password || 'Passwords do not match',
                })}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
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

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const password = watch('password');

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: { value: 3, message: 'Min 3 chars' }
        })}
      />
      {errors.username && <p>{errors.username.message}</p>}

      <input
        {...register('password', {
          required: true,
          minLength: { value: 8, message: 'Min 8 chars' }
        })}
      />
      
      <input
        {...register('confirmPassword', {
          validate: (value) => 
            value === password || 'Passwords do not match'
        })}
      />
      
      <button type="submit">Register</button>
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
                <strong className="text-foreground">register:</strong> Connects input fields to the form state
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">2.</span>
              <div>
                <strong className="text-foreground">Validation rules:</strong> Built-in rules like required, minLength, pattern
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">3.</span>
              <div>
                <strong className="text-foreground">Custom validation:</strong> Use validate function for complex logic
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">4.</span>
              <div>
                <strong className="text-foreground">Error handling:</strong> Automatic error state management
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">5.</span>
              <div>
                <strong className="text-foreground">watch:</strong> Monitor specific field values for dependent validation
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
