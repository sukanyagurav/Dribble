import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import TopYacht from "./components/TopYacht";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <TopYacht/>
      {/* <Testimonials/> */}

      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
