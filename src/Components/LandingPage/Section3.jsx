import React, { useState } from "react";
import PrimaryButton from "../Common/PrimaryButton";

const Section3 = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      id: 1,
      question: "How personalized is a Once Upon My Story book?",
      answer: (
        <div>
          <p className="mb-3">
            Each Once Upon My Story book is deeply personalized. It's not just
            about inserting your loved one's name in the story. We base the
            storyline on your their interests, real-life experiences, or
            anything else you share with us.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Story Development:</strong> We craft an exclusive 400-word
              story, inspired by the unique information you provide about your
              loved one.
            </li>
            <li>
              <strong>Character Design:</strong> Our artists create unique
              character designs based on your loved one's features and
              personality.
            </li>
            <li>
              <strong>Illustrations:</strong> We bring the story to life with 8
              custom illustrations, capturing the adventures of your loved one.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      question: "How does the order process work?",
      answer:
        "Our ordering process is simple and straightforward. You'll fill out a form with details about your loved one, including their interests, appearance, and any specific experiences you'd like included. After payment, our team begins crafting your personalized story and illustrations. You'll receive updates throughout the process and have opportunities for feedback.",
    },
    {
      id: 3,
      question: "How long does it take to receive my book?",
      answer:
        "The creation process typically takes 2-3 weeks for us to craft your personalized story and illustrations. For e-books, delivery is immediate once completed. For paperback versions, add an additional 7-10 business days for printing and shipping.",
    },
    {
      id: 4,
      question: "How much does a Once Upon My Story book cost?",
      answer:
        "Our pricing is transparent and competitive. E-book versions start at $29.99, while paperback editions start at $39.99 plus shipping. We believe in providing exceptional value for a truly personalized product that becomes a cherished keepsake.",
    },
    {
      id: 5,
      question: "How can I get in touch with you?",
      answer:
        "We're always happy to help! You can reach our customer support team via email at support@onceuponmystory.com or through the contact form on our website. We typically respond within 24 hours during business days.",
    },
    {
      id: 6,
      question: "Can I order a book as a gift?",
      answer:
        "Absolutely! Once Upon My Story books make wonderful gifts. During checkout, you can indicate that it's a gift and provide the recipient's information. We can even include a personalized gift message. If you're not sure about some details, we can work with you to create the perfect surprise.",
    },
  ];

  return (
    <div className="bg-purple-dark text-white py-10">
      <div className="container mx-auto px-0">
        {/* FAQ Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 px-4 leading-[56px]">
          Frequently Asked <br/> Questions
        </h2>

        <div className="w-full space-y-6 mb-20 px-4">
          {faqItems.map((faq) => (
            <div
              key={faq.id}
              className="bg-purple-primary   rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-semibold text-lg">
                  {faq.id}. {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transform ${
                    openFaq === faq.id ? "rotate-180" : ""
                  } transition-transform`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openFaq === faq.id && (
                <div className="px-6 pb-6">
                  {typeof faq.answer === "string" ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section
        <div className="text-center px-4">
          <PrimaryButton onClick={() => window.location.href = '/get-started'}>
            Create Your Book Now
          </PrimaryButton>
        </div> */}
      </div>
    </div>
  );
};

export default Section3;
