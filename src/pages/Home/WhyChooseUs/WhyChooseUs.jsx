import React from 'react';
import { FaChalkboardTeacher, FaClock, FaUsers, FaBook } from 'react-icons/fa';

const reasonsData = [
  {
    icon: <FaChalkboardTeacher className="mx-auto mb-4 text-4xl text-blue-700" />,
    title: 'Expertise',
    description: 'Learn from seasoned photographers with years of industry experience.',
  },
  {
    icon: <FaClock className="mx-auto mb-4 text-4xl text-blue-700" />,
    title: 'Flexibility',
    description: 'Our online platform allows you to learn at your own pace and on your schedule.',
  },
  {
    icon: <FaUsers className="mx-auto mb-4 text-4xl text-blue-700" />,
    title: 'Community',
    description: 'Join a thriving community of photography enthusiasts to share ideas and projects.',
  },
  {
    icon: <FaBook className="mx-auto mb-4 text-4xl text-blue-700" />,
    title: 'Resources',
    description: 'Access a wealth of resources, including tutorials, eBooks, and practice assignments.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-24 px-4 bg-slate-900">
      <div className="container mx-auto text-center">
        <h2 className="my-text-g text-3xl font-semibold mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasonsData.map((reason, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-md">
              {reason.icon}
              <h3 className=" text-gray-300 text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
