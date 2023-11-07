"use client";
import CodeBirdLogo from "../CodeBirdLogo";
import Link from "next/link";
interface FooterProps {}

function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-12">
      <div className="mx-auto w-full max-w-screen-xl p-4 grid">
        <div className="grid grid-cols-1 md:grid-cols-3  md:gap-[8rem]">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className=" justify-center md:justify-start flex space-x-3 ">
                <CodeBirdLogo IconSize="w-12 h-12" />
                <p className="text-2xl p-1 font-bold">The Code Bird</p>
              </div>
            </Link>

            <p className="text-justify">
              "The Code Bird" is the biggest coding club of UIT, where budding
              tech enthusiasts flock together to spread their wings and explore
              the fascinating world of programming. With engaging workshops,
              collaborative projects, and a supportive community, we nurture
              creativity, problem-solving, and a passion for coding. Join us and
              soar to new coding heights!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-6 md:grid-cols-3 col-span-2 ">
            <div>
              <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium  space-y-4">
                <li>
                  <Link href="/">
                    <p className=" ">Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/Blog">
                    <p className=" ">Blog</p>
                  </Link>
                </li>
                <li>
                  <Link href="/Events">
                    <p className=" ">Events</p>
                  </Link>
                </li>
                <li>
                  <Link href="/About">
                    <p className=" ">About Us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/JoinCommunity">
                    <p className=" ">Join Community</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
                More
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium  space-y-4">
                <li>
                  <Link href="/About/#Advisor">
                    <p className=" ">Advisor</p>
                  </Link>
                </li>
                <li>
                  <Link href="/About/#CoreTeam">
                    <p className=" ">Core Team</p>
                  </Link>
                </li>
                <li>
                  <Link href="/About/FAQ">
                    <p className=" ">FAQ</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/More/Privacy">
                    <p className=" "> Privacy Policy</p>
                  </Link>
                </li>
                <li>
                  <Link href="/More/TandC">
                    <p className=" "> Terms &amp; Conditions</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <div className="sm:flex sm:items-center sm:justify-between text-center">
          <p className="text-center">
            Designed &#38; Developed with{" "}
            <span className="text-xl animate-pulse">🩷</span> by{" "}
            <a
              target="_blank"
              href="https://github.com/ImKKingshuk"
              className="text-[18px] rgbtext"
            >
              @ImKKingshuk
            </a>
          </p>

          <p className=" text-gray-500 dark:text-white">
            &copy; {currentYear}, The Code Bird | All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
