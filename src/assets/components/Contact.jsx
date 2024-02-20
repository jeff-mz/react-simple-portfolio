import React from "react";

function Contact() {
  return (
    <section
      className=" container mx-auto my-10 px-4 flex flex-col md:flex-row "
      id="contact"
    >
      <div className="w-full md:w-1/2 md:pt-2">
        <h2 className=" text-light font-bold text-4xl xl:text-8xl">
          Talk to me 😀
        </h2>
        <p className=" text-light text-base my-5 xl:text-3xl xl:leading-loose">
          I would like to hear about your ideas and projects and how I can help
          you !
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <form action="#" className="w-full">
          <input
            className=" block my-4 w-full outline-none py-4 px-2 text-base rounded-sm border-none xl:text-3xl "
            type="text"
            placeholder="Your Name "
          />
          <input
            className="block my-4 w-full outline-none py-4 px-2 text-base rounded-sm border-none xl:text-3xl "
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="block my-4 w-full outline-none py-4 px-2 text-base rounded-sm border-none xl:text-3xl "
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message "
          ></textarea>
          <button
            type="submit"
            className="block my-4 w-full outline-none py-4 px-2 text-base rounded-sm border-none xl:text-3xl bg-green-pale"
          >
            Send message{" "}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
