import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Design from "./components/design";

const App = () => {
  console.log();
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-black">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Design /> */}
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
