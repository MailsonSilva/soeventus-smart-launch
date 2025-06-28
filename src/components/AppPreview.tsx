
import { useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone, Monitor } from "lucide-react";

const AppPreview = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const appScreens = [
    {
      title: "Dashboard Inteligente",
      description: "Visão completa dos seus eventos com estatísticas em tempo real",
      image: "/placeholder.svg" // Placeholder - usuário pode substituir pelas imagens reais
    },
    {
      title: "Gestão de Eventos",
      description: "Crie e gerencie eventos com facilidade e organização",
      image: "/placeholder.svg"
    },
    {
      title: "Controle Financeiro",
      description: "Acompanhe orçamentos, despesas e receitas de cada evento",
      image: "/placeholder.svg"
    },
    {
      title: "Rede de Fornecedores",
      description: "Conecte-se com fornecedores verificados e qualificados",
      image: "/placeholder.svg"
    },
    {
      title: "Gestão de Equipe",
      description: "Organize sua equipe e delegue tarefas com eficiência",
      image: "/placeholder.svg"
    },
    {
      title: "CRM Integrado",
      description: "Mantenha relacionamento próximo com seus clientes",
      image: "/placeholder.svg"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % appScreens.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + appScreens.length) % appScreens.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-orange-light/10 border border-brand-orange-light/20 rounded-full text-brand-orange text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4 mr-2" />
              Aplicativo Mobile
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seu evento na palma da mão
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acesse todas as funcionalidades do soEventus através do nosso app intuitivo e responsivo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - App Preview */}
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto max-w-sm">
                <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2.5rem] p-1">
                    <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                      {/* App Screenshot */}
                      <div className="w-full h-full bg-gradient-to-br from-brand-orange-light/20 to-brand-orange/20 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-xl">sE</span>
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">
                            {appScreens[currentImageIndex].title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {appScreens[currentImageIndex].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {appScreens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-brand-orange' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Features */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Tudo que você precisa, onde quer que esteja
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Nossa plataforma mobile oferece todas as funcionalidades do sistema web, 
                    otimizada para uso em smartphones e tablets.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Monitor className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Interface Responsiva</h4>
                      <p className="text-gray-600 text-sm">Design adaptável que funciona perfeitamente em qualquer dispositivo</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Acesso Offline</h4>
                      <p className="text-gray-600 text-sm">Continue trabalhando mesmo sem conexão com a internet</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Testar App Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
