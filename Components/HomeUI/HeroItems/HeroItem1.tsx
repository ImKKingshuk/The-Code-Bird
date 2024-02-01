"use client";
import CodeBirdLogo from "@/Components/CodeBirdLogo";
import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

interface HeroItem1Props {}
interface SocialMedia {
  name: string;
  icon: JSX.Element;
}

const socialMediaLinks: SocialMedia[] = [
  { name: "Facebook", icon: <FaFacebook className="w-6 h-6 text-blue-500" /> },
  {
    name: "Instagram",
    icon: <FaInstagram className="w-6 h-6 text-pink-500" />,
  },
  { name: "Twitter", icon: <FaTwitter className="w-6 h-6 text-sky-500" /> },
  { name: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
  { name: "LinkedIn", icon: <FaLinkedin className="w-6 h-6 text-sky-700" /> },
];
function HeroItem1({}: HeroItem1Props) {
  return (
    <div>
      <div className="h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="mx-auto pt-[6rem]">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              The Code Bird
            </h1>
            <div className="text-2xl pb-4 md:text-3xl text-center">
              <Typewriter
                options={{
                  strings: [
                    "UIT, Burdwan",
                    "Hello World",
                    "Eat, Sleep, Code, Repeat",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <Link href="/JoinCommunity">
              <p className="mx-auto px-2 text-lg  w-fit">
                &#60; Join Our Community &#47; &#62;
              </p>
            </Link>
            <div className="pt-3 flex justify-center space-x-6 mx-auto">
              {socialMediaLinks.map((socialMedia, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:scale-125 duration-500"
                >
                  <span className="sr-only">{socialMedia.name}</span>
                  {socialMedia.icon}
                </a>
              ))}
            </div>

            <div className="p-4 pt-2">
              <h1 className="text-justify mx-auto text-md">
                &#60; "The Code Bird" is the biggest coding club of UIT, where
                budding tech enthusiasts flock together to spread their wings
                and explore the fascinating world of programming. With engaging
                workshops, collaborative projects, and a supportive community,
                we nurture creativity, problem-solving, and a passion for
                coding. Join us and soar to new coding heights! &#47; &#62;
              </h1>
            </div>
          </div>
          <div className="mx-auto p-6">
            <CodeBirdLogo IconSize=" w-20 h-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroItem1;
