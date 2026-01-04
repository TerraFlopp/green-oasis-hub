import { QrCode } from "lucide-react";

interface QRCodeDisplayProps {
  code: string;
  time: string;
}

const QRCodeDisplay = ({ code, time }: QRCodeDisplayProps) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex h-40 w-40 items-center justify-center rounded-lg border-2 border-dashed border-primary/30 bg-primary/5">
        <div className="text-center">
          <QrCode className="mx-auto h-16 w-16 text-primary" />
          <p className="mt-2 text-xs text-muted-foreground">QR Code</p>
        </div>
      </div>
      
      <div className="text-center">
        <p className="font-mono text-lg font-semibold text-primary">{code}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Créneau : {time}
        </p>
      </div>
      
      <p className="text-center text-xs text-muted-foreground">
        Présentez ce QR Code à l'entrée du conteneur
      </p>
    </div>
  );
};

export default QRCodeDisplay;