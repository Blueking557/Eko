import Hero from './Components/Hero';
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import AlsoPurchased from './Components/AlsoPurchased';
import Testimonials from './Components/Testimonials';
import Navbar from './Components/Navbar';
import TrustedBy from './Components/TrustedBy';

export default function Home() {
  return (
    <div  className="overflow-x-hidden font-sans bg-white text-gray-800">
      <Navbar/>
      <Hero />
      <TrustedBy/>
      <ProductCard />
      <AlsoPurchased/>
      <Testimonials/>
      <Newsletter/>

      <Footer/>
    </div>
  );
}



