import GradientText from '@/components/GradientText';

export default function FAQHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
        <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
          Frequently Asked{' '}
          <GradientText>Questions</GradientText>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Get answers about joining DSEC, working on real projects, attending workshops,
          and building your software portfolio at Deakin University Burwood campus.
        </p>
      </div>
    </section>
  );
}
