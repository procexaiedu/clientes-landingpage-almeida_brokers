import { Building2, Users, Percent, Clock } from 'lucide-react';

const stats = [
  {
    icon: Percent,
    value: '97%',
    label: 'Taxa de Ocupação',
    description: 'Mantendo consistentemente altas taxas de ocupação em todo o nosso portfólio'
  },
  {
    icon: Building2,
    value: '500+',
    label: 'Propriedades Gerenciadas',
    description: 'Gerenciando com sucesso propriedades premium em locais privilegiados'
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Clientes Satisfeitos',
    description: 'Proprietários que confiam em nós com seus investimentos'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Suporte Disponível',
    description: 'Gerenciamento e manutenção de propriedades 24 horas por dia'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
