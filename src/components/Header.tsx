import { Menu, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-gray-900">LuxEstate</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#services" className="text-gray-600 hover:text-gray-900">Serviços</a>
              <a href="#properties" className="text-gray-600 hover:text-gray-900">Propriedades</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Depoimentos</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contato</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-gray-900">
                <Phone className="w-4 h-4 mr-2" />
                <span>(123) 456-7890</span>
              </a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Agendar Consulta
              </button>
            </div>
          </div>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
