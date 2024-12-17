import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Transforme Seu Investimento Imobiliário em Renda Passiva
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Junte-se ao círculo de elite de proprietários que confiam em nós com seus investimentos imobiliários premium. Experimente serviços de gerenciamento de propriedades incomparáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
              Agendar uma Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Ver Nosso Portfólio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
