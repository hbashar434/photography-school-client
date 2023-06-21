import { useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CountUpProcess = ({ title, count }) => {
  const countRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div>
      <div className="stat place-items-center p-10" ref={ref}>
        <div className="stat-title text-white text-lg font-semibold">
          {title}
        </div>
        <div className="stat-value text-white">
          {inView && <CountUp start={0} end={count} duration={5} />}
        </div>
      </div>
    </div>
  );
};

const CountUpCard = () => {
  const totalStudents = 1000;
  const totalCourses = 50;
  const totalInstructors = 15;

  return (
    <div className="py-12 md:py-24">
      <Slide className="text-4xl pb-8 my-text-g text-center">Our Impact</Slide>
      <div className="flex justify-center">
        <div className="md:stats shadow rounded-md my-bg-gr">
          <CountUpProcess title="Total Students" count={totalStudents} />
          <CountUpProcess title="Total Courses" count={totalCourses} />
          <CountUpProcess title="Total Instructors" count={totalInstructors} />
        </div>
      </div>
    </div>
  );
};

export default CountUpCard;
