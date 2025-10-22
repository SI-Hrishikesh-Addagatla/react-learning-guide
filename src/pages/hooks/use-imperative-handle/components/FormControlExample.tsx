import { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface FormHandle {
  reset: () => void;
  validate: () => boolean;
  getValues: () => { name: string; email: string; phone: string };
}

const CustomForm = forwardRef<FormHandle>((props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useImperativeHandle(ref, () => ({
    reset: () => {
      setName('');
      setEmail('');
      setPhone('');
      setErrors({});
    },
    validate: () => {
      const newErrors: Record<string, string> = {};
      
      if (!name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = 'Invalid email format';
      }
      
      if (!phone.trim()) {
        newErrors.phone = 'Phone is required';
      } else if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Phone must be 10 digits';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    getValues: () => ({ name, email, phone }),
  }));

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Name</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name..."
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email..."
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Phone</Label>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone..."
          className={errors.phone ? 'border-destructive' : ''}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone}</p>
        )}
      </div>
    </div>
  );
});

CustomForm.displayName = 'CustomForm';

export const FormControlExample = () => {
  const formRef = useRef<FormHandle>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    const isValid = formRef.current?.validate();
    
    if (isValid) {
      const values = formRef.current?.getValues();
      toast({
        title: 'Form Submitted!',
        description: `Name: ${values?.name}, Email: ${values?.email}`,
      });
    } else {
      toast({
        title: 'Validation Failed',
        description: 'Please fix the errors and try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Form Control Demo</h2>
        <div className="space-y-4">
          <CustomForm ref={formRef} />

          <div className="flex gap-2 pt-4">
            <Button onClick={handleSubmit}>
              Submit Form
            </Button>
            <Button variant="outline" onClick={() => formRef.current?.reset()}>
              Reset Form
            </Button>
            <Button variant="outline" onClick={() => formRef.current?.validate()}>
              Validate Only
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`interface FormHandle {
  reset: () => void;
  validate: () => boolean;
  getValues: () => FormData;
}

const CustomForm = forwardRef<FormHandle>((props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useImperativeHandle(ref, () => ({
    reset: () => {
      setName('');
      setEmail('');
    },
    validate: () => {
      // Validation logic
      return name.trim() !== '' && email.includes('@');
    },
    getValues: () => ({ name, email }),
  }));

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </form>
  );
});

function Parent() {
  const formRef = useRef<FormHandle>(null);

  const handleSubmit = () => {
    if (formRef.current?.validate()) {
      const values = formRef.current.getValues();
      console.log('Submitted:', values);
    }
  };

  return (
    <div>
      <CustomForm ref={formRef} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => formRef.current?.reset()}>Reset</button>
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
            <span>Expose multiple methods for complex form operations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Parent controls form validation and submission</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Encapsulates form state and logic within child</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Perfect for reusable form components</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
