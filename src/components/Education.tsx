import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* BSc CSE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="/education-cs.jpg"
                alt="Computer Science studies"
                className="w-full h-auto grayscale"
                loading="lazy"
                width={1200}
                height={800}
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                DHAKA / BANGLADESH
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  B.Sc. in Computer Science & Engineering
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Four years of algorithms, data structures, databases,
                  operating systems, and software engineering — capped with
                  a full-stack capstone project. This degree gave me the
                  engineering fundamentals I use every day, and it's where
                  my passion for building interfaces began.
                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                  Completed — Open for opportunities
                </p>
              </div>
            </motion.div>
          </div>

          {/* UI/UX */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  UI/UX Design — Focused Self-Study
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Alongside my degree, I've pursued design through online
                  courses, hands-on Figma practice, and redesign case
                  studies. I study design systems, accessibility, and
                  interaction patterns — because good engineering without
                  good design is only half a product.
                </p>
                <p className="text-sm text-gray-500 tracking-widest uppercase">
                  Ongoing — Always learning
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Design sketches and notes"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                DESIGN SYSTEMS & PROTOTYPING
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
