
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/mês",
      description: "Perfeito para testar a plataforma",
      features: [
        "1 evento ativo",
        "Cadastro de fornecedores",
        "Busca de profissionais",
        "Checklist básico",
        "Suporte por email"
      ],
      cta: "Começar Grátis",
      highlighted: false
    },
    {
      name: "Pro",
      price: "R$ 97",
      period: "/mês",
      description: "Para organizadores profissionais",
      features: [
        "Eventos ilimitados",
        "IA para criação de tarefas",
        "Sugestões inteligentes de fornecedores",
        "Relatórios avançados",
        "Comunicação integrada",
        "Cronograma automático",
        "Suporte prioritário",
        "Acesso antecipado a novidades"
      ],
      cta: "Começar Teste Grátis",
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preços simples e transparentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio. Comece grátis e evolua conforme sua necessidade.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-sm border-2 p-8 ${
                  plan.highlighted
                    ? 'border-brand-orange shadow-xl scale-105'
                    : 'border-gray-100'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Mais Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              <strong>Teste grátis por 14 dias</strong> • Cancele a qualquer momento • Sem taxas ocultas
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                SSL Seguro
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Suporte 24/7
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Dados Protegidos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
