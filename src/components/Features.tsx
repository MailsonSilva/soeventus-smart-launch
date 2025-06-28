
import { Calendar, Users, BarChart3, MessageSquare, CheckSquare, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Gestão Completa de Eventos",
      description: "Cadastre eventos com todos os detalhes: tipo, cliente, data, orçamento e muito mais. Tenha controle total do início ao fim."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "IA para Criação de Tarefas",
      description: "Nossa inteligência artificial cria automaticamente checklists personalizados baseados no tipo de evento que você está organizando."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Rede de Fornecedores",
      description: "Conecte-se com fornecedores verificados e profissionais qualificados. Encontre o que precisa com base no seu orçamento e localização."
    },
    {
      icon: <CheckSquare className="h-8 w-8" />,
      title: "Cronograma Inteligente",
      description: "A IA ajusta automaticamente seu cronograma com base na disponibilidade da equipe e prioridades das tarefas."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Comunicação Integrada",
      description: "Chat em tempo real entre organizadores, fornecedores e profissionais. Mantenha todos alinhados durante o evento."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Relatórios e Analytics",
      description: "Relatórios detalhados de desempenho com insights preditivos para otimizar seus próximos eventos."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa em uma plataforma
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Funcionalidades inteligentes que transformam a organização de eventos em um processo simples e eficiente
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="text-brand-orange mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para revolucionar seus eventos?
              </h3>
              <p className="text-gray-600 mb-6">
                Junte-se a centenas de organizadores que já transformaram sua forma de trabalhar
              </p>
              <button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                Começar Grátis Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
