import { toast } from "sonner";

type NotificationType = "success" | "error" | "warning" | "info";

export const notification = (message: string, type: NotificationType) => {
  switch (type) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "warning":
      return toast.warning(message);
    case "info":
      return toast.info(message);
  }
}