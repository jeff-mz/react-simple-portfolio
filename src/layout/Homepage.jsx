import Header from "./Header";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const Homepage = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen h-max flex-grow w-full">
      <Header />
      <section className="flex-grow">{children}</section>
      <Footer />
    </main>
  );
};

export default Homepage;
