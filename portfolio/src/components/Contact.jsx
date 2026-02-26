import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contacts = [
    {
      name: 'Email',
      value: 'navedhusainshaikh@gmail.com',
      href: 'mailto:navedhusainshaikh@gmail.com',
      icon: HiMail,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100',
    },
    {
      name: 'Phone',
      value: '+91 8460900872',
      href: 'tel:+918460900872',
      icon: HiPhone,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
    },
    {
      name: 'GitHub',
      value: 'navedhusain06',
      href: 'https://github.com/navedhusain06',
      icon: FaGithub,
      color: 'text-gray-900',
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100',
    },
    {
      name: 'LinkedIn',
      value: 'Naved Husain Shaikh',
      href: 'https://www.linkedin.com/in/naved-husain-shaikh-82b017258/',
      icon: FaLinkedin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
    },
    {
      name: 'Instagram',
      value: '@navedhusainshaikh',
      href: 'https://instagram.com/navedhusainshaikh',
      icon: FaInstagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100',
    },
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Open to collaboration, consulting, and challenging Odoo opportunities. Let's connect and build something amazing together!
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                variants={item}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${contact.bgColor} ${contact.hoverColor} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100`}
              >
                <div className="flex flex-col items-center text-center">
                  <contact.icon className={`text-4xl mb-3 ${contact.color}`} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{contact.name}</h3>
                  <p className={`text-sm ${contact.color} font-medium break-all`}>{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-700 text-lg mb-4">Based in Ahmedabad, Gujarat, India</p>
            <p className="text-gray-600">Available for remote opportunities worldwide</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
