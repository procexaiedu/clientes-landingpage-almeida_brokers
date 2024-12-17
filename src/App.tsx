import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Stats from '@/components/Stats';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { ContactForm } from '@/components/form/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
