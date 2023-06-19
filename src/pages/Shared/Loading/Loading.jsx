import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="
      h-[100vh]
      flex 
      flex-col 
      justify-center 
      items-center
      my-bg-g2
    "
    >
      <ScaleLoader size={100} color="#6436d6" />
    </div>
  );
};

export default Loading;
