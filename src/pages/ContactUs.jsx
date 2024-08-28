import Footer from "../components/common/Footer";

const ContactUs = () => {
  return (
    <main className="main-padding space-y-10">
     <section className="pt-6 md:pt-0">
     <div className="md:container lg:max-w-7xl mx-auto px-5  h-[calc(100vh-18rem)] flex flex-col justify-center ">
     {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5">
          {/* left */}
          <div>
            <h2 className="text-3xl md:text-4xl text-center mb-4">
              Contact Us
            </h2>
            <form className="mb-6">
              <div className="mb-3">
                <label
                  htmlFor="subject"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-orange-500 hover:bg-orange-600 w-full focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 block"
              >
                Send message
              </button>
            </form>
          </div>
          {/* right */}
          <div className="overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.7908475693043!2d89.12162797620358!3d23.89703417857071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9767a233178f%3A0x34dbe149a993b35a!2sHeaven&#39;s%20kitchen!5e0!3m2!1sen!2sbd!4v1724519719185!5m2!1sen!2sbd"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
     </section>
     <Footer/>
    </main>
  );
};

export default ContactUs;
