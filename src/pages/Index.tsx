import { Link } from "react-router-dom";
import { PawPrint, Upload, Search, Leaf, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Search,
    title: "Explorer",
    description: "Découvrez les espèces sauvages qui peuplent nos forêts et nos montagnes.",
    link: "/species",
    cta: "Voir les espèces",
  },
  {
    icon: Upload,
    title: "Identifier",
    description: "Uploadez une photo d'empreinte et découvrez à quel animal elle appartient.",
    link: "/upload",
    cta: "Identifier une empreinte",
  },
  {
    icon: Leaf,
    title: "Découvrir",
    description: "Apprenez des faits fascinants sur chaque espèce : habitat, famille et anecdotes.",
    link: "/species",
    cta: "En savoir plus",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nature-mint/40 via-transparent to-nature-cream/30 pointer-events-none" />
        <div className="container relative py-24 md:py-36 flex flex-col items-center text-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 mb-8 opacity-0 animate-scale-in"
          >
            <PawPrint className="h-10 w-10 text-primary" />
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">WildLens</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Identifiez les animaux sauvages grâce à leurs empreintes.
            <br className="hidden sm:block" />
            <span className="italic">To know them is to love them.</span>
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button asChild size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link to="/upload">
                <Upload className="mr-2 h-5 w-5" />
                Identifier une empreinte
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold">
              <Link to="/species">
                Explorer les espèces
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Link
              key={f.title}
              to={f.link}
              className="group glass rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.5 + i * 0.12}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{f.description}</p>
              <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                {f.cta} <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
