import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, ArrowRight } from 'lucide-react';
import { Task, useCollaborationStore } from '@/stores/collaborationStore';
import { toast } from '@/hooks/use-toast';

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { updateTaskStatus, deleteTask, teamMembers } = useCollaborationStore();
  
  const member = teamMembers.find((m) => m.id === task.assignedTo);
  
  const statusColors = {
    todo: 'bg-muted text-muted-foreground',
    'in-progress': 'bg-primary/20 text-primary',
    done: 'bg-green-500/20 text-green-700 dark:text-green-400',
  };
  
  const priorityColors = {
    low: 'outline',
    medium: 'secondary',
    high: 'destructive',
  };

  const nextStatus: Record<Task['status'], Task['status'] | null> = {
    todo: 'in-progress',
    'in-progress': 'done',
    done: null,
  };

  const handleStatusUpdate = () => {
    const next = nextStatus[task.status];
    if (next) {
      updateTaskStatus(task.id, next);
      toast({
        title: 'Task updated',
        description: `Task moved to ${next.replace('-', ' ')}`,
      });
    }
  };

  const handleDelete = () => {
    deleteTask(task.id);
    toast({
      title: 'Task deleted',
      description: 'Task has been removed from the board',
      variant: 'destructive',
    });
  };

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold flex-1">{task.title}</h3>
          <Badge variant={priorityColors[task.priority] as "default" | "destructive" | "outline" | "secondary"} className="text-xs">
            {task.priority}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl">{member?.avatar}</span>
          <div className="flex-1">
            <p className="text-sm font-medium">{member?.name}</p>
            <p className="text-xs text-muted-foreground">{member?.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className={`text-xs px-2 py-1 rounded-md ${statusColors[task.status]}`}>
            {task.status.replace('-', ' ')}
          </span>
          
          <div className="flex gap-1">
            {nextStatus[task.status] && (
              <Button size="sm" variant="ghost" onClick={handleStatusUpdate}>
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
            <Button size="sm" variant="ghost" onClick={handleDelete}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
