import { Smartphone, Building2, Bug } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Athar HR Mobile Application',
      tech: 'Mobile Application',
      description:
        'HR mobile application designed to manage employee data, attendance, leave requests, and internal HR processes.',
      features: [
        'Employee profile and data management',
        'Attendance and leave management',
        'Role-based access control',
        'Notifications and approval workflows',
      ],
      icon: Smartphone,
      gradient: 'from-cyan-400 to-blue-500',
      role: 'Quality Control (QC)',
      testCases: '≈120 Test Cases',
      bugs: '37 Bugs Reported',
      responsibilities: [
        'Reviewed functional requirements to ensure alignment with business needs',
        'Executed manual test cases for HR modules and workflows',
        'Reported 37 defects with clear documentation and reproduction steps',
        'Verified fixes and performed regression testing',
        'Tracked and managed bugs using GitHub Issues',
      ],
    },
    {
      title: 'WAFI – Saudi Real Estate Platform',
      tech: 'Web Application',
      description:
        'Saudi real estate platform supporting property listing, management, and compliance with WAFI regulations.',
      features: [
        'Property listing and management',
        'User and admin dashboards',
        'Compliance and validation workflows',
        'Reporting and data accuracy checks',
      ],
      icon: Building2,
      gradient: 'from-orange-400 to-red-500',
      role: 'Quality Control (QC)',
      testCases: '≈130 Test Cases',
      bugs: '52 Bugs Reported',
      responsibilities: [
        'Reviewed business and functional requirements for real estate workflows',
        'Executed manual test cases covering core platform features',
        'Reported 52 defects including functional, validation, and UI issues',
        'Verified fixes and ensured system compliance with quality standards',
        'Logged and tracked defects using TFS (Azure DevOps)',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Software Testing Projects
          </span>
        </h2>

        <div className="grid gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${project.gradient} rounded-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-cyan-400 font-medium">{project.tech}</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Role: {project.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-6">{project.description}</p>

                  {/* QC Metrics */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                      <p className="text-sm text-gray-400">Test Coverage</p>
                      <p className="text-xl font-semibold text-cyan-400">
                        {project.testCases}
                      </p>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-600 flex items-center gap-3">
                      <Bug className="text-red-400" />
                      <div>
                        <p className="text-sm text-gray-400">Defects Found</p>
                        <p className="text-xl font-semibold text-red-400">
                          {project.bugs}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase mb-3">
                      QC Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                      Features Reviewed
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-orange-400 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
