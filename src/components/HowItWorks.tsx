
import React from "react";
import { ArrowRight, Calendar, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="how-it-works" className="py-20 bg-gray-50">
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

          {/* Steps in Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="relative bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-brand-orange/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-brand-orange mb-6 flex justify-center">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Arrow for non-last steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-brand-orange/30" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
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
