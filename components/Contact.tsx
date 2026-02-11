
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Start Speaking?</h2>
        <p className="max-w-2xl mx-auto text-blue-200 text-lg mb-10">
          Your journey to confident English communication is just one click away. Join SpeakUp today and discover a new way to learn.
        </p>
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20em%20iniciar%20a%20consultoria%20de%20ingl%C3%AAs."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-12 rounded-full text-lg transition-transform duration-300 hover:scale-110"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default Contact;
