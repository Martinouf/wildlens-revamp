import { PawPrint, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card/50 backdrop-blur-sm">
    <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <PawPrint className="h-4 w-4" />
        <span className="text-sm font-heading font-semibold">WILDLENS</span>
      </div>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Fait avec <Heart className="h-3 w-3 text-destructive fill-destructive" /> pour la faune sauvage
      </p>
    </div>
  </footer>
);

export default Footer;
