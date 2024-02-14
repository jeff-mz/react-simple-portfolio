import React from "react";
import Navigation from "./assets/components/Navigation";
import About from "./assets/components/About";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <main className="w-full  bg-dark-primary m-auto py-1 px-4 mobile:px-8 mobile:py-4 flex flex-col	 justify-between">
      <Navigation />
      <About />
      <Footer />
    </main>
  );
}

export default App;
