import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Display from "./components/Display";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Display />
    </main>
  );
};

export default App;
