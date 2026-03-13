import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { speciesData } from "@/data/species";

const Species = () => {
  return (
    <Layout>
      <section className="container py-16 md:py-24">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
            <span className="text-gradient">Nos Espèces</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Explorez la faune sauvage et découvrez chaque espèce en détail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {speciesData.map((species, i) => (
            <Link
              key={species.id}
              to={`/species/${species.id}`}
              className="group glass rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <span className="text-4xl mb-4 block">{species.icon}</span>
              <h2 className="text-lg font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                {species.name}
              </h2>
              <p className="text-xs text-muted-foreground italic mb-3">{species.latinName}</p>
              <span className="inline-flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Découvrir <ArrowRight className="h-3 w-3 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Species;
