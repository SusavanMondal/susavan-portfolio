import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-card to-card/50 relative mt-12">
      <div className="container mx-auto max-w-5xl">
        {/* Brand Section */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Susavan Mondal
          </h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Full Stack Developer passionate about creating innovative web
            solutions
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Susavan Mondal. All rights reserved.
          </p>
          <a
            href="#home"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:-translate-y-1 duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
