import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
const Newsletter = () => {
  return (
    <div className=" bg-fuchsia-100 px-4 md:px-8 py-8 md:py-24">
      <div className="container mx-auto px-4">
        <div className="lg:max-w-2xl mx-auto">
          <Slide className="text-2xl font-bold mb-4">
            Subscribe to our Newsletter
          </Slide>
          <div className=" space-y-1 pb-4">
            <Fade delay={1e3} cascade damping={1e-1}>
              <p>
                Immerse yourself in the world of photography! Join our enamorous
                community by subscribing to our newsletter for captivating
                photography inspiration,exclusive offers, and enchanting updates
                on our courses and workshops.
              </p>
            </Fade>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-lg px-4 py-2 w-full border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg transition duration-300 hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
