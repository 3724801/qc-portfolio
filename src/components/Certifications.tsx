import { Award, Calendar, CheckCircle, Clock } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'ISTQB Foundation Level Certification',
      organization: 'ISTQB',
      status: 'completed',
      date: '2025',
      icon: CheckCircle,
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'ISTQB Mobile Application Testing Exam',
      organization: 'ISTQB',
      status: 'scheduled',
      date: 'February 2026',
      icon: Clock,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Full Stack Development Training',
      organization: 'Amit Learning',
      status: 'completed',
      date: 'Jul 2023 – Aug 2023',
      icon: CheckCircle,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Web Development Challenger Track',
      organization: 'FWD, ITIDA, Udacity',
      status: 'completed',
      date: 'Feb 2022',
      icon: CheckCircle,
      color: 'from-blue-400 to-purple-500',
    },
    {
      title: 'Coach Academy - Problem Solving Level 1',
      organization: 'Coach Academy',
      status: 'completed',
      date: 'Summer 2022',
      icon: CheckCircle,
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Courses & Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg flex-shrink-0`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{cert.title}</h3>

                      {cert.status === 'scheduled' && (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/30">
                          Upcoming
                        </span>
                      )}

                      {cert.status === 'completed' && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                          Completed
                        </span>
                      )}
                    </div>

                    <p className="text-cyan-400 mb-3">{cert.organization}</p>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
            <Award size={24} className="text-cyan-400" />
            <p className="text-gray-300">
              <span className="font-semibold text-white">
                ISTQB Certified
              </span>{' '}
              - Foundation Level
              <span className="block text-sm text-gray-400">
                Preparing for ISTQB Mobile Application Testing Exam (Feb 2026)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
