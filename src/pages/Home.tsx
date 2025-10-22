import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, Code2, FileCode2, Lightbulb } from 'lucide-react';

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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/zustand">
          <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer group">
            <CardHeader>
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                <Store className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Zustand</CardTitle>
              <CardDescription>State Management Examples</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                Explore →
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/hooks">
          <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer group">
            <CardHeader>
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">React Hooks</CardTitle>
              <CardDescription>Comprehensive Hook Examples</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                Explore →
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/all-components">
          <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer group">
            <CardHeader>
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                <FileCode2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Components</CardTitle>
              <CardDescription>UI Component Reference</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                View All →
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Card className="h-full bg-muted/50 border-dashed">
          <CardHeader>
            <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Practice</CardTitle>
            <CardDescription>Coming Soon</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Code challenges and exercises
            </p>
          </CardContent>
        </Card>
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
