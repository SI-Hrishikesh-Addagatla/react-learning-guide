import { Notification } from "./notificationStore";

export const notifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Profile Updated',
    message: 'Your profile was updated successfully',
    isRead: false,
    createdAt: new Date(Date.now() - 2 * 60 * 1000) // 2 minutes ago
  },
  {
    id: '2',
    type: 'error',
    title: 'Save Failed',
    message: 'Failed to save changes. Please try again',
    isRead: false,
    createdAt: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
  },
  {
    id: '3',
    type: 'warning',
    title: 'Session Expiring',
    message: 'Your session will expire in 5 minutes',
    isRead: true,
    createdAt: new Date(Date.now() - 15 * 60 * 1000) // 15 minutes ago
  },
  {
    id: '4',
    type: 'info',
    title: 'New Feature Available',
    message: 'Check out our new notification center',
    isRead: true,
    createdAt: new Date(Date.now() - 30 * 60 * 1000) // 30 minutes ago
  },
];