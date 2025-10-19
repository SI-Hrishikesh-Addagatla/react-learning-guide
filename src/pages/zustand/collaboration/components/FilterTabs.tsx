import { Button } from '@/components/ui/button';
import { useCollaborationStore } from '@/stores/collaborationStore';

export const FilterTabs = () => {
  const { filter, setFilter, tasks } = useCollaborationStore();

  const filters: Array<{ value: typeof filter; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'todo', label: 'To Do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' },
  ];

  const getCount = (filterValue: typeof filter) => {
    if (filterValue === 'all') return tasks.length;
    return tasks.filter((task) => task.status === filterValue).length;
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((f) => (
        <Button
          key={f.value}
          variant={filter === f.value ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter(f.value)}
        >
          {f.label} ({getCount(f.value)})
        </Button>
      ))}
    </div>
  );
};
