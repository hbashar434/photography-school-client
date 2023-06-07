import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <FadeLoader size={100} color="#6436d6" />
    </div>
  );
};

export default Loading;
