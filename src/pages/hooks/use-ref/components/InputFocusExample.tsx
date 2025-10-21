import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const InputFocusExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const focusTextarea = () => {
    textareaRef.current?.focus();
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Interactive Demo</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name Input</Label>
            <Input
              id="name"
              ref={inputRef}
              placeholder="Type your name..."
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message Textarea</Label>
            <textarea
              id="message"
              ref={textareaRef}
              placeholder="Type your message..."
              className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button onClick={focusInput}>Focus Name Input</Button>
            <Button onClick={focusTextarea} variant="secondary">
              Focus Message
            </Button>
            <Button onClick={clearInput} variant="outline">
              Clear & Focus Input
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`const inputRef = useRef<HTMLInputElement>(null);

const focusInput = () => {
  inputRef.current?.focus();
};

const clearInput = () => {
  if (inputRef.current) {
    inputRef.current.value = '';
    inputRef.current.focus();
  }
};

return (
  <div>
    <Input ref={inputRef} placeholder="Type here..." />
    <Button onClick={focusInput}>Focus Input</Button>
  </div>
);`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span><code className="px-2 py-1 bg-muted rounded">useRef</code> creates a reference to DOM elements</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Access the element using <code className="px-2 py-1 bg-muted rounded">.current</code> property</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Use optional chaining <code className="px-2 py-1 bg-muted rounded">?.</code> for safe access</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>No re-renders when ref value changes</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
