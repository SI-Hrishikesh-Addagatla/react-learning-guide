import { useRef, useImperativeHandle, forwardRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
}

const CustomInput = forwardRef<CustomInputHandle, { label: string }>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
  }));

  return (
    <div className="space-y-2">
      <Label>{props.label}</Label>
      <Input ref={inputRef} placeholder={`Enter ${props.label.toLowerCase()}...`} />
    </div>
  );
});

CustomInput.displayName = 'CustomInput';

export const InputFocusExample = () => {
  const inputRef1 = useRef<CustomInputHandle>(null);
  const inputRef2 = useRef<CustomInputHandle>(null);
  const inputRef3 = useRef<CustomInputHandle>(null);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Input Focus Control</h2>
        <div className="space-y-4">
          <CustomInput ref={inputRef1} label="First Name" />
          <CustomInput ref={inputRef2} label="Last Name" />
          <CustomInput ref={inputRef3} label="Email" />

          <div className="flex flex-wrap gap-2 pt-4">
            <Button onClick={() => inputRef1.current?.focus()}>
              Focus First Name
            </Button>
            <Button onClick={() => inputRef2.current?.focus()}>
              Focus Last Name
            </Button>
            <Button onClick={() => inputRef3.current?.focus()}>
              Focus Email
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                inputRef1.current?.clear();
                inputRef2.current?.clear();
                inputRef3.current?.clear();
              }}
            >
              Clear All
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
}

const CustomInput = forwardRef<CustomInputHandle>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
  }));

  return <input ref={inputRef} />;
});

function Parent() {
  const inputRef = useRef<CustomInputHandle>(null);

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>
        Focus Input
      </button>
      <button onClick={() => inputRef.current?.clear()}>
        Clear Input
      </button>
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
            <span><code className="px-2 py-1 bg-muted rounded">useImperativeHandle</code> customizes exposed ref value</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Must be used with <code className="px-2 py-1 bg-muted rounded">forwardRef</code></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Parent can call custom methods on child component</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Encapsulates internal implementation details</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
