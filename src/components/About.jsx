import React, { useState, useEffect } from "react";
import hero from "../assets/images/hero-img.png";

function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="container mx-auto p-4 flex flex-col-reverse lg:flex-row items-center"
      id="about"
    >
      {/* hero img  */}
      <img
        src={hero}
        alt="a boy is coding."
        className={`w-full lg:w-1/2 transition-all duration-1000 transform ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      />

      {/* hero text  */}
      <div className="w-full lg:w-1/2 md:ml-4">
        <h1 className="font-bold text-4xl text-light text-left xl:text-7xl xl:mb-10">
          Hey there <span className="emoji">👋</span>
          <span className="block">
            my name is{" "}
            <span className="underline decoration-wavy decoration-green-pale font-bold ">
              Jafar
            </span>
          </span>
        </h1>
        <p className="text-base text-left my-4 text-light md:max-lg:text-xl xl:text-3xl xl:leading-10">
          I am a web designer and a front-end developer with passion of creating
          functional, responsive and accessible websites. I have experience in
          working with Wordpress and Shopify and of course Html and Css but I
          wanted to explore more in web development so I decided to become a
          Front-end developer.
        </p>
      </div>
    </section>
  );
}

export default About;
