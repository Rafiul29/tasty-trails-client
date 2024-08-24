import aboutImage from "../assets/about.jpeg";
import Footer from "../components/common/Footer";
const About = () => {
  return (
    <main className="main-padding">
      <section className="pb-28 ">
        <div className="wrapper flex items-center">
          <div className="grid lg:grid-cols-2   grid-cols-1 gap-5 place-items-center">
            <div className="md:space-y-6 space-y-4">
              <h2 className="text-3xl md:text-4xl md:mb-4 tracking-widest text-gray-900">
                About
              </h2>
              <h4 className="text-xl  md:text-2xl tracking-wider text-gray-800">
                Discover Your Next Culinary Adventure
              </h4>
              <div className="space-y-3 ">
                <p className="tracking-wide text-justify lg:text-start text-gray-700">
                  At Tasty Trails, we're passionate about connecting food lovers
                  with unforgettable dining experiences. Whether you're a local
                  seeking hidden gems or a traveler on a quest for authentic
                  flavors, our platform is designed to guide you through a rich
                  tapestry of culinary delights.
                </p>
                <p className="tracking-wide text-justify lg:text-start text-gray-700">
                  We believe that every meal tells a story, and our mission is
                  to help you find the ones that resonate with your taste buds
                  and soul. Explore curated lists, read honest reviews, and
                  embark on a journey that will tantalize your senses and
                  satisfy your hunger for adventure. With Tasty Trails, every
                  meal is an opportunity to explore, indulge, and celebrate the
                  diversity of global cuisine.
                </p>
                <button
                  type="button"
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={aboutImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
