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
        const currentNotifications = get().notifications;
        currentNotifications.unshift(newNotification);
        set({ notifications: currentNotifications });
    },
    dismissNotification: (id: string) => {
        const currentNotifications = get().notifications;
        currentNotifications.filter((notification)=> notification.id !== id);
        set({ notifications: currentNotifications });
    },
    markAsRead: (id: string) => {
        const currentNotifications = get().notifications;
        currentNotifications.map((notification) => {
            if(notification.id === id){
                notification.isRead = true;
            }
        });
        set({ notifications: currentNotifications });
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