import Footer from "../components/common/Footer";

import { motion } from "framer-motion";

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="main-padding min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors duration-500">
      <section className="py-16 md:py-24">
        <div className="wrapper max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left: Contact Form Card */}
            <motion.div
              variants={itemVariants}
              className="p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 shadow-2xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-zinc-400">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-zinc-300 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all dark:text-white"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-zinc-300 ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all dark:text-white"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-zinc-300 ml-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all dark:text-white resize-none"
                    placeholder="Describe your inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Right: Map & Info */}
            <motion.div variants={itemVariants} className="space-y-8 lg:sticky lg:top-24">
              <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-zinc-800/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.7908475693043!2d89.12162797620358!3d23.89703417857071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9767a233178f%3A0x34dbe149a993b35a!2sHeaven&#39;s%20kitchen!5e0!3m2!1sen!2sbd!4v1724519719185!5m2!1sen!2sbd"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-orange-50 dark:bg-zinc-900 border border-orange-100 dark:border-zinc-800">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Our Office</h3>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm italic">
                    Heaven's Kitchen, Kushtia, Bangladesh
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Email Support</h3>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm">
                    support@tastytrails.com
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUs;
