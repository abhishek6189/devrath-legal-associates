import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, hsl(var(--accent) / 0.05) 40px, hsl(var(--accent) / 0.05) 80px)"
        }} />
      </div>
      <div className="container relative text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">{title}</h1>
        <p className="text-primary-foreground/60 text-sm uppercase tracking-wider">
          Home / {breadcrumb}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
