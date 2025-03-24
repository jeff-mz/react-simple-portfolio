import { Route, Routes } from "react-router-dom";

// components
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Homepage from "./layout/Homepage";

function App() {
  return (
    <main className="bg-dark-primary w-full min-h-screen flex flex-col">
      <Homepage>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/contact"
              element={
                <div className="custom-height">
                  <Contact />
                </div>
              }
            />
          </Routes>
        </div>
      </Homepage>
    </main>
  );
}

export default App;
