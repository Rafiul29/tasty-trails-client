import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, subtitle, image, imageAlt, reverse = false }) => {
  return (
    <main className="main-padding min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="wrapper w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Image Section */}
          <div className={`hidden md:block overflow-hidden rounded-2xl shadow-2xl ${reverse ? 'md:order-2' : ''}`}>
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
              src={image}
              alt={imageAlt}
            />
          </div>

          {/* Form Section */}
          <div className={`w-full max-w-md mx-auto p-8 rounded-3xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 shadow-2xl ${reverse ? 'md:order-1' : ''}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-2 text-gray-600 dark:text-zinc-400">
                  {subtitle}
                </p>
              )}
            </div>
            
            {children}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AuthLayout;
