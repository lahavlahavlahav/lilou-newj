import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Workshop from '../components/Workshop';
import Templates from '../components/Templates';
import OrderForm from '../components/OrderForm';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function Index() {
  return (
    <div dir="rtl" className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <AboutMe />
      <About />
      <Gallery />
      <Workshop />
      <Templates />
      <OrderForm />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
