
import React, { useState } from 'react';

// FIX: Defined props type as a separate type alias to resolve excess property checking error on `key`.
type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-medium text-blue-900">{question}</h4>
        <svg
          className={`w-5 h-5 text-blue-900 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "Who are the consultants?",
      answer: "Our consultants are highly experienced English speakers, many of whom are native speakers or have lived abroad. They are trained to create a supportive and effective learning environment."
    },
    {
      question: "What if I need to reschedule a session?",
      answer: "We understand that life happens! You can reschedule any session up to 24 hours in advance through our online booking system without any penalty."
    },
    {
      question: "Is this suitable for absolute beginners?",
      answer: "While our focus is on conversation, we can tailor sessions for advanced beginners (A2 level and up). The one-on-one format allows us to adapt to your specific level and needs."
    },
    {
      question: "What technology do I need?",
      answer: "All you need is a stable internet connection and a device with a camera and microphone (like a computer, tablet, or smartphone). We conduct sessions over common video conferencing platforms like Google Meet or Zoom."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Have questions? We have answers. Here are some common things our clients ask.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
