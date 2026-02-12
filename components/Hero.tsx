import React from "react";
import connection from "./icons/connection.JPEG";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${connection}')` }}
      ></div>
      <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down">
          Unlock Your English Fluency.
          <br />
          <span className="text-blue-300">Start Speaking with Confidence.</span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Personalized one-on-one English conversation sessions designed to take
          your skills to the next level. Your journey to fluency starts here.
        </p>
        <a
          href="https://wa.me/5598182099179?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consultoria%20de%20ingl%C3%AAs."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-900 bg-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.6)] rounded-full py-3 px-10
 font-medium transition-all duration-200 hover:scale-105"
        >
          Start on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
