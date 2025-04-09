import { createContext, useContext, useState } from "react";
import { useCallback } from "../@lib";
import type { Notification, NotificationContextType } from "../types";

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = () => {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotification must be used within NotificationProvider");
  return ctx;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((message: string, type: Notification["type"]) => {
    const newNotification = { id: Date.now(), message, type };
    setNotifications((prev: Notification[]) => [...prev, newNotification]);
  }, [setNotifications]);

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev: Notification[]) => prev.filter((n) => n.id !== id));
  }, [setNotifications]);

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      removeNotification
      }}>
      {children}
    </NotificationContext.Provider>
  );
};
