import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, MousePointer, ArrowDown, Video } from 'lucide-react';

const practices = [
  {
    path: '/hooks/use-ref/practice/click-counter',
    title: 'Click Counter',
    description: 'Track clicks without causing re-renders',
    difficulty: 'Beginner',
    icon: MousePointer,
  },
  {
    path: '/hooks/use-ref/practice/scroll-to-section',
    title: 'Scroll to Section',
    description: 'Navigate to different sections using refs',
    difficulty: 'Intermediate',
    icon: ArrowDown,
  },
  {
    path: '/hooks/use-ref/practice/video-player',
    title: 'Custom Video Player',
    description: 'Build a video player with playback controls',
    difficulty: 'Advanced',
    icon: Video,
  },
];

const UseRefPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-ref" className="hover:text-foreground">useRef</Link>
        <span>/</span>
        <span className="text-foreground">Practice</span>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Code className="h-10 w-10" />
          useRef Practice Problems
        </h1>
        <p className="text-lg text-muted-foreground">
          Master useRef through hands-on challenges. Build real-world features that require DOM manipulation and persistent values.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <Link key={practice.path} to={practice.path}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant={
                      practice.difficulty === 'Beginner' ? 'default' :
                      practice.difficulty === 'Intermediate' ? 'secondary' :
                      'destructive'
                    }>
                      {practice.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">{practice.title}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>📚 Learning Path</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            1. Start with <strong>Click Counter</strong> to understand how refs persist values without re-renders
          </p>
          <p className="text-sm text-muted-foreground">
            2. Move to <strong>Scroll to Section</strong> to learn DOM manipulation with refs
          </p>
          <p className="text-sm text-muted-foreground">
            3. Challenge yourself with <strong>Custom Video Player</strong> to master media element control
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UseRefPractice;
