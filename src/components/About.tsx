import { Award, BookOpen, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a detail-oriented Junior Software Tester with a strong background in Computer Science
              and practical experience in software testing and Quality Assurance processes.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in software testing began during my internship at Alstom Egypt, where I worked
              on testing and validation of railway systems. This experience solidified my passion for
              ensuring software quality and reliability.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I'm pursuing ISTQB Foundation Level certification and actively teaching web
              development and Python, which helps me stay sharp and share knowledge with the next
              generation of developers.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Target className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Focus</h3>
                  <p className="text-gray-400">
                    Manual testing, test case design, bug reporting, and defect tracking with
                    a growing expertise in automation testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Award className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Achievement</h3>
                  <p className="text-gray-400">
                    Participated in testing railway systems at Alstom Egypt, contributing to
                    critical infrastructure validation and verification processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <BookOpen className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-400">
                    B.Sc. in Computer Science from Pharos University in Alexandria (PUA),
                    graduating in 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
