import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import AffluenceGauge from "./AffluenceGauge";
import QRCodeDisplay from "./QRCodeDisplay";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { id: "1", time: "09h-10h", available: true },
  { id: "2", time: "10h-11h", available: true },
  { id: "3", time: "11h-12h", available: false },
  { id: "4", time: "14h-15h", available: true },
  { id: "5", time: "15h-16h", available: true },
  { id: "6", time: "16h-17h", available: false },
  { id: "7", time: "17h-18h", available: true },
];

const ReservationSystem = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [reservationCode, setReservationCode] = useState("");

  const handleConfirm = () => {
    if (!selectedSlot) {
      toast({
        title: "Sélectionnez un créneau",
        description: "Veuillez choisir un créneau horaire.",
        variant: "destructive",
      });
      return;
    }

    const code = `AGRO-${Date.now().toString(36).toUpperCase()}`;
    setReservationCode(code);
    setShowQRCode(true);
    
    toast({
      title: "Réservation confirmée !",
      description: `Votre créneau a été réservé avec succès.`,
    });
  };

  const selectedTime = timeSlots.find(s => s.id === selectedSlot)?.time;

  return (
    <div className="space-y-5 rounded-lg bg-card p-5 shadow-sm">
      <h3 className="font-display text-foreground">Réserver un créneau</h3>
      
      <AffluenceGauge current={12} max={20} />

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {timeSlots.map((slot) => (
          <Button
            key={slot.id}
            variant={selectedSlot === slot.id ? "default" : "outline"}
            size="sm"
            disabled={!slot.available}
            onClick={() => setSelectedSlot(slot.id)}
            className={`text-xs ${!slot.available ? "opacity-50" : ""}`}
          >
            {slot.time}
          </Button>
        ))}
      </div>

      <Button 
        className="w-full" 
        onClick={handleConfirm}
        disabled={!selectedSlot}
      >
        Confirmer la réservation
      </Button>

      <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center">Réservation confirmée</DialogTitle>
          </DialogHeader>
          <QRCodeDisplay 
            code={reservationCode} 
            time={selectedTime || ""} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReservationSystem;