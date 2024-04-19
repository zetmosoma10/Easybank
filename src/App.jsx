import Articles from "./sections/Articles";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </section>
  );
}

export default App;
