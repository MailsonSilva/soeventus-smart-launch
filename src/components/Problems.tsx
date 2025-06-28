
import { AlertTriangle, CheckCircle, Clock, Users, DollarSign, FileText } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dificuldade para encontrar fornecedores confiáveis",
      description: "Tempo perdido procurando e validando fornecedores"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Desorganização na gestão de tarefas",
      description: "Controle manual e disperso de atividades e equipe"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Processos manuais e retrabalho",
      description: "Perda de tempo com atividades repetitivas"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Falta de controle de orçamento",
      description: "Dificuldade para acompanhar custos e ROI"
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Rede de Fornecedores Verificados",
      description: "Acesso a fornecedores pré-qualificados com avaliações reais"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Gestão Inteligente de Tarefas",
      description: "IA cria automaticamente checklists personalizados por tipo de evento"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Automação Completa",
      description: "Cronogramas, notificações e relatórios gerados automaticamente"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Controle Financeiro Inteligente",
      description: "Acompanhamento em tempo real com insights preditivos"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Acabou a dor de cabeça para organizar eventos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transformamos os principais problemas da organização de eventos em soluções inteligentes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <div>
              <div className="flex items-center mb-8">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Problemas Comuns</h3>
              </div>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-red-100 bg-red-50/50">
                    <div className="text-red-500 mt-1">{problem.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{problem.title}</h4>
                      <p className="text-gray-600 text-sm">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">sE</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nossa Solução</h3>
              </div>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-green-100 bg-green-50/50">
                    <div className="mt-1">{solution.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{solution.title}</h4>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
