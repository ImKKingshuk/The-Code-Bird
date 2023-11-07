import CodeBirdLogo from "../CodeBirdLogo";
import Link from "next/link";

interface FooterProps {}

interface LinkItem {
  text: string;
  href: string;
}

function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const links: LinkItem[] = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/Blog" },
    { text: "Events", href: "/Events" },
    { text: "About Us", href: "/About" },
    { text: "Join Community", href: "/JoinCommunity" },
  ];

  const moreLinks: LinkItem[] = [
    { text: "Advisor", href: "/About/#Advisor" },
    { text: "Core Team", href: "/About/#CoreTeam" },
    { text: "FAQ", href: "/About/FAQ" },
  ];

  const legalLinks: LinkItem[] = [
    { text: "Privacy Policy", href: "/More/Privacy" },
    { text: "Terms & Conditions", href: "/More/TandC" },
  ];
  interface FooterLinksProps {
    title: string;
    links: LinkItem[];
  }

  function FooterLinks({ title, links }: FooterLinksProps) {
    return (
      <div>
        <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
          {title}
        </h2>
        <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <p className="">{link.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="pt-12">
      <div className="mx-auto w-full max-w-screen-xl p-4 grid">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[8rem]">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="justify-center md:justify-start flex space-x-3">
                <CodeBirdLogo IconSize="w-12 h-12" />
                <p className="text-2xl p-1 font-bold">The Code Bird</p>
              </div>
            </Link>

            <p className="text-justify pt-4">
              "The Code Bird" is the biggest coding club of UIT, where budding
              tech enthusiasts flock together to spread their wings and explore
              the fascinating world of programming. With engaging workshops,
              collaborative projects, and a supportive community, we nurture
              creativity, problem-solving, and a passion for coding. Join us and
              soar to new coding heights!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-6 md:grid-cols-3 col-span-2">
            <FooterLinks title="Links" links={links} />
            <FooterLinks title="More" links={moreLinks} />
            <FooterLinks title="Legal" links={legalLinks} />
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
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

          <p className="text-gray-500 dark:text-white">
            &copy; {currentYear}, The Code Bird | All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
