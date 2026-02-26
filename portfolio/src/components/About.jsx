import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I am an <span className="font-semibold text-gray-900">Odoo Developer</span> with hands-on experience in designing, customizing, and implementing scalable ERP solutions aligned with real-world business operations. I specialize in translating business requirements into efficient Odoo customizations that streamline workflows, automate processes, and improve operational efficiency.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My expertise includes developing custom Odoo modules, extending standard applications, and building robust backend solutions using <span className="font-semibold text-gray-900">Python and PostgreSQL</span>. I have practical experience working across purchasing, inventory, CRM, accounting workflows, and business process automation within Odoo environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary"
            >
              <h3 className="font-semibold text-xl text-gray-900 mb-3">I actively work on:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Custom module development & ORM customization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Business workflow automation
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  API integrations & third-party connectivity
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Barcode-based inventory systems
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Odoo On-Premise deployment & customization
                </li>
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Currently, I am actively exploring the functional aspects of Odoo to gain deeper understanding of business process setup, system configuration, and end-to-end ERP implementation. This approach allows me to bridge the gap between technical development and functional business needs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl font-semibold text-gray-900 pt-4"
            >
              My long-term vision is to evolve into a complete <span className="text-primary">Odoo Techno-Functional Consultant</span> capable of designing, implementing, and optimizing business-driven ERP solutions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
