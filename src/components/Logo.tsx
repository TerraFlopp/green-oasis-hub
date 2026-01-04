import { Leaf } from "lucide-react";

const Logo = ({ size = "default" }: { size?: "sm" | "default" | "lg" }) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    default: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const textSizeClasses = {
    sm: "text-lg",
    default: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-primary p-2">
        <Leaf className={`${sizeClasses[size]} text-primary-foreground`} />
      </div>
      <span className={`font-display ${textSizeClasses[size]} text-primary`}>
        AgroTech
      </span>
    </div>
  );
};

export default Logo;