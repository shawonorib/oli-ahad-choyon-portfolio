import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Choyon</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Writing code on a laptop"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              B.SC. IN COMPUTER SCIENCE & ENGINEERING
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm Oli Ahad Choyon, a software engineer from Dhaka, Bangladesh.
              I recently completed my Bachelor's degree in Computer Science
              & Engineering, where I fell in love with two things: writing
              clean, well-structured code — and designing interfaces that
              feel effortless to use.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "CODE IS HOW I<br />
            <span className="text-white underline underline-offset-8">THINK</span>, DESIGN IS<br />
            HOW I CARE ABOUT<br />
            THE PEOPLE USING IT."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            ENGINEERING × UI/UX
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Beyond the degree, I've invested deeply in UI/UX design —
              wireframing, prototyping in Figma, studying design systems
              and human-computer interaction. I enjoy living on the
              bridge between engineering and design, where products
              actually get built and refined.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="UI/UX design wireframes and sketches"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              UI/UX — WIREFRAMING & PROTOTYPING
            </p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Collaborating on a project"
              className="w-full h-auto grayscale"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              BUILDING PROJECTS — DHAKA / BANGLADESH
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Right now I'm sharpening my skills through personal and
              collaborative projects — full-stack web apps, APIs, and
              UI/UX case studies. I'm actively looking for new
              opportunities and teams where I can contribute, grow, and
              build software that matters. <span className="text-white">Open for work — remote or on-site.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
