import React, { useState } from "react";
import GetFaq from "../../data";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = GetFaq();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="wrapper">
      <h2 className="text-2xl tracking-wider font-medium mb-3">
      Frequently Asked Questions - Your Guide to Exploring Tastytrails
          </h2>
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-class="text-gray-500 dark:text-gray-400"
        >

          {/* Accordion Item 1 */}
          {faqData?.map((faq) => (
            <React.Fragment key={faq.id}>
              <h2 id={`accordion-flush-heading-${faq.id}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={activeIndex === faq.id}
                  aria-controls={`accordion-flush-body-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 ${
                      activeIndex === faq.id ? "rotate-180" : ""
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-flush-body-${faq.id}`}
                className={`${activeIndex === faq.id ? "" : "hidden"}`}
                aria-labelledby={`accordion-flush-heading-${faq.id}`}
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
