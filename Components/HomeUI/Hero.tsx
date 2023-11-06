import React from "react";
import CodeBirdLogo from "../CodeBirdLogo";
interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <div>
      <CodeBirdLogo IconSize="w-10 h-10" />
    </div>
  );
}

export default Hero;
