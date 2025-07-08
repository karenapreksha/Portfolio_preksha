import { motion } from 'framer-motion';

const contacts = [
  {
    name: 'Email',
    href: 'mailto:prekshakarena01@gmail.com',
    icon: 'https://cdn-icons-png.flaticon.com/128/9068/9068877.png',
    color: 'hover:border-red-400 hover:shadow-[0_0_10px_#f87171]',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/preksha-karena-2155b0146',
    icon: 'https://cdn-icons-png.flaticon.com/128/145/145807.png',
    color: 'hover:border-blue-400 hover:shadow-[0_0_10px_#60a5fa]',
  },
  {
    name: 'Call',
    href: 'tel:+919913959692',
    icon: 'https://cdn-icons-png.flaticon.com/128/9946/9946341.png',
    color: 'hover:border-green-400 hover:shadow-[0_0_10px_#4ade80]',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919913959692',
    icon: 'https://cdn-icons-png.flaticon.com/128/15707/15707820.png',
    color: 'hover:border-green-500 hover:shadow-[0_0_10px_#22c55e]',
  }
];


const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#0f0f1c] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-4xl font-bold text-center text-white mb-12"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap- justify-items-center">
        {contacts.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`w-20 h-20 flex flex-col items-center justify-center border border-white-600 bg-black rounded-full transition text-center ${item.color}`}
          >
            <img src={item.icon} alt={item.name} className="w-10- h-10 mb-0" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;