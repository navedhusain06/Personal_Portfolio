import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      name: 'Custom Odoo ERP Module',
      description: 'Developed custom Odoo modules for inventory management with barcode integration, automated workflows, and real-time tracking capabilities.',
      technologies: ['Odoo', 'Python', 'PostgreSQL', 'XML'],
      github: 'https://github.com/navedhusain06',
    },
    {
      name: 'Business Process Automation',
      description: 'Implemented automated workflows for purchasing, inventory, and CRM modules, reducing manual processing time by 60%.',
      technologies: ['Odoo', 'Python', 'ORM'],
      github: 'https://github.com/navedhusain06',
    },
    {
      name: 'REST API Integration',
      description: 'Built RESTful API integrations connecting Odoo with third-party services for seamless data synchronization and business operations.',
      technologies: ['FastAPI', 'Python', 'REST API', 'PostgreSQL'],
      github: 'https://github.com/navedhusain06',
    },
    {
      name: 'ERP Dashboard Solution',
      description: 'Created comprehensive dashboard for real-time business analytics, KPI tracking, and operational insights within Odoo framework.',
      technologies: ['Odoo', 'JavaScript', 'Python', 'Chart.js'],
      github: 'https://github.com/navedhusain06',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <HiCode className="text-4xl text-primary" />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-primary text-sm font-medium rounded-full border border-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    View on GitHub
                    <HiExternalLink />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
