import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Navigation from "./assets/components/Navigation";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Projects from "./assets/components/Projects";
import Footer from "./assets/components/Footer";
import Skills from "./assets/components/Skills";

function App() {
  return (
    <main className="bg-dark-primary">
      <Navigation />

      {/* Pages start */}
      <Routes>
        <Route
          path="https://jmz-personal-website.netlify.app/"
          element={<About />}
        />
      </Routes>

      <Routes>
        <Route
          path="https://jmz-personal-website.netlify.app/skills"
          element={<Skills />}
        />
      </Routes>

      <Routes>
        <Route
          path="https://jmz-personal-website.netlify.app/projects"
          element={<Projects />}
        />
      </Routes>

      <Routes>
        <Route
          path="https://jmz-personal-website.netlify.app/contact"
          element={<Contact />}
        />
      </Routes>
      {/* Pages end */}

      <Footer />
    </main>
  );
}

export default App;
