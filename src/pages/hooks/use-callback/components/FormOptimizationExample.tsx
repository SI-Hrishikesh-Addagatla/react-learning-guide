import { useCallback, useState, memo } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const FormField = memo(({ label, value, onChange }: FormFieldProps) => {
  console.log(`${label} field rendered`);
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}...`}
      />
    </div>
  );
});

FormField.displayName = 'FormField';

export const FormOptimizationExample = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Memoized callbacks for each field
  const handleFirstNameChange = useCallback((value: string) => {
    setFirstName(value);
  }, []);

  const handleLastNameChange = useCallback((value: string) => {
    setLastName(value);
  }, []);

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handlePhoneChange = useCallback((value: string) => {
    setPhone(value);
  }, []);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Form Optimization Demo</h2>
        <div className="space-y-4">
          <FormField label="First Name" value={firstName} onChange={handleFirstNameChange} />
          <FormField label="Last Name" value={lastName} onChange={handleLastNameChange} />
          <FormField label="Email" value={email} onChange={handleEmailChange} />
          <FormField label="Phone" value={phone} onChange={handlePhoneChange} />

          <Card className="p-4 bg-muted/50 mt-4">
            <h4 className="font-semibold mb-2">Form Data</h4>
            <pre className="text-sm">
              {JSON.stringify({ firstName, lastName, email, phone }, null, 2)}
            </pre>
          </Card>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`const FormField = memo(({ label, value, onChange }) => {
  console.log(\`\${label} rendered\`);
  return (
    <div>
      <label>{label}</label>
      <input 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
});

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Each callback is memoized
  const handleFirstNameChange = useCallback((value) => {
    setFirstName(value);
  }, []);

  const handleLastNameChange = useCallback((value) => {
    setLastName(value);
  }, []);

  return (
    <form>
      <FormField 
        label="First Name" 
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <FormField 
        label="Last Name" 
        value={lastName}
        onChange={handleLastNameChange}
      />
    </form>
  );
}`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Each field only re-renders when its own value changes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Prevents cascading re-renders in large forms</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Significantly improves performance for complex forms</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Check console to see which fields render</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
