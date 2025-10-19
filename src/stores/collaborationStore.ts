import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  assignedTo: string;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  tasksCount: number;
}

interface CollaborationState {
  tasks: Task[];
  teamMembers: TeamMember[];
  selectedMemberId: string | null;
  filter: 'all' | 'todo' | 'in-progress' | 'done';
  
  // Task actions
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTaskStatus: (taskId: string, status: Task['status']) => void;
  deleteTask: (taskId: string) => void;
  assignTask: (taskId: string, memberId: string) => void;
  
  // Team member actions
  addTeamMember: (member: Omit<TeamMember, 'id' | 'tasksCount'>) => void;
  selectMember: (memberId: string | null) => void;
  
  // Filter actions
  setFilter: (filter: CollaborationState['filter']) => void;
  
  // Computed values
  getTasksByStatus: (status: Task['status']) => Task[];
  getTasksByMember: (memberId: string) => Task[];
  getMemberTaskCount: (memberId: string) => number;
}

export const useCollaborationStore = create<CollaborationState>()(
  devtools(
    (set, get) => ({
      tasks: [
        {
          id: '1',
          title: 'Design new landing page',
          status: 'in-progress',
          assignedTo: 'john',
          createdAt: new Date('2024-01-15'),
          priority: 'high',
        },
        {
          id: '2',
          title: 'Implement authentication',
          status: 'todo',
          assignedTo: 'sarah',
          createdAt: new Date('2024-01-16'),
          priority: 'high',
        },
        {
          id: '3',
          title: 'Write documentation',
          status: 'done',
          assignedTo: 'mike',
          createdAt: new Date('2024-01-14'),
          priority: 'medium',
        },
        {
          id: '4',
          title: 'Setup CI/CD pipeline',
          status: 'in-progress',
          assignedTo: 'john',
          createdAt: new Date('2024-01-17'),
          priority: 'medium',
        },
      ],
      teamMembers: [
        { id: 'john', name: 'John Doe', role: 'Frontend Developer', avatar: '👨‍💻', tasksCount: 0 },
        { id: 'sarah', name: 'Sarah Smith', role: 'Backend Developer', avatar: '👩‍💻', tasksCount: 0 },
        { id: 'mike', name: 'Mike Johnson', role: 'Tech Writer', avatar: '📝', tasksCount: 0 },
      ],
      selectedMemberId: null,
      filter: 'all',

      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: crypto.randomUUID(),
              createdAt: new Date(),
            },
          ],
        })),

      updateTaskStatus: (taskId, status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, status } : task
          ),
        })),

      deleteTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),

      assignTask: (taskId, memberId) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, assignedTo: memberId } : task
          ),
        })),

      addTeamMember: (member) =>
        set((state) => ({
          teamMembers: [
            ...state.teamMembers,
            {
              ...member,
              id: crypto.randomUUID(),
              tasksCount: 0,
            },
          ],
        })),

      selectMember: (memberId) =>
        set({ selectedMemberId: memberId }),

      setFilter: (filter) =>
        set({ filter }),

      getTasksByStatus: (status) => {
        const state = get();
        return state.tasks.filter((task) => task.status === status);
      },

      getTasksByMember: (memberId) => {
        const state = get();
        return state.tasks.filter((task) => task.assignedTo === memberId);
      },

      getMemberTaskCount: (memberId) => {
        const state = get();
        return state.tasks.filter((task) => task.assignedTo === memberId).length;
      },
    }),
    { name: 'collaboration-store' }
  )
);
