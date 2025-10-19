import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useCollaborationStore } from '@/stores/collaborationStore';
import { TaskCard } from './collaboration/components/TaskCard';
import { TeamMemberCard } from './collaboration/components/TeamMemberCard';
import { AddTaskForm } from './collaboration/components/AddTaskForm';
import { FilterTabs } from './collaboration/components/FilterTabs';
import { StatsPanel } from './collaboration/components/StatsPanel';
import { Info } from 'lucide-react';

const Collaboration = () => {
  const { tasks, teamMembers, filter, selectedMemberId, getTasksByMember } = useCollaborationStore();

  // Filter tasks based on current filter and selected member
  const filteredTasks = tasks.filter((task) => {
    const statusMatch = filter === 'all' || task.status === filter;
    const memberMatch = !selectedMemberId || task.assignedTo === selectedMemberId;
    return statusMatch && memberMatch;
  });

  const selectedMember = teamMembers.find((m) => m.id === selectedMemberId);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Team Collaboration Dashboard</h1>
        <p className="text-muted-foreground">
          Advanced example demonstrating multi-component coordination through a shared Zustand store
        </p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Key Concepts Demonstrated:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Multiple components (TaskCard, TeamMemberCard, AddTaskForm, etc.) sharing a single store</li>
            <li>Real-time synchronization: Changes in one component instantly reflect in others</li>
            <li>Computed values and derived state (task counts, filtered lists)</li>
            <li>DevTools integration for debugging state changes</li>
            <li>Clean component organization in dedicated folders</li>
          </ul>
        </AlertDescription>
      </Alert>

      <StatsPanel />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Task Board</CardTitle>
              <CardDescription>
                {selectedMember
                  ? `Showing tasks for ${selectedMember.name} (${getTasksByMember(selectedMemberId!).length})`
                  : 'Showing all tasks'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FilterTabs />
              
              <div className="grid gap-4">
                {filteredTasks.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No tasks found matching the current filters
                  </div>
                ) : (
                  filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Click to filter tasks by member</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </CardContent>
          </Card>

          <div>
            <h3 className="text-lg font-semibold mb-3">Add New Task</h3>
            <AddTaskForm />
          </div>
        </div>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>How Components Coordinate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background">
              <h4 className="font-semibold mb-2">Shared Store Pattern</h4>
              <p className="text-sm text-muted-foreground">
                All components import <code className="text-xs bg-muted px-1 py-0.5 rounded">useCollaborationStore</code> and 
                access the same state. When one component updates the store, all subscribed components re-render automatically.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background">
              <h4 className="font-semibold mb-2">Component Isolation</h4>
              <p className="text-sm text-muted-foreground">
                Each component is in its own file within <code className="text-xs bg-muted px-1 py-0.5 rounded">collaboration/components/</code>, 
                making the codebase maintainable and following separation of concerns.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background">
              <h4 className="font-semibold mb-2">Computed Values</h4>
              <p className="text-sm text-muted-foreground">
                Functions like <code className="text-xs bg-muted px-1 py-0.5 rounded">getTasksByMember()</code> compute derived 
                state without storing redundant data, keeping the store lean and efficient.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background">
              <h4 className="font-semibold mb-2">DevTools Support</h4>
              <p className="text-sm text-muted-foreground">
                The store uses the devtools middleware. Open Redux DevTools in your browser to inspect and 
                time-travel through state changes!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Collaboration;
