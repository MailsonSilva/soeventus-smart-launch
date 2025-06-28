
import { Mail, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">sE</span>
              </div>
              <span className="text-xl font-bold">soEventus</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando a forma como eventos são planejados e executados, oferecendo eficiência, conexão e inovação para organizadores em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contato@soeventus.com"
                className="flex items-center text-gray-400 hover:text-brand-orange transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                contato@soeventus.com
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2">Fique por dentro das novidades</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Receba dicas exclusivas e seja o primeiro a saber sobre novas funcionalidades
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-brand-orange text-white"
              />
              <button className="bg-brand-orange hover:bg-brand-orange-dark px-6 py-2 rounded-r-lg transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 soEventus. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/soeventus.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-orange transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <div className="text-gray-400 text-sm">
                Feito no Brasil 🇧🇷
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
