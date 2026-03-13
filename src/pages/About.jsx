import aboutImage from "../assets/about.jpeg";
import Footer from "../components/common/Footer";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <main className="main-padding min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500">
      <section className="py-20 md:py-32">
        <div className="wrapper max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Content Side */}
            <motion.div variants={textVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.span
                  className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-bold tracking-widest uppercase"
                >
                  Our Story
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                  Discover Your Next <span className="text-orange-500">Culinary</span> Adventure
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 dark:text-zinc-400 leading-relaxed font-medium">
                <p className="border-l-4 border-orange-500 pl-6 py-2 bg-orange-50/50 dark:bg-orange-900/10 rounded-r-2xl">
                  At Tasty Trails, we're passionate about connecting food lovers
                  with unforgettable dining experiences. Whether you're a local
                  seeking hidden gems or a traveler on a quest for authentic
                  flavors, our platform is designed to guide you through a rich
                  tapestry of culinary delights.
                </p>
                <p className="pl-7">
                  We believe that every meal tells a story, and our mission is
                  to help you find the ones that resonate with your taste buds
                  and soul. Explore curated lists, read honest reviews, and
                  embark on a journey that will tantalize your senses and
                  satisfy your hunger for adventure.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, bg: "#f97316" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-orange-500 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 transition-all text-lg group flex items-center gap-3"
              >
                Read More
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Image Side */}
            <motion.div variants={imageVariants} className="relative group">
              <div className="absolute -inset-4 bg-orange-500/10 rounded-[40px] blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-900">
                <img
                  className="w-full h-[500px] md:h-[600px] object-cover"
                  src={aboutImage}
                  alt="Culinary adventure"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-5xl font-black mb-1">10k+</p>
                  <p className="text-sm font-bold tracking-widest uppercase opacity-80 text-orange-400">Happy Explorers</p>
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

export default About;
