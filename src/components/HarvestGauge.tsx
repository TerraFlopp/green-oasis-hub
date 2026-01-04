import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HarvestGaugeProps {
  percentage: number;
  stage: string;
  countdown: string;
  details: string;
}

const HarvestGauge = ({ percentage, stage, countdown, details }: HarvestGaugeProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getGaugeColor = (value: number) => {
    if (value < 30) return "bg-destructive";
    if (value < 70) return "bg-warning";
    return "bg-success";
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="cursor-pointer rounded-lg bg-card p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-foreground">Progression de la récolte</h3>
              <span className="text-2xl font-bold text-primary">{percentage}%</span>
            </div>
            
            <div className="mb-4 h-3 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${getGaugeColor(percentage)}`}
                style={{ 
                  width: animated ? `${percentage}%` : "0%",
                }}
              />
            </div>

            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">
                Stade actuel : <span className="font-medium text-foreground">{stage}</span>
              </p>
              <p className="text-muted-foreground">
                Récolte optimale dans : <span className="font-medium text-foreground">{countdown}</span>
              </p>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <p className="text-sm">{details}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HarvestGauge;