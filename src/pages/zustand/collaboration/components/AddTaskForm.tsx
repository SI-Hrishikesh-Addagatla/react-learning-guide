import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCollaborationStore } from '@/stores/collaborationStore';
import { toast } from '@/hooks/use-toast';

export const AddTaskForm = () => {
  const { addTask, teamMembers } = useCollaborationStore();
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [assignedTo, setAssignedTo] = useState(teamMembers[0]?.id || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a task title',
        variant: 'destructive',
      });
      return;
    }

    addTask({
      title: title.trim(),
      status: 'todo',
      assignedTo,
      priority,
    });

    setTitle('');
    toast({
      title: 'Task created',
      description: 'New task has been added to the board',
    });
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="task-title">Task Title</Label>
          <Input
            id="task-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="assign-to">Assign To</Label>
            <select
              id="assign-to"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {teamMembers.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.avatar} {member.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Add Task
        </Button>
      </form>
    </Card>
  );
};
