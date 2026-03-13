import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Dna, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { speciesData } from "@/data/species";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SpeciesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const species = speciesData.find((s) => s.id === id);

  if (!species) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <p className="text-muted-foreground text-lg">Espèce introuvable.</p>
          <Button asChild variant="outline" className="mt-6 rounded-full">
            <Link to="/species">
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux espèces
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-16 md:py-24 max-w-2xl">
        <Button asChild variant="ghost" className="mb-8 -ml-2 rounded-full text-muted-foreground hover:text-foreground">
          <Link to="/species">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux espèces
          </Link>
        </Button>

        <div className="glass rounded-3xl p-8 md:p-12 opacity-0 animate-scale-in">
          <span className="text-6xl mb-6 block">{species.icon}</span>

          <h1 className="text-3xl md:text-4xl font-heading font-extrabold mb-1">{species.name}</h1>
          <p className="text-muted-foreground italic mb-6">{species.latinName}</p>

          <p className="text-foreground/80 leading-relaxed mb-8">{species.description}</p>

          <div className="space-y-4">
            <InfoRow icon={Dna} label="Famille" value={species.family} />
            <InfoRow icon={MapPin} label="Habitat" value={species.habitat} />
            <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <Badge variant="secondary" className="mb-2 text-xs">Fun Fact</Badge>
                <p className="text-sm text-foreground/80">{species.funFact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const InfoRow = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
      <Icon className="h-4 w-4 text-secondary-foreground" />
    </div>
    <div>
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
      <p className="text-sm text-foreground/80">{value}</p>
    </div>
  </div>
);

export default SpeciesDetail;
