
import React from 'react';
import { ConfidenceIcon, BrainIcon, ClockIcon, FeedbackIcon } from './icons/FeatureIcons';

const BenefitCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose SpeakUp?</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Our consultancy is designed to provide tangible results that boost both your skills and your confidence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* FIX: Passed text content as children to the BenefitCard component. */}
          <BenefitCard icon={<ConfidenceIcon className="h-12 w-12 text-green-500" />} title="Build Real Confidence">
            Overcome the fear of speaking. Our supportive environment helps you practice freely and feel comfortable making mistakes.
          </BenefitCard>
          {/* FIX: Passed text content as children to the BenefitCard component. */}
          <BenefitCard icon={<BrainIcon className="h-12 w-12 text-blue-500" />} title="Improve Fluency">
            Consistent practice is key. Regular conversations help you think faster in English and express yourself more naturally.
          </BenefitCard>
          {/* FIX: Passed text content as children to the BenefitCard component. */}
          <BenefitCard icon={<FeedbackIcon className="h-12 w-12 text-yellow-500" />} title="Instant Feedback">
            Receive immediate, constructive corrections on pronunciation, grammar, and vocabulary from your consultant.
          </BenefitCard>
          {/* FIX: Passed text content as children to the BenefitCard component. */}
          <BenefitCard icon={<ClockIcon className="h-12 w-12 text-red-500" />} title="Flexible Scheduling">
            Book sessions that fit your busy life. Learn at your own pace, whenever and wherever you are.
          </BenefitCard>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
