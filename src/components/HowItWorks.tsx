
import React from "react";
import { ArrowRight, Calendar, Users, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Calendar className="h-8 w-8" />,
      title: "Cadastre seu Evento",
      description: "Crie seu evento informando tipo, data, orçamento e detalhes. Nossa IA automaticamente gera um checklist personalizado para você."
    },
    {
      number: "02",
      icon: <Users className="h-8 w-8" />,
      title: "Conecte-se com Fornecedores",
      description: "Encontre fornecedores verificados e profissionais qualificados. Receba sugestões inteligentes baseadas no seu orçamento e localização."
    },
    {
      number: "03",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Execute e Monitore",
      description: "Acompanhe o progresso em tempo real, comunique-se com sua equipe e receba relatórios detalhados do desempenho do seu evento."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona o soEventus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Em apenas 3 passos simples, transforme a organização dos seus eventos
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Step Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-6xl font-bold text-brand-orange/20">
                      {step.number}
                    </div>
                    <div className="text-brand-orange">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="flex items-center text-brand-orange font-semibold">
                      <span>Próximo passo</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </div>

                {/* Step Visual */}
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-brand-orange-light/10 to-brand-orange/10 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-brand-orange opacity-30">
                      {React.cloneElement(step.icon, { className: "h-32 w-32" })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              Começar Agora - É Grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
