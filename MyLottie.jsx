import Lottie from "lottie-react";
import animationData from "../json/1.json";

function MyLottie() {
  return <Lottie animationData={animationData} loop={true} />;
}