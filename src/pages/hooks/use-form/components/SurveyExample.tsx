import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface SurveyFormData {
  name: string;
  age: string;
  occupation: string;
  experience: string;
  rating: string;
  feedback: string;
}

export const SurveyExample = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SurveyFormData>();

  const onSubmit = async (data: SurveyFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Survey Submitted!',
      description: 'Thank you for your feedback.',
    });
    
    console.log('Survey data:', data);
    reset();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Interactive Example</CardTitle>
          <CardDescription>Complete the customer satisfaction survey</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                {...register('age', {
                  required: 'Age is required',
                  min: {
                    value: 18,
                    message: 'Must be 18 or older',
                  },
                  max: {
                    value: 120,
                    message: 'Invalid age',
                  },
                })}
                placeholder="Enter your age"
              />
              {errors.age && (
                <p className="text-sm text-destructive">{errors.age.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation</Label>
              <Input
                id="occupation"
                {...register('occupation', {
                  required: 'Occupation is required',
                })}
                placeholder="Enter your occupation"
              />
              {errors.occupation && (
                <p className="text-sm text-destructive">{errors.occupation.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Select
                onValueChange={(value) => setValue('experience', value, { shouldValidate: true })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2">0-2 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
              <input
                type="hidden"
                {...register('experience', {
                  required: 'Please select your experience',
                })}
              />
              {errors.experience && (
                <p className="text-sm text-destructive">{errors.experience.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating">Overall Satisfaction (1-10)</Label>
              <Input
                id="rating"
                type="number"
                {...register('rating', {
                  required: 'Rating is required',
                  min: {
                    value: 1,
                    message: 'Rating must be at least 1',
                  },
                  max: {
                    value: 10,
                    message: 'Rating must be at most 10',
                  },
                })}
                placeholder="Rate from 1 to 10"
              />
              {errors.rating && (
                <p className="text-sm text-destructive">{errors.rating.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">Additional Feedback</Label>
              <Textarea
                id="feedback"
                {...register('feedback', {
                  maxLength: {
                    value: 500,
                    message: 'Feedback must be less than 500 characters',
                  },
                })}
                placeholder="Share your thoughts..."
                rows={4}
              />
              {errors.feedback && (
                <p className="text-sm text-destructive">{errors.feedback.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Survey'}
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

interface SurveyData {
  name: string;
  age: string;
  occupation: string;
  experience: string;
  rating: string;
  feedback: string;
}

function SurveyForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SurveyData>();

  const onSubmit = (data: SurveyData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name', {
          required: 'Name is required',
          minLength: { value: 2, message: 'Min 2 chars' }
        })}
      />

      <input
        type="number"
        {...register('age', {
          required: 'Age is required',
          min: { value: 18, message: 'Must be 18+' }
        })}
      />

      {/* For Select components, use setValue */}
      <Select
        onValueChange={(value) => 
          setValue('experience', value, { shouldValidate: true })
        }
      >
        <SelectItem value="0-2">0-2 years</SelectItem>
        <SelectItem value="3-5">3-5 years</SelectItem>
      </Select>
      <input
        type="hidden"
        {...register('experience', { required: true })}
      />

      <textarea
        {...register('feedback', {
          maxLength: { value: 500, message: 'Max 500 chars' }
        })}
      />
      
      <button type="submit">Submit</button>
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
                <strong className="text-foreground">Multiple input types:</strong> Handle text, number, textarea, and select
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">2.</span>
              <div>
                <strong className="text-foreground">setValue:</strong> Programmatically set values for custom components
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">3.</span>
              <div>
                <strong className="text-foreground">Number validation:</strong> Use min and max rules for numeric inputs
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">4.</span>
              <div>
                <strong className="text-foreground">Hidden inputs:</strong> Use hidden inputs for custom component validation
              </div>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">5.</span>
              <div>
                <strong className="text-foreground">shouldValidate:</strong> Trigger validation when setting values programmatically
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
