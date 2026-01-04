import { Crown, Thermometer, Droplets, FlaskConical } from "lucide-react";
import Logo from "@/components/Logo";
import MaintenanceAlert from "@/components/MaintenanceAlert";
import HarvestGauge from "@/components/HarvestGauge";
import MonitoringCard from "@/components/MonitoringCard";
import ReservationSystem from "@/components/ReservationSystem";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Bienvenue, Thomas
            </h1>
            <div className="flex items-center gap-1.5">
              <Crown className="h-3.5 w-3.5 text-warning" />
              <span className="text-xs text-muted-foreground">Membre Premium</span>
            </div>
          </div>
          <Logo size="sm" />
        </div>
      </header>

      <main className="container space-y-5 pt-2">
        {/* Maintenance Alert */}
        <MaintenanceAlert 
          message="Note : Pensez à vérifier le niveau de nutriments de votre bac B4 lors de votre visite." 
        />

        {/* Harvest Gauge */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Mon Espace Végétal
          </h2>
          <HarvestGauge
            percentage={88}
            stage="Floraison avancée"
            countdown="3j 14h 22min"
            details="Croissance boostée par un apport optimal de CO2 ce matin"
          />
        </section>

        {/* Monitoring Cards */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            État de la Serre
          </h2>
          <div className="space-y-3">
            <MonitoringCard
              icon={Thermometer}
              label="Température"
              value="22.5"
              unit="°C"
            />
            <MonitoringCard
              icon={Droplets}
              label="Humidité"
              value="65"
              unit="%"
            />
            <MonitoringCard
              icon={FlaskConical}
              label="pH de l'eau"
              value="6.2"
              unit=""
              status={{ label: "Stable", variant: "success" }}
            />
          </div>
        </section>

        {/* Reservation System */}
        <section>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Réservation
          </h2>
          <ReservationSystem />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;