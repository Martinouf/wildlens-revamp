import { useState, useCallback } from "react";
import { Upload as UploadIcon, Image, X } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(f);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      const f = e.dataTransfer.files[0];
      if (f && f.type.startsWith("image/")) handleFile(f);
    },
    [handleFile]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0];
      if (f) handleFile(f);
    },
    [handleFile]
  );

  const clear = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <Layout>
      <section className="container py-16 md:py-24 max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
            <span className="text-gradient">Identifier</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Uploadez une photo d'empreinte animale pour l'identifier.
          </p>
        </div>

        {!preview ? (
          <label
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            className={cn(
              "glass rounded-3xl border-2 border-dashed cursor-pointer flex flex-col items-center justify-center py-20 px-8 transition-all duration-300",
              dragActive
                ? "border-primary bg-primary/5 scale-[1.02]"
                : "border-border hover:border-primary/50 hover:bg-primary/5"
            )}
          >
            <input type="file" accept="image/*" onChange={handleChange} className="sr-only" />
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
              <UploadIcon className="h-8 w-8 text-primary" />
            </div>
            <p className="text-foreground font-heading font-semibold text-lg mb-2">
              Glissez-déposez votre image ici
            </p>
            <p className="text-muted-foreground text-sm">
              ou <span className="text-primary font-semibold underline underline-offset-4">parcourir vos fichiers</span>
            </p>
          </label>
        ) : (
          <div className="glass rounded-3xl p-6 opacity-0 animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden mb-6">
              <img src={preview} alt="Preview" className="w-full max-h-80 object-contain bg-muted rounded-2xl" />
              <button
                onClick={clear}
                className="absolute top-3 right-3 h-8 w-8 rounded-full bg-foreground/70 text-background flex items-center justify-center hover:bg-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6 text-sm text-muted-foreground">
              <Image className="h-4 w-4" />
              <span className="truncate">{file?.name}</span>
            </div>

            <Button className="w-full rounded-full text-base font-semibold h-12 shadow-lg shadow-primary/20">
              <UploadIcon className="mr-2 h-5 w-5" />
              Analyser l'empreinte
            </Button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Upload;
