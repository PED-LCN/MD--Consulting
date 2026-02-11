
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1')" }}></div>
      <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down">
          Unlock Your English Fluency.
          <br />
          <span className="text-yellow-400">Start Speaking with Confidence.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Personalized one-on-one English conversation sessions designed to take your skills to the next level. Your journey to fluency starts here.
        </p>
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consultoria%20de%20ingl%C3%AAs."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform duration-300 hover:scale-110 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          Start on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
