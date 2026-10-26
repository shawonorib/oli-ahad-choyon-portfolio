import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      'JavaScript / TypeScript',
      'Python',
      'Java',
      'C / C++',
      'SQL',
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'HTML5 & CSS3',
      'Responsive Design',
    ],
  },
  {
    category: 'Backend & Tools',
    skills: [
      'Node.js & Express',
      'PostgreSQL / MongoDB',
      'REST APIs',
      'Git & GitHub',
      'Linux & Docker basics',
    ],
  },
  {
    category: 'UI/UX Design',
    skills: [
      'Figma',
      'Wireframing & Prototyping',
      'Design Systems',
      'User Research',
      'Interaction Design',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 lg:gap-y-20">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <div className="flex items-baseline justify-between border-b border-gray-700 pb-3 mb-2">
                <span className="text-sm text-white tracking-widest uppercase">
                  {group.category}
                </span>
                <span className="text-xs text-gray-600 tracking-widest">
                  {String(groupIndex + 1).padStart(2, '0')}
                </span>
              </div>
              {group.skills.map((skill) => (
                <div key={skill} className="border-b border-gray-800 py-3">
                  <span className="text-base md:text-lg text-gray-300 font-light">
                    {skill}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
