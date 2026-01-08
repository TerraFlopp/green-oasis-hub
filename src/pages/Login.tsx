import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/Logo";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!identifier || !password) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    // Sauvegarde du nom pour le Dashboard avant la redirection
    localStorage.setItem("user_name", identifier);

    // Simulated login
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="flex flex-col items-center gap-4">
          <Logo size="lg" />
          <p className="text-center text-muted-foreground">
            Ensemble, faisons pousser le futur 🌱
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="identifier">Identifiant Membre</Label>
            <Input
              id="identifier"
              type="text"
              placeholder="Votre identifiant"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="bg-card"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-card"
            />
            <p className="text-xs text-muted-foreground">
              Entrez n'importe quel mot de passe
            </p>
          </div>

          <Button type="submit" className="w-full">
            Se connecter
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
