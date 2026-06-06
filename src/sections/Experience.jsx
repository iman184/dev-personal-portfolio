
const learningSteps = [
  {
    step: 1,
    period: "2023",
    title: "HTML & CSS",
    subtitle: "Web Fundamentals",
    description: "Learned semantic HTML, responsive design, Flexbox, Grid, and modern CSS."
  },
  {
    step: 2,
    period: "2024",
    title: "JavaScript",
    subtitle: "DOM & Logic",
    description: "Studied ES6+, DOM manipulation, events, asynchronous JavaScript, and APIs."
  },
  {
    step: 3,
    period: "2024",
    title: "Frontend Projects",
    subtitle: "Practice & Problem Solving",
    description: "Built projects such as a Weather App, Chrome Extension, Recipe Finder, and other JavaScript applications."
  },
  {
    step: 4,
    period: "2025",
    title: "University Projects",
    subtitle: "PHP & MySQL",
    description: "Worked on database-driven applications using PHP, MySQL, authentication, and CRUD operations."
  },
  {
    step: 5,
    period: "2025",
    title: "React",
    subtitle: "Modern Frontend",
    description: "Learned components, hooks, state management, forms, and reusable UI development."
  },
  {
    step: 6,
    period: "2026",
    title: "TypeScript & Next.js",
    subtitle: "Professional Development",
    description: "Currently improving skills with TypeScript, Next.js, and modern development workflows."
  },
  {
    step: 7,
    period: "Future",
    title: "Full-Stack Engineer",
    subtitle: "Backend & Cloud",
    description: "Planning to deepen knowledge in backend development, cloud services, and scalable applications."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Learning Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Steps I followed to learn
            <span className="font-serif italic font-normal text-foreground"> development.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A structured path that guided my progression from fundamentals to shipping production apps.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {learningSteps.map((step, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 120}ms` }}>
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  <span className="absolute inset-0 flex items-center justify-center text-xs text-white">{step.step}</span>
                </div>

                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">{step.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
                    <p className="text-sm text-primary font-medium">{step.subtitle}</p>
                    <p className="text-sm text-muted-foreground mt-4">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
