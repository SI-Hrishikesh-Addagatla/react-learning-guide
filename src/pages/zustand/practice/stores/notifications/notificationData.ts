import { Notification } from "./notificationStore";

// Use a function to create fresh notifications with unique IDs
export const createNotification = (type: 'success' | 'error' | 'warning' | 'info'): Notification => {
  const templates = {
    success: {
      title: 'Profile Updated',
      message: 'Your profile was updated successfully',
    },
    error: {
      title: 'Save Failed',
      message: 'Failed to save changes. Please try again',
    },
    warning: {
      title: 'Session Expiring',
      message: 'Your session will expire in 5 minutes',
    },
    info: {
      title: 'New Feature Available',
      message: 'Check out our new notification center',
    },
  };

  return {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type,
    title: templates[type].title,
    message: templates[type].message,
    isRead: false,
    createdAt: new Date(),
  };
};