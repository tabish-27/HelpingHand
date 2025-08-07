import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

function About() {
  const services = [
    {
      title: "Education",
      description:
        "We set up learning centers, provide school supplies, and promote digital literacy among underprivileged children.",
      icon: "📚",
    },
    {
      title: "Healthcare",
      description:
        "We organize free health camps, provide basic medical support, and spread hygiene awareness in rural areas.",
      icon: "🏥",
    },
    {
      title: "Livelihood",
      description:
        "We empower women and youth through skill-based training and livelihood programs for long-term sustainability.",
      icon: "💼",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
        >
          About Helping Hand NGO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        >
          We are a passionate non-profit committed to uplifting lives through
          education, healthcare, and livelihood initiatives in India's most
          underserved regions. Our mission is to build a better tomorrow —
          together.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-indigo-50 hover:bg-indigo-100 transition p-6 rounded-2xl shadow-md hover:shadow-xl"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-md sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
