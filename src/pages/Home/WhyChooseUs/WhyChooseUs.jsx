import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slide } from "react-awesome-reveal";
const WhyChooseUs = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      description:
        "Experienced Faculty: Our photography school boasts a team of highly skilled and experienced instructors who are passionate about sharing their knowledge and expertise with you.",
    },
    {
      id: 2,
      description:
        "Comprehensive Curriculum: We offer a comprehensive curriculum that covers various aspects of photography, including camera techniques, composition, lighting, post-processing, and more.",
    },
    {
      id: 3,
      description:
        "Hands-on Learning: Our photography school emphasizes practical, hands-on learning. You'll have ample opportunities to practice your skills through real-world assignments, workshops, and photo excursions.",
    },
    {
      id: 4,
      description:
        "State-of-the-Art Facilities: We provide access to state-of-the-art facilities equipped with the latest photography gear and software, ensuring that you learn with cutting-edge tools and technology.",
    },
    {
      id: 5,
      description:
        "Networking Opportunities: As part of our photography school, you'll have the chance to connect with fellow photography enthusiasts, build your professional network, and collaborate on projects.",
    },
    {
      id: 6,
      description:
        "Career Support: We offer career support services, including portfolio reviews, job placement assistance, and industry connections, to help you launch a successful career in photography.",
    },
    {
      id: 7,
      description:
        "Flexible Learning Options: Whether you prefer to attend classes on-site or learn online, we provide flexible learning options to accommodate different schedules and preferences.",
    },
    {
      id: 8,
      description:
        "Community and Creativity: Join a vibrant community of photographers and foster your creativity through group discussions, critiques, and access to inspiring photography resources.",
    },
    {
      id: 9,
      description:
        "Positive Learning Environment: We strive to create a supportive and inclusive learning environment where every student feels encouraged to explore their artistic vision and reach their full potential.",
    },
    {
      id: 10,
      description:
        "Continued Education: Our photography school believes in lifelong learning. We offer advanced courses, workshops, and seminars to help you stay updated with the latest industry trends and techniques.",
    },
  ];

  return (
    <div>
      <Slide className="text-4xl p-4 my-text-g text-center">
        Why Choose Us?
      </Slide>
      <div>
        {items.map((item) => (
          <motion.div
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            key={item.id}
          >
            <motion.h5>{item.id}</motion.h5>
            <motion.h2>{item.description}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.h5>
                {items.find((item) => item.id === selectedId).id}
              </motion.h5>
              <motion.h2>
                {items.find((item) => item.id === selectedId).description}
              </motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WhyChooseUs;
