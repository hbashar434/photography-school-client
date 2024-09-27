import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="
      h-[50vh]
      flex 
      flex-col 
      justify-center 
      items-center
    "
    >
      <ScaleLoader size={100} color="#6436d6" />
    </div>
  );
};

export default Loading;
