import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      type: 'work',
      title: 'Odoo Developer',
      company: 'Sufalam Technologies',
      location: 'Ahmedabad, India',
      period: 'January 2025 - Present',
      description: 'Developing and customizing Odoo ERP solutions, implementing business workflows, and creating custom modules for enterprise clients.',
    },
    {
      type: 'work',
      title: 'Web Developer',
      company: 'Bytefaze',
      location: 'Ahmedabad, Gujarat, India',
      period: 'June 2024 - October 2024',
      description: 'Built responsive web applications and contributed to full-stack development projects using modern technologies.',
    },
  ]

  const education = [
    {
      type: 'education',
      degree: 'BSC(IT)',
      field: 'Information Technology',
      institution: 'LJ University',
      period: 'August 2021 - June 2024',
    },
    {
      type: 'education',
      degree: 'Higher Secondary',
      institution: 'Divan-Ballubhai School',
      period: 'Completed May 2021',
    },
    {
      type: 'education',
      degree: 'Secondary Education',
      institution: 'ST XAVIERS SCHOOL',
      period: 'Completed May 2019',
    },
  ]

  const certifications = [
    'Oracle SQL Basics',
    'Foundations of Digital Marketing and E-commerce',
    'Build a Firebase Android Application',
    'Intermediate Relational Database and SQL',
    'Introduction to Cybersecurity Essentials',
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <HiBriefcase className="text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-primary"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    <p className="text-lg text-gray-700 font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-600 mb-3">{exp.location}</p>
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <HiAcademicCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="relative pl-8 border-l-2 border-primary"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                      <span className="text-sm text-primary font-medium">{edu.period}</span>
                    </div>
                    {edu.field && <p className="text-gray-700 mb-1">{edu.field}</p>}
                    <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
