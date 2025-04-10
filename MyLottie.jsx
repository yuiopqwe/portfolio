import Lottie from "lottie-react";
import animationData from "./your-animation.json";

function MyLottie() {
  return <Lottie animationData={animationData} loop={true} />;
}