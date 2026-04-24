import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="text-center">

          {/* Avatar */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-5xl font-bold shadow-lg">
              MA
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mahytab Adel
            </span>
          </h1>

          {/* Role */}
          <p className="text-2xl sm:text-3xl text-gray-300 mb-4 animate-slide-up-delay-1">
            QA Engineer | Software Tester | Business Analyst
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up-delay-2">
            I ensure software quality through structured testing, defect tracking, and requirement validation across real-world systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up-delay-3">

            {/* GitHub */}
            <a
              href="https://github.com/3724801"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center gap-2 px-5 py-3 bg-slate-800 rounded-lg hover:bg-cyan-500 transition-transform hover:scale-105"
            >
              <Github size={18} /> GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mahytab-a-62b886229/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 px-5 py-3 bg-slate-800 rounded-lg hover:bg-cyan-500 transition-transform hover:scale-105"
            >
              <Linkedin size={18} /> LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:mahyadel177@gmail.com"
              aria-label="Send email"
              className="flex items-center gap-2 px-5 py-3 bg-slate-800 rounded-lg hover:bg-cyan-500 transition-transform hover:scale-105"
            >
              <Mail size={18} /> Email
            </a>

          </div>

          {/* Scroll Down */}
          <button
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
            className="animate-bounce-slow"
          >
            <ChevronDown size={40} className="text-cyan-400" />
          </button>

        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}