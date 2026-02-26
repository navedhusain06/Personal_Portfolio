import { motion } from 'framer-motion'
import { HiArrowRight, HiMail } from 'react-icons/hi'

const Hero = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary">Naved</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">
              Odoo Developer | Emerging Techno-Functional Consultant
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Specializing in scalable ERP solutions, custom Odoo modules, and bridging technical development with business needs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => handleScroll('contact')}
              className="group px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <HiMail className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll('projects')}
              className="group px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
