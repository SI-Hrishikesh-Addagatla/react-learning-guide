import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Code2, Lightbulb, ArrowLeft } from 'lucide-react';

const PracticePage = () => {
  const practices = [
    {
      id: 1,
      type: 'fill-in',
      title: 'Counter Store - Fill in the Blanks',
      description: 'Complete UI is provided. Your task is to implement the Zustand store logic.',
      difficulty: 'Easy',
      path: '/zustand/practice/fill-in-counter',
      icon: Code2,
    },
    {
      id: 2,
      type: 'build',
      title: 'Bookmark Manager',
      description: 'Build a bookmark manager from scratch using the provided wireframe and requirements.',
      difficulty: 'Medium',
      path: '/zustand/practice/build-bookmark',
      icon: Lightbulb,
    },
    {
      id: 3,
      type: 'build',
      title: 'Notification System',
      description: 'Create a notification system with toast messages using the wireframe provided.',
      difficulty: 'Medium',
      path: '/zustand/practice/build-notification',
      icon: Lightbulb,
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <Link to="/zustand">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Zustand
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Zustand Practice Sessions</h1>
        <p className="text-lg text-muted-foreground">
          Test your understanding of Zustand with hands-on practice problems. Two types of challenges await you!
        </p>
      </div>

      <div className="grid gap-6 mb-8">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <CardTitle>Type 1: Fill in the Blanks</CardTitle>
            </div>
            <CardDescription>
              Complete UI is provided. Focus on implementing the store logic with helpful comments guiding you.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-secondary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-secondary" />
              <CardTitle>Type 2: Build from Scratch</CardTitle>
            </div>
            <CardDescription>
              Problem statement and UI wireframe provided. Build the entire solution including UI and store logic.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <Card key={practice.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <Badge variant={practice.type === 'fill-in' ? 'default' : 'secondary'}>
                    {practice.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{practice.title}</CardTitle>
                <CardDescription className="line-clamp-3">{practice.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={practice.path}>
                  <Button className="w-full">Start Practice</Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PracticePage;
