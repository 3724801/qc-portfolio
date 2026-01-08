import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Quality Control (QC) Intern',
      company: 'Asgatech',
      period: 'Nov 2025 – Present',
      description: [
        'Performed quality control activities to ensure software products meet defined quality standards',
        'Executed manual test cases and documented defects with clear, structured reports',
        'Reviewed business and functional requirements to verify compliance with specifications',
        'Collaborated with developers and QA team to track defects and validate fixes',
      ],
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Software Tester & Business Analyst',
      company: 'Athar',
      period: 'Oct 2025 – Dec 2025',
      description: [
        'Conducted manual testing to identify functional, usability, and data-related issues',
        'Designed and executed test cases based on business and technical requirements',
        'Analyzed business needs and translated them into clear requirements and acceptance criteria',
        'Prepared test documentation and reports to support validation and stakeholder communication',
      ],
      color: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Web & Python Instructor',
      company: 'Programmers Elite School (PES)',
      period: 'Feb 2025 – Present',
      description: [
        'Teaching HTML, CSS, JavaScript, and Python to 10+ students',
        'Designed interactive learning modules using hands-on projects',
        'Providing mentorship and guidance to aspiring developers',
      ],
      color: 'from-blue-400 to-purple-500',
    },
    {
      title: 'Intern',
      company: 'Alstom Egypt',
      period: 'Jul 2024 – Aug 2024',
      description: [
        'Participated in testing and validation of railway systems',
        'Reviewed system requirements and technical documentation',
        'Supported railway station redesign by updating technical drawings using AutoCAD',
      ],
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`p-4 bg-gradient-to-br ${exp.color} rounded-lg`}>
                  <Briefcase size={32} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-cyan-400 text-lg">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
