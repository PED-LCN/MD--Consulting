
import React from 'react';
import { TargetIcon, ChatIcon, GlobeIcon } from './icons/FeatureIcons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What is SpeakUp?</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-16 text-lg">
          SpeakUp is more than just a class; it's a personalized consultancy focused on the most crucial part of learning a language: <span className="font-semibold text-green-600">conversation</span>. We connect you with experienced consultants for practical, real-world English practice.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-100 p-5 rounded-full mb-4">
              <TargetIcon className="h-10 w-10 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Personalized Approach</h3>
            <p className="text-gray-600">
              Each session is tailored to your specific goals, interests, and proficiency level. We focus on what you need to improve.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-5 rounded-full mb-4">
              <ChatIcon className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Practical Conversation</h3>
            <p className="text-gray-600">
              Forget boring textbooks. Our focus is on active speaking and listening to build your confidence in real-life situations.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-5 rounded-full mb-4">
              <GlobeIcon className="h-10 w-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Cultural Fluency</h3>
            <p className="text-gray-600">
              Learn the nuances of English communication, understanding cultural contexts that go beyond grammar and vocabulary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
