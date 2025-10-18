import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  avatar: string;
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
}

interface ProfileState {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  resetProfile: () => void;
}

const defaultProfile: UserProfile = {
  name: '',
  email: '',
  bio: '',
  avatar: '',
  theme: 'system',
  notifications: true,
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      updateProfile: (updates) =>
        set((state) => ({
          profile: { ...state.profile, ...updates },
        })),
      resetProfile: () => set({ profile: defaultProfile }),
    }),
    {
      name: 'user-profile',
    }
  )
);
