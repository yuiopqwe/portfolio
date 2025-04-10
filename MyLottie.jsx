import Lottie from "lottie-react";
import animationData from "../1.json";

function MyLottie() {
  return <Lottie animationData={animationData} loop={true} />;
}