import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";

const projects = [
  {
    title: "GitMen",
    description: "GitHub search app for finding users, viewing profiles, and browsing public repositories.",
    image: "/projects/GitMen.png",
    tags: ["React", "Axios", "React Router"],
    link: "https://github-search-project1.netlify.app",
    github: "https://github.com/iman184/github-project",
  },
  {
    title: "ISILC Hub",
    description: "Student hub for ISILC resources, announcements, and project sharing.",
    image: "/projects/isilc_hub.png",
    tags: ["Next.js", "Tailwind CSS", "Dashboard"],
    link: "https://isilc-hub.netlify.app",
    github: "https://github.com/iman184/isilc-hub",
  },
  {
    title: "Job Tracker",
    description: "Job application tracker with search, filters, sorting, status columns, and localStorage persistence.",
    image: "/projects/job-tracker.png",
    tags: ["React", "TypeScript", "Vite"],
    link: "https://job-tracker-dashboard.netlify.app",
    github: "https://github.com/iman184/Job-tracker",
  },
  {
    title: "Word-Solver ",
    description: "Responsive image gallery showcase with a carousel, thumbnails, and clean visual cards.",
    images: [
      "/projects/joue (1).PNG",
      "/projects/joue (2).PNG",
      "/projects/joue (3).PNG",
      "/projects/joue (4).PNG",
    ],
    tags: ["Gallery", "Carousel", "UI Design"],
    link: "#",
    github: "#",
  },
  {
    title: "Marriage Planner",
    description: "Wedding landing page with event sections, couple stories, gallery, and contact form.",
    image: "/projects/marriage.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    link: "https://wedding01.netlify.app",
    github: "https://github.com/iman184/Wedding",
  },
  {
    title: "Restaurant",
    description: "Responsive restaurant landing page with menu sections, navigation, and smooth JavaScript interactions.",
    image: "/projects/restaurant.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://wonderful-archimedes-06a6f6.netlify.app",
    github: "https://github.com/iman184/restaurant-food",
  },
  {
    title: "Scholar Management",
    description: "Student management dashboard for modules, grades, and academic tracking.",
    images: [
      "/projects/scholar_management.png",
      "/projects/dashboard.png",
      "/projects/add_module.png",
      "/projects/saisie_lanote.png",
    ],
    tags: ["Dashboard", "Grades", "Students"],
    link: "#",
    github: "#",
  },
];

function ProjectCard({ project, index }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = project.images || (project.image ? [project.image] : []);

  const prev = (e) => {
    e.preventDefault();
    setImgIndex((s) => (s - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.preventDefault();
    setImgIndex((s) => (s + 1) % images.length);
  };

  return (
    <div
      className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt={project.title}
            className="w-full h-full block object-contain p-6 bg-surface"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">No image</div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

        {/* Navigation */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={prev} className="p-3 rounded-full glass">
              ‹
            </button>
            <button onClick={next} className="p-3 rounded-full glass">
              ›
            </button>
          </div>
        )}

        {/* Overlay Links */}
        <div className="absolute bottom-3 left-3 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex items-center gap-2">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setImgIndex(i);
                }}
                className={`w-12 h-8 rounded overflow-hidden border ${i === imgIndex ? "ring-2 ring-primary" : "border-border/30"}`}
              >
                <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover block" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <p className="text-muted-foreground text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag, tagIdx) => (
            <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredOrder = ["Scholar Management", "ISILC Hub"];
  const featuredSet = new Set(featuredOrder);
  const featuredProjects = featuredOrder.map((title) => projects.find((p) => p.title === title)).filter(Boolean);
  const visibleProjects = showAll
    ? [...featuredProjects, ...projects.filter((p) => !featuredSet.has(p.title))]
    : featuredProjects;
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <ProjectCard project={project} key={idx} index={idx} />
          ))}
        </div>

        {/* View All / Show Less CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={() => setShowAll((s) => !s)} aria-pressed={showAll}>
            {showAll ? "Show Less" : "View All Projects"}
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
