import { useState } from "react";
import Articles from "./sections/Articles";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <section className="font-Public_sans ">
      <Navbar toggle={toggle} handleToggle={handleToggle} />
      <Hero toggle={toggle} />
      <Features />
      <Articles />
      <Footer />
    </section>
  );
}

export default App;
