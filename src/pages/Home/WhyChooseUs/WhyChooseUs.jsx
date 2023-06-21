import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Slide } from "react-awesome-reveal";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card({ description, heading }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <motion.div
      className="card-container -mb-12 md:-mb-16 grid justify-center"
      initial="offscreen"
      animate={inView ? "onscreen" : "offscreen"}
      variants={cardVariants}
      ref={ref}
    >
      <motion.div className="card md:h-52 p-6" variants={cardVariants}>
        <p className="text-2xl font-bold">{heading}</p>
        {description}
      </motion.div>
    </motion.div>
  );
}

const items = [
  {
    id: 1,
    heading: "Experienced Faculty",
    description:
      "Our photography school boasts a team of highly skilled and experienced instructors who are passionate about sharing their knowledge and expertise with you.",
  },
  {
    id: 2,
    heading: "Comprehensive Curriculum",
    description:
      "We offer a comprehensive curriculum that covers various aspects of photography, including camera techniques, composition, lighting, post-processing, and more.",
  },
  {
    id: 3,
    heading: "Hands-on Learning",
    description:
      "Our photography school emphasizes practical, hands-on learning. You'll have ample opportunities to practice your skills through real-world assignments, workshops, and photo excursions.",
  },
  {
    id: 4,
    heading: "State-of-the-Art Facilities",
    description:
      "We provide access to state-of-the-art facilities equipped with the latest photography gear and software, ensuring that you learn with cutting-edge tools and technology.",
  },
  {
    id: 5,
    heading: "Career Support",
    description:
      "We offer career support services, including portfolio reviews, job placement assistance, and industry connections, to help you launch a successful career in photography.",
  },
  {
    id: 6,
    heading: "Networking Opportunities",
    description:
      "As part of our photography school, you'll have the chance to connect with fellow photography enthusiasts, build your professional network, and collaborate on projects.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className=" pb-[700px] md:pb-64 overflow-y-auto">
      <Slide className="text-4xl p-4 my-text-g text-center">
        Why Choose Us?
      </Slide>
      <div className="mx-4 md:mx-48">
        {items.map((item) => (
          <Card
            key={item.id}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////

// import React from 'react';

// const WhyChooseUs = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default WhyChooseUs;
