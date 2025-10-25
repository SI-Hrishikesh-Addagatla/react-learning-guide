import { create } from "zustand";
export interface Notification {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
}

interface NotificationState {
    notifications: Notification[];
    addNotification: (notification: Notification) => void;
    dismissNotification: (id: string) => void;
    markAsRead: (id: string) => void;
    clearAll: () => void;
    getUnreadCount: () => number;
    filterNotificationsByStatus?: (status: string) => Notification[];
}

export const useNotificationStore = create<NotificationState>((set,get) => ({
    notifications: [],
    addNotification: (newNotification: Notification) => {
        set((state) => ({ notifications: [newNotification, ...state.notifications] }));
        setTimeout(() => {
            get().dismissNotification(newNotification.id);
        }, 30000);
    },
    dismissNotification: (id: string) => {
        set((state) => ({ notifications: state.notifications.filter((notification) => notification.id !== id) }));
    },
    markAsRead: (id: string) => {
        set((state) => ({
            notifications: state.notifications.map((notification) =>
                notification.id === id ? { ...notification, isRead: true } : notification
            ),
        }));
    },
    clearAll: () => {
        set({ notifications: [] });
    },
    getUnreadCount: () => {
        const currentNotifications = get().notifications;
        return currentNotifications.filter((notification) => !notification.isRead).length;
    },
    filterNotificationsByStatus: (status: string) => {
        const currentNotifications = get().notifications;
        switch(status){
            case 'all':
                return currentNotifications;
            case 'read':
                return currentNotifications.filter((notification) => notification.isRead);
            case 'unread':
                return currentNotifications.filter((notification) => !notification.isRead);
            default:
                return currentNotifications;
        }
    }
}));