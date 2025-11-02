import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Thermometer, ShoppingCart, ClipboardList } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-state/practice/temperature-converter',
    title: 'Temperature Converter',
    description: 'Build a converter that switches between Celsius and Fahrenheit with real-time updates',
    difficulty: 'Beginner',
    icon: Thermometer,
    skills: ['Basic useState', 'Controlled inputs', 'Calculations']
  },
  {
    path: '/hooks/use-state/practice/shopping-cart',
    title: 'Shopping Cart',
    description: 'Create a shopping cart with add/remove items, quantity management, and total calculation',
    difficulty: 'Intermediate',
    icon: ShoppingCart,
    skills: ['Array state', 'Object manipulation', 'Derived state']
  },
  {
    path: '/hooks/use-state/practice/multi-step-form',
    title: 'Multi-Step Form',
    description: 'Build a multi-step registration form with progress tracking and validation',
    difficulty: 'Advanced',
    icon: ClipboardList,
    skills: ['Complex state', 'Conditional rendering', 'Form validation']
  }
];

const UseStatePractice = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks" className="text-muted-foreground hover:text-foreground transition-colors">
            Hooks
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-state" className="text-muted-foreground hover:text-foreground transition-colors">
            useState
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Practice</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">useState Practice Problems</h1>
          <p className="text-xl text-muted-foreground">
            Hands-on challenges to master state management in React
          </p>
        </div>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            How to Practice
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <p className="text-sm">
              Each practice problem provides a wireframe and requirements. Your goal is to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
              <li>Analyze the wireframe and understand the functionality</li>
              <li>Implement state management using useState</li>
              <li>Handle user interactions and update state accordingly</li>
              <li>Test your implementation against the requirements</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <Link key={practice.path} to={practice.path}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge 
                      variant={
                        practice.difficulty === 'Beginner' ? 'default' : 
                        practice.difficulty === 'Intermediate' ? 'secondary' : 
                        'destructive'
                      }
                    >
                      {practice.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">You'll learn:</p>
                    <div className="flex flex-wrap gap-2">
                      {practice.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tips for Success</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Start with the beginner problem if you're new to useState</p>
          <p>• Read the requirements carefully before coding</p>
          <p>• Think about what state you need before implementing</p>
          <p>• Consider using multiple useState calls vs. one complex state object</p>
          <p>• Test edge cases and user interactions thoroughly</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseStatePractice;
