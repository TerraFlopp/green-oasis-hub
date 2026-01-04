import { Users } from "lucide-react";

interface AffluenceGaugeProps {
  current: number;
  max: number;
}

const AffluenceGauge = ({ current, max }: AffluenceGaugeProps) => {
  const percentage = (current / max) * 100;
  
  const getColor = () => {
    if (percentage < 50) return "bg-success";
    if (percentage < 80) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Affluence actuelle</span>
        </div>
        <span className="text-sm font-medium text-foreground">
          {current}/{max} membres
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div 
          className={`h-full rounded-full transition-all ${getColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default AffluenceGauge;