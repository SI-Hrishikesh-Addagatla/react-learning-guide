import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Store, Code2, BookOpen } from 'lucide-react';

const concepts = [
  {
    path: '/zustand',
    title: 'Zustand State Management',
    description: 'Learn state management with Zustand through practical examples',
    icon: Store,
    status: 'Available',
    examples: 5,
  },
  {
    path: '#',
    title: 'React Hooks',
    description: 'Master React hooks with comprehensive demonstrations',
    icon: Code2,
    status: 'Coming Soon',
    examples: 0,
  },
  {
    path: '#',
    title: 'Context API',
    description: 'Understand React Context for state management',
    icon: BookOpen,
    status: 'Coming Soon',
    examples: 0,
  },
];

const Home = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          React Learning Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive learning platform for React concepts. Explore practical examples 
          and interactive demonstrations to master modern React development.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {concepts.map((concept) => (
          <Link 
            key={concept.path} 
            to={concept.path}
            className={concept.status === 'Coming Soon' ? 'pointer-events-none' : ''}
          >
            <Card className={`h-full transition-all duration-300 ${
              concept.status === 'Available' 
                ? 'hover:border-primary hover:shadow-lg cursor-pointer group' 
                : 'opacity-60'
            }`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <concept.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="flex items-center justify-between text-lg">
                      {concept.title}
                      {concept.status === 'Available' && (
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      )}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription>{concept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {concept.examples > 0 ? `${concept.examples} examples` : concept.status}
                  </span>
                  {concept.status === 'Available' && (
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                      Explore
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>About This Platform</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This platform is designed to help developers learn React concepts through 
            hands-on examples and interactive demonstrations. Each concept includes 
            multiple practical examples with detailed explanations.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-background">
              <h3 className="font-semibold mb-2">Interactive</h3>
              <p className="text-sm text-muted-foreground">
                Try out examples in real-time and see how they work
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background">
              <h3 className="font-semibold mb-2">Practical</h3>
              <p className="text-sm text-muted-foreground">
                Learn with real-world use cases and patterns
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background">
              <h3 className="font-semibold mb-2">Progressive</h3>
              <p className="text-sm text-muted-foreground">
                Start simple and advance to complex patterns
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
