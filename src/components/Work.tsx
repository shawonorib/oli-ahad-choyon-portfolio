import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce Platform',
    type: 'Full-Stack Web App',
    description: 'A complete online store with product catalog, cart, checkout flow, and an admin dashboard for inventory and order management. Built with authentication, role-based access, and payment-ready architecture.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    type: 'Web Application',
    description: 'A Kanban-style productivity app with drag-and-drop boards, deadlines, labels, and team collaboration. Focused on a clean, distraction-free UI designed first in Figma.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Real-Time Chat Application',
    type: 'Full-Stack Web App',
    description: 'Instant messaging with rooms, online presence indicators, and message history. Built on WebSockets with a React front end and a Node.js backend.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'University Portal',
    type: 'Academic Project',
    description: 'A student information portal for course enrollment, grades, and schedules — my CSE capstone project. Includes an admin panel for faculty and a responsive student dashboard.',
    tech: ['Java', 'MySQL', 'Figma'],
    github: '#',
  },
  {
    title: 'UI/UX Case Studies',
    type: 'Design Portfolio',
    description: 'A collection of end-to-end design case studies — research, wireframes, prototypes, and final interfaces — exploring usability problems in everyday apps and redesigning them.',
    tech: ['Figma', 'Prototyping', 'User Research'],
    live: '#',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Selected Projects</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Type */}
                <div className="lg:col-span-5">
                  <p className="text-xs text-gray-600 tracking-widest uppercase mb-2">
                    {project.type}
                  </p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column - Description & Tech */}
                <div className="lg:col-span-7">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs text-gray-400 border border-gray-700 rounded-full hover:border-gray-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* GitHub CTA */}
        <motion.div
          {...fadeInUp}
          className="mt-12 lg:mt-16"
        >
          <a
            href="https://github.com/oiahadchoyon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gray-700 rounded-full px-6 py-3 text-sm text-gray-300 tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors"
          >
            More on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
