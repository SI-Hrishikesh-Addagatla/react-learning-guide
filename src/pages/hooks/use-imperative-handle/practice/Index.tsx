import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Play, FileVideo } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-imperative-handle/practice/counter-ref',
    title: 'Counter with Ref Control',
    description: 'Control counter from parent using imperative methods',
    difficulty: 'Beginner',
    icon: Code,
  },
  {
    path: '/hooks/use-imperative-handle/practice/audio-player',
    title: 'Audio Player Control',
    description: 'Build audio player with exposed playback controls',
    difficulty: 'Intermediate',
    icon: Play,
  },
  {
    path: '/hooks/use-imperative-handle/practice/video-editor',
    title: 'Video Editor Timeline',
    description: 'Create video timeline with imperative controls',
    difficulty: 'Advanced',
    icon: FileVideo,
  },
];

const difficultyColors = {
  Beginner: 'default',
  Intermediate: 'secondary',
  Advanced: 'destructive',
} as const;

const UseImperativeHandlePractice = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
          <span>/</span>
          <Link to="/hooks/use-imperative-handle" className="hover:text-foreground">useImperativeHandle</Link>
          <span>/</span>
          <span className="text-foreground">Practice</span>
        </nav>
        <h1 className="text-4xl font-bold mb-2">useImperativeHandle Practice</h1>
        <p className="text-xl text-muted-foreground">
          Master imperative APIs with forwardRef and useImperativeHandle
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <Link key={practice.path} to={practice.path}>
              <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant={difficultyColors[practice.difficulty]}>
                      {practice.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>💡 Practice Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-muted-foreground">
          <p>• Begin with <strong className="text-foreground">Counter with Ref Control</strong> for basics</p>
          <p>• Build <strong className="text-foreground">Audio Player Control</strong> for real-world usage</p>
          <p>• Master <strong className="text-foreground">Video Editor Timeline</strong> for complex scenarios</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseImperativeHandlePractice;
