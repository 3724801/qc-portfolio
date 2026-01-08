import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-5xl font-bold">
              MA
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mahytab Adel
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-300 mb-6 animate-slide-up-delay-1">
            Software Tester & Business Analyst
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up-delay-2">
Detail-oriented Junior Software Tester and Quality Control professional with hands-on experience in manual testing, test case design, defect tracking, and ensuring software quality across real-world projects.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12 animate-slide-up-delay-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mahyadel177@gmail.com"
              aria-label="Send email"
              title="Email"
              className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
            title="Scroll down"
            className="animate-bounce-slow"
          >
            <ChevronDown size={40} className="text-cyan-400" />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
