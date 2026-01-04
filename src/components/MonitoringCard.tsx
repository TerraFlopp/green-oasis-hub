import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MonitoringCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  unit: string;
  status?: {
    label: string;
    variant: "default" | "success" | "warning";
  };
}

const MonitoringCard = ({ icon: Icon, label, value, unit, status }: MonitoringCardProps) => {
  const statusColors = {
    default: "bg-muted text-muted-foreground",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning-foreground border-warning/20",
  };

  return (
    <div className="flex items-center gap-4 rounded-lg bg-card p-4 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-foreground">
            {value}
            <span className="text-sm font-normal text-muted-foreground">{unit}</span>
          </span>
          {status && (
            <Badge variant="outline" className={statusColors[status.variant]}>
              {status.label}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonitoringCard;