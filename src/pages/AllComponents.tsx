import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check, ChevronDown, AlertCircle, Plus, Trash2, Edit, X, CheckCircle, Bell, Bookmark } from 'lucide-react';

const componentDocs = [
  {
    name: 'Button',
    description: 'Clickable button component with multiple variants and sizes',
    preview: (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="success_light">Success</Button>
          <Button variant="error_light">Error</Button>
          <Button variant="warning_light">Warning</Button>
          <Button variant="info_light">Info</Button>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <Button size="icon_xs"><Plus /></Button>
          <Button size="icon_sm"><Edit /></Button>
          <Button size="icon_md"><Trash2 /></Button>
          <Button size="icon_lg"><CheckCircle /></Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button><Plus className="mr-2 h-4 w-4" /> Add Item</Button>
          <Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" /> Delete</Button>
          <Button variant="outline"><Edit className="mr-2 h-4 w-4" /> Edit</Button>
        </div>
      </div>
    ),
    code: `import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

// Basic variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Light variants (with transparent backgrounds)
<Button variant="success_light">Success</Button>
<Button variant="error_light">Error</Button>
<Button variant="warning_light">Warning</Button>
<Button variant="info_light">Info</Button>

// Icon only buttons
<Button size="icon_xs"><Plus /></Button>
<Button size="icon_sm"><Edit /></Button>
<Button size="icon_md"><Trash2 /></Button>
<Button size="icon_lg"><CheckCircle /></Button>

// Buttons with icons and text
<Button><Plus className="mr-2 h-4 w-4" /> Add Item</Button>
<Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" /> Delete</Button>

// Size variants
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`,
  },
  {
    name: 'Card',
    description: 'Container component for displaying content',
    preview: (
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Card content area</p>
        </CardContent>
      </Card>
    ),
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

// Usage
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
  },
  {
    name: 'Input',
    description: 'Text input field component',
    preview: (
      <div className="space-y-2 max-w-md">
        <Input placeholder="Enter text..." />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </div>
    ),
    code: `import { Input } from '@/components/ui/input';

// Usage
<Input placeholder="Enter text..." />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled" />`,
  },
  {
    name: 'Label',
    description: 'Label component for form fields',
    preview: (
      <div className="space-y-2 max-w-md">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter email" />
      </div>
    ),
    code: `import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

// Usage
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>`,
  },
  {
    name: 'Textarea',
    description: 'Multi-line text input component',
    preview: (
      <Textarea placeholder="Type your message here..." className="max-w-md" />
    ),
    code: `import { Textarea } from '@/components/ui/textarea';

// Usage
<Textarea placeholder="Type your message..." />
<Textarea rows={5} placeholder="Larger textarea" />`,
  },
  {
    name: 'Badge',
    description: 'Small status or label component',
    preview: (
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    code: `import { Badge } from '@/components/ui/badge';

// Usage
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>`,
  },
  {
    name: 'Checkbox',
    description: 'Checkbox input component',
    preview: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    ),
    code: `import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

// Usage
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`,
  },
  {
    name: 'Switch',
    description: 'Toggle switch component',
    preview: (
      <div className="flex items-center space-x-2">
        <Switch id="airplane" />
        <Label htmlFor="airplane">Airplane Mode</Label>
      </div>
    ),
    code: `import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

// Usage
<div className="flex items-center space-x-2">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane Mode</Label>
</div>`,
  },
  {
    name: 'Alert',
    description: 'Alert message component',
    preview: (
      <div className="space-y-4 max-w-md">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            This is an informational alert message.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong.
          </AlertDescription>
        </Alert>
      </div>
    ),
    code: `import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

// Usage
<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    Your message here.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Error message here.
  </AlertDescription>
</Alert>`,
  },
  {
    name: 'Avatar',
    description: 'User avatar component',
    preview: (
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    ),
    code: `import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Usage
<Avatar>
  <AvatarImage src="https://example.com/avatar.jpg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
  },
  {
    name: 'Collapsible',
    description: 'Expandable content component',
    preview: (
      <Collapsible className="max-w-md">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full justify-between">
            Can I use this in my project?
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 py-2 text-sm text-muted-foreground">
          Yes! This component is part of your project's UI library.
        </CollapsibleContent>
      </Collapsible>
    ),
    code: `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Usage
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">
      Toggle Content
      <ChevronDown className="h-4 w-4" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>Your hidden content here</p>
  </CollapsibleContent>
</Collapsible>`,
  },
  {
    name: 'Dialog',
    description: 'Modal dialog component for confirmations and forms',
    preview: (
      <div className="flex flex-wrap gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your item.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> Add Bookmark</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Bookmark</DialogTitle>
              <DialogDescription>
                Enter the details for your new bookmark
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="My Bookmark" />
              </div>
              <div>
                <Label htmlFor="url">URL</Label>
                <Input id="url" type="url" placeholder="https://example.com" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    ),
    code: `import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Delete Confirmation Dialog
<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Form Dialog
<Dialog>
  <DialogTrigger asChild>
    <Button>Add Item</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add New Item</DialogTitle>
      <DialogDescription>
        Fill in the details below
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <Input placeholder="Enter value..." />
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  },
  {
    name: 'Tabs',
    description: 'Tabbed navigation component for organizing content',
    preview: (
      <Tabs defaultValue="all" className="max-w-md">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="p-4 border rounded-md mt-2">
          <p className="text-sm">All items will be shown here</p>
        </TabsContent>
        <TabsContent value="active" className="p-4 border rounded-md mt-2">
          <p className="text-sm">Active items will be shown here</p>
        </TabsContent>
        <TabsContent value="completed" className="p-4 border rounded-md mt-2">
          <p className="text-sm">Completed items will be shown here</p>
        </TabsContent>
      </Tabs>
    ),
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Usage
<Tabs defaultValue="all">
  <TabsList>
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="completed">Completed</TabsTrigger>
  </TabsList>
  <TabsContent value="all">
    <p>All items content</p>
  </TabsContent>
  <TabsContent value="active">
    <p>Active items content</p>
  </TabsContent>
  <TabsContent value="completed">
    <p>Completed items content</p>
  </TabsContent>
</Tabs>

// Custom styling for filter tabs
<Tabs value={activeFilter} onValueChange={setActiveFilter}>
  <TabsList className="flex gap-2 flex-wrap h-auto bg-transparent p-0">
    <TabsTrigger 
      value="all" 
      className="px-4 py-2 rounded-lg border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
    >
      All
    </TabsTrigger>
    <TabsTrigger value="unread">Unread</TabsTrigger>
  </TabsList>
</Tabs>`,
  },
];

export default function AllComponents() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">UI Components</h1>
        <p className="text-muted-foreground">
          Complete reference of all UI components used in this project. Copy and use them in your practice projects.
        </p>
      </div>

      <div className="space-y-8">
        {componentDocs.map((component, index) => (
          <Card key={component.name}>
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-3">Preview</h4>
                <div className="p-6 border rounded-lg bg-muted/30">
                  {component.preview}
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold">Code</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyCode(component.code, index)}
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                  <code>{component.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Need More Components?</CardTitle>
          <CardDescription>
            This project uses shadcn/ui components. For more components and detailed documentation, visit{' '}
            <a 
              href="https://ui.shadcn.com/docs/components" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              shadcn/ui documentation
            </a>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
