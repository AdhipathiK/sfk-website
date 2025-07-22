import { FaRegHandshake } from "react-icons/fa";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaHandshake,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si"; // TikTok from Simple Icons

export const trust = [
  {
    icon: <FaYoutube color="#FF0000" size={36} />,
    label: "YouTube Subscribers",
    value: "900+",
  },
  {
    icon: <FaInstagram color="#E4405F" size={36} />,
    label: "Instagram Followers",
    value: "12,700+",
  },
  {
    icon: <FaLinkedin color="#0077b5" size={36} />,
    label: "LinkedIn Followers",
    value: "2,900+",
  },
  {
    icon: <SiTiktok color="#000" size={36} />,
    label: "TikTok Followers",
    value: "3,100+",
  },
  {
    icon: <FaRegHandshake color="#141514ff" size={36} />,
    label: "Collaborations",
    value: "30+",
  },
];
