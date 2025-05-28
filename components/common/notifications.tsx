import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,

  DialogOverlay,
  DialogPortal,
} from "@radix-ui/react-dialog";

import { Bell } from "lucide-react"; // Assuming you use lucide-react for icons
import { Button } from "../ui/button";


const notifications = [
  {
    id: 1,
    title: "New message from John",
    description: "Hey, are you available for a meeting tomorrow?",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Server status",
    description: "All systems operational.",
    time: "5 hours ago",
  },
  {
    id: 3,
    title: "Password Changed",
    description: "Your password was changed successfully.",
    time: "1 day ago",
  },
];

export default function NotificationsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" aria-label="Open notifications">
          <Bell />
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent
          className="fixed top-[50%] left-[50%] z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background p-6 shadow-lg focus:outline-none"
          aria-describedby="notification-dialog-description"
        >
          <DialogTitle className="text-lg font-semibold mb-4">
            Notifications
          </DialogTitle>

          {notifications.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No new notifications
            </p>
          ) : (
            <div className="max-h-60 space-y-4 overflow-y-auto">
              {notifications.map(({ id, title, description, time }) => (
                <div
                  key={id}
                  className="rounded-md border border-gray-200 p-4 hover:bg-primary/10 cursor-pointer transition"
                >
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                  <time
                    className="block mt-2 text-xs text-muted-foreground"
                    dateTime={new Date().toISOString()}
                  >
                    {time}
                  </time>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
