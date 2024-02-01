"use client";
import HeroItem1 from "./HeroItems/HeroItem1";
interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <div>
      <HeroItem1 />
    </div>
  );
}

export default Hero;
