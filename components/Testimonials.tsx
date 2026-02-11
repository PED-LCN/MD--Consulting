
import React from 'react';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ quote, name, role, rating }: { quote: string, name: string, role: string, rating: number }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-between">
    <div>
      <p className="text-gray-600 italic mb-6">"{quote}"</p>
    </div>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 mr-4">
        {/* Placeholder for avatar */}
        <img src={`https://i.pravatar.cc/48?u=${name}`} alt={name} className="w-full h-full rounded-full" />
      </div>
      <div>
        <h4 className="font-bold text-blue-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
        <StarRating rating={rating} />
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't Just Take Our Word For It</h2>
          <p className="max-w-2xl mx-auto text-blue-200 text-lg">
            See how we've helped professionals and students unlock their potential.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="My confidence has skyrocketed. I can now lead meetings in English without feeling nervous. The practical approach made all the difference."
            name="Juliana S."
            role="Project Manager"
            rating={5}
          />
          <TestimonialCard
            quote="Finally, a service that focuses on speaking! The sessions are engaging, and my consultant is fantastic at correcting my mistakes in a friendly way."
            name="Ricardo M."
            role="Software Developer"
            rating={5}
          />
          <TestimonialCard
            quote="I needed to prepare for an interview in English, and SpeakUp was perfect. I felt much more prepared and fluent. I got the job!"
            name="Fernanda L."
            role="Marketing Analyst"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
