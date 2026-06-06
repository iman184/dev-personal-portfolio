import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "ماشاء الله، مشروع رائع ومتكامل! 👏\nالأمر الأكثر إعجابًا هو اهتمامك بجوانب الأمان مثل منع SQL Injection واستخدام Bcrypt، إضافة إلى نظام الصلاحيات. هذا يدل على نضج تقني حتى لو كنت لا تزال في مرحلة التعلم.",
    author: "Ali Bouthlidja",
    role: "System Analyst & Full-Stack Dev | UML, SRS, SDD, LaTeX, Vue.js, Laravel, MySQL",
    sourceUrl: "https://www.linkedin.com/in/ali-bouthlidja-409415394/",
    avatar: "",
  },
  {
    quote:
      "Amazing milestone , i hope you and the team continue to work on it after graduation and sell it as a complete product that can handle large scale operations for private schools and freelancers (teachers) , maybe even a user panel for parents to monitor their children's grades class progress as well as payment status .. etc",
    author: "Farouk Zemmouri",
    role: "Founder of @EL Fabrika",
    avatar: "",
    sourceUrl: "https://www.linkedin.com/",
  },
  {
    quote:
      "مشروع قوي بصراحة يعطيك الصحة\nخدمت على حاجة مشابهة من قبل، وفعلاً الجزء الأصعب مش الكود بحد ذاته بل التفكير في ال edge cases خاصة في إدارة الصلاحيات و السكيوريتي. \nعجبني التركيز تاعكم على الحماية و هذا الحزء لي تعرقلت فيه. \nبصح واش كان أكثر تحدي واجهتوه في backend؟\nعالعموم يعطيك الصحة.",
    author: "mohamed bouker",
    role: "Graphic Designer",
    avatar: "",
    sourceUrl: "https://www.linkedin.com/",
  },
  {
    quote: "Great job imen",
    author: "Raouf Akhrouf",
    role: "Full Stack Developer",
    avatar: "",
    sourceUrl: "https://www.linkedin.com/",
  },
];

function Avatar({ src, name }) {
  const initials = (name || "").split(" ").slice(0, 2).map((s) => s[0] || "").join("").toUpperCase();
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
      />
    );
  }

  return (
    <div className="relative w-14 h-14">
      <svg viewBox="0 0 100 100" className="w-14 h-14 rounded-full block">
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="url(#g1)" />
        <text x="50" y="57" textAnchor="middle" fontSize="40" fontFamily="Inter, sans-serif" fill="#fff" fontWeight="700">
          {initials || "?"}
        </text>
      </svg>
      <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">★</span>
    </div>
  );
}

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const isArabic = (text = "") => /[\u0600-\u06FF]/.test(text);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span className="font-serif italic font-normal text-foreground">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass relative p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              {/* LinkedIn badge */}
              <div className="absolute top-4 right-4">
                <div className="inline-flex items-center gap-2 bg-[#0A66C2] text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="3" fill="#fff" opacity="0.06" />
                    <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
                    <path d="M8 9H6V18H8V9ZM7 7.75C7.69 7.75 8.25 7.19 8.25 6.5C8.25 5.81 7.69 5.25 7 5.25C6.31 5.25 5.75 5.81 5.75 6.5C5.75 7.19 6.31 7.75 7 7.75Z" fill="white" />
                    <path d="M13 9C11.9 9 11 9.9 11 11V18H13V11C13 10.72 13.22 10.5 13.5 10.5C13.78 10.5 14 10.72 14 11V18H16V12.5C16 10.57 14.43 9 12.5 9H13Z" fill="white" />
                  </svg>
                  <span>{isArabic(testimonials[activeIdx].quote) ? "من LinkedIn" : "From LinkedIn"}</span>
                </div>
              </div>
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <Avatar src={testimonials[activeIdx].avatar} name={testimonials[activeIdx].author} />
                <div>
                  <div className="font-semibold">{testimonials[activeIdx].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Gratitude / Thanks block */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">With Gratitude</h3>
              <p className="text-muted-foreground mt-2">Thanks to my friends for the encouragement and late-night debugging help.</p>
              <p className="text-muted-foreground mt-2">Thanks to my family for believing in me and supporting every step.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
