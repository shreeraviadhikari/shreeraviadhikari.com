import { Icon } from "@mdi/react";
import {
  mdiLinkedin,
  mdiGithub,
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
} from "@mdi/js";

const socials = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/shreeraviadhikari/",
    icon: mdiLinkedin,
    primaryColor: "text-blue",
  },
  {
    title: "Github",
    link: "https://github.com/shreeraviadhikari/",
    icon: mdiGithub,
    primaryColor: "text-black",
  },
  {
    title: "Facebook",
    link: "https://facebook.com/shreeraviadhikari/",
    icon: mdiFacebook,
    primaryColor: "text-blue",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/sriraviadhikari/",
    icon: mdiTwitter,
    primaryColor: "text-blue",
  },

  {
    title: "Instagram",
    link: "https://instagram.com/shreeraviadhikari/",
    icon: mdiInstagram,
    primaryColor: "text-red",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socials.map((social) => (
        <a
          key={social.title}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:scale-110 transition-transform duration-300 ${social.primaryColor}`}
          title={social.title}
        >
          <Icon path={social.icon} size={1.5} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
