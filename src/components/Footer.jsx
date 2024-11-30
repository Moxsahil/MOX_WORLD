import { FaDiscord,  FaYoutube, FaGithub} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

const socialLinks = [
  { href: "https://www.instagram.com/moksshhh_.20/", icon: <FiInstagram /> },
  { href: "https://leetcode.com/u/moxsahil01/", icon: <SiLeetcode /> },
  { href: "https://www.youtube.com/@MOXGamingYT01", icon: <FaYoutube /> },
  { href: "https://github.com/Moxsahil", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left text-white">
          ©Sahil Barak 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start ">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white "
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right text-white"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;