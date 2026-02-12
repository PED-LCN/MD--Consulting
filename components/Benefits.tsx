
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Por que escolher a MD Consulting?</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Nossa consultoria é projetada para oferecer resultados tangíveis que aumentam tanto suas habilidades quanto sua confiança.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* FIX: Passed text content as children to the BenefitCard component. */}
          <BenefitCard icon={<ConfidenceIcon className="h-12 w-12 text-green-500" />} title="Construa Confiança Real">
           aprimore sua fala em público. Nosso ambiente acolhedor ajuda você a praticar livremente e a se sentir à vontade para cometer erros.
          </BenefitCard>
          {/* FIX: Passed text content as children to the BenefitCard component. */}
          <BenefitCard icon={<BrainIcon className="h-12 w-12 text-blue-500" />} title="Melhore a Fluência">
            Prática consistente é fundamental. Conversas regulares ajudam você a pensar mais rápido em inglês e expressar-se de forma mais natural.
          </BenefitCard>
          {/* FIX: Passed text content as children to the BenefitCard component. */}
          <BenefitCard icon={<FeedbackIcon className="h-12 w-12 text-yellow-500" />} title="Feedback Instantâneo">
            Receba correções imediatas e construtivas sobre pronúncia, gramática e vocabulário diretamente do seu consultor.
          </BenefitCard>
          {/* FIX: Passed text content as children to the BenefitCard component. */}
          <BenefitCard icon={<ClockIcon className="h-12 w-12 text-red-500" />} title="Encontros Flexíveis">    
            Agende sessões que se encaixem na sua rotina agitada. Aprenda no seu próprio ritmo, quando e onde quiser.
          </BenefitCard>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
