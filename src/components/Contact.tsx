import { motion } from "framer-motion";

const infoRows = [
  { label: "LOCATION", value: "DHAKA, BANGLADESH" },
  { label: "AVAILABILITY", value: "REMOTE / ON-SITE" },
  { label: "FOCUS", value: "SOFTWARE ENGINEERING & UI/UX" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            Contact
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Let's build
          <br />
          something
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-12 lg:mb-16"
        />

        {/* Open for work banner */}
        <motion.div {...fadeInUp} className="mb-12 lg:mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-3 border border-gray-700 px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span className="text-xs text-white tracking-widest uppercase">
              Open for work — actively looking for opportunities
            </span>
          </div>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            I'M LOOKING FOR
            <br />
            JUNIOR SOFTWARE ENGINEER
            <br />
            ROLES & UI/UX WORK
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            INTERNSHIPS, FULL-TIME ROLES, OR FREELANCE PROJECTS — ALL WELCOME
          </p>
        </motion.div>

        {/* Info Rows */}
        <div className="space-y-0 max-w-2xl">
          {infoRows.map((row, index) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 px-4 -mx-4"
            >
              <span className="text-sm text-gray-500 tracking-widest">
                {row.label}
              </span>
              <span className="text-sm text-gray-300 tracking-widest">
                {row.value}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Direct Contact */}
        <motion.div
          {...fadeInUp}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800"
        >
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Reach me directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16">
            <a
              href="mailto:oiahadchoyon@gmail.com"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              oiahadchoyon@gmail.com
            </a>
            <a
              href="https://github.com/oiahadchoyon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/oiahadchoyon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>

          {/* CV Download */}
          <div className="mt-10">
            <a
              href="/oli ahad choyon resume.pdf"
              download="oli-ahad-choyon-resume.pdf"
              className="inline-flex items-center gap-3 border border-gray-700 rounded-full px-8 py-4 text-sm text-white tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Download Resume ↓
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Oli Ahad Choyon. All rights reserved.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs text-gray-500 hover:text-white transition-colors tracking-widest uppercase"
            >
              Contact ↗
            </a>
          </div>
          <p className="text-xs text-gray-600">Dhaka, Bangladesh</p>
        </motion.footer>
      </div>
    </section>
  );
}
