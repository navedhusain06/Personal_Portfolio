import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiOdoo, SiPython, SiFastapi, SiPostgresql, SiJavascript } from 'react-icons/si'
import { HiCode, HiCog } from 'react-icons/hi'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'Odoo Development', icon: SiOdoo, color: 'text-purple-600' },
    { name: 'Python Backend', icon: SiPython, color: 'text-blue-600' },
    { name: 'ERP Customization', icon: HiCog, color: 'text-green-600' },
    { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'REST APIs', icon: HiCode, color: 'text-orange-600' },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <skill.icon className={`text-5xl mb-4 ${skill.color}`} />
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Additional Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Custom Odoo Module Development</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>ORM Customization</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Business Workflow Automation</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Third-Party API Integration</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Barcode Inventory Systems</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>On-Premise Deployment</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
