import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCollaborationStore } from '@/stores/collaborationStore';
import { CheckCircle2, Clock, ListTodo } from 'lucide-react';

export const StatsPanel = () => {
  const { getTasksByStatus } = useCollaborationStore();

  const stats = [
    {
      title: 'To Do',
      value: getTasksByStatus('todo').length,
      icon: ListTodo,
      color: 'text-muted-foreground',
    },
    {
      title: 'In Progress',
      value: getTasksByStatus('in-progress').length,
      icon: Clock,
      color: 'text-primary',
    },
    {
      title: 'Completed',
      value: getTasksByStatus('done').length,
      icon: CheckCircle2,
      color: 'text-green-600 dark:text-green-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
