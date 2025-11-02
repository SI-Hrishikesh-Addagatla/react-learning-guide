import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Monitor, Save, Search } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-effect/practice/window-tracker',
    title: 'Window Resize Tracker',
    description: 'Track window dimensions in real-time with proper cleanup of event listeners',
    difficulty: 'Beginner',
    icon: Monitor,
    skills: ['Event listeners', 'Cleanup functions', 'Window API']
  },
  {
    path: '/hooks/use-effect/practice/auto-save-form',
    title: 'Auto-Save Form',
    description: 'Create a form that automatically saves to localStorage with debouncing',
    difficulty: 'Intermediate',
    icon: Save,
    skills: ['localStorage', 'Dependencies', 'Debouncing']
  },
  {
    path: '/hooks/use-effect/practice/search-filter',
    title: 'Real-Time Search',
    description: 'Build a search interface with API calls, loading states, and request cancellation',
    difficulty: 'Advanced',
    icon: Search,
    skills: ['API calls', 'Abort controller', 'Loading states']
  }
];

const UseEffectPractice = () => {
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
          <Link to="/hooks/use-effect" className="text-muted-foreground hover:text-foreground transition-colors">
            useEffect
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Practice</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">useEffect Practice Problems</h1>
          <p className="text-xl text-muted-foreground">
            Master side effects, cleanup, and dependencies in React
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
              Each practice problem focuses on different aspects of useEffect:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
              <li>Understand when effects run based on dependencies</li>
              <li>Implement proper cleanup to prevent memory leaks</li>
              <li>Handle async operations and side effects correctly</li>
              <li>Optimize performance with dependency arrays</li>
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
          <p>• Always consider what should trigger your effect (dependencies)</p>
          <p>• Remember to cleanup subscriptions and event listeners</p>
          <p>• Be careful with async operations inside useEffect</p>
          <p>• Avoid infinite loops by managing dependencies correctly</p>
          <p>• Use multiple useEffect calls to separate concerns</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseEffectPractice;
