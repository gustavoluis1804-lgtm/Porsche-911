import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import BuildYour911 from './components/BuildYour911';
import Lab911 from './components/Lab911';
import Experience from './components/Experience';
import Performance from './components/Performance';
import Final from './components/Final';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-void text-ice selection:bg-crimson/30 selection:text-ice overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <BuildYour911 />
        <Lab911 />
        <Experience />
        <Performance />
      </main>
      <Final />
      <Footer />
    </div>
  );
}
