import { Bug, Code, Database, Layers, MessageSquare, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Testing & QA',
      icon: Bug,
      color: 'from-red-400 to-pink-500',
      skills: [
        'Manual Testing',
        'Test Case Design',
        'Bug Reporting',
        'Validation & Verification',
        'Performance Testing',
        'Defect Tracking',
      ],
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        'Dart',
        'JavaScript',
        'Python',
        'Java',
        'C++',
        'C#',
        'TypeScript',
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      color: 'from-blue-400 to-purple-500',
      skills: [
        'Flutter',
        'React',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-green-400 to-emerald-500',
      skills: [
        'GitHub',
        'Firebase',
        'Figma',
        'Chrome DevTools',
        'AutoCAD',
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-orange-400 to-red-500',
      skills: ['MySQL'],
    },
    {
      title: 'Soft Skills',
      icon: MessageSquare,
      color: 'from-purple-400 to-pink-500',
      skills: [
        'Communication',
        'Teamwork & Collaboration',
        'Problem-Solving',
        'Time Management',
        'Adaptability',
        'Creativity',
        'Leadership & Mentoring',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
