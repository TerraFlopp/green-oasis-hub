import { Bell } from "lucide-react";

interface MaintenanceAlertProps {
  message: string;
}

const MaintenanceAlert = ({ message }: MaintenanceAlertProps) => {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-warning/10 p-4">
      <Bell className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
      <p className="text-sm text-warning-foreground">{message}</p>
    </div>
  );
};

export default MaintenanceAlert;