import { Hearts } from "react-loader-spinner";

const LoadingIcon = () => {
  return (
    <>
      <h3>Loading... 🐱 </h3>
      <Hearts type="Hearts" color="#00BFFF" height={80} width={80} />
    </>
  );
};

export default LoadingIcon;
