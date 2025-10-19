import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TeamMember, useCollaborationStore } from '@/stores/collaborationStore';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  const { selectedMemberId, selectMember, getMemberTaskCount } = useCollaborationStore();
  const taskCount = getMemberTaskCount(member.id);
  const isSelected = selectedMemberId === member.id;

  const handleClick = () => {
    selectMember(isSelected ? null : member.id);
  };

  return (
    <Card
      className={`p-4 cursor-pointer transition-all duration-200 ${
        isSelected ? 'border-primary shadow-lg' : 'hover:border-primary/50'
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        <div className="text-4xl">{member.avatar}</div>
        <div className="flex-1">
          <h3 className="font-semibold">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
        <Badge variant={taskCount > 0 ? 'default' : 'secondary'}>
          {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
        </Badge>
      </div>
    </Card>
  );
};
