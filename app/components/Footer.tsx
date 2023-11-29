import Image from "next/image";
import GITHUB_ICON from "../../assets/icons/github.png";
import FACEBOOK_ICON from "../../assets/icons/facebook.png";
import TIKTOK_ICON from "../../assets/icons/tiktok.png";
import TWITTER_ICON from "../../assets/icons/twitter.png";

const SOCIALS = [
  {
    text: "Facebook",
    icon: FACEBOOK_ICON,
    link: "facebook.com",
    alt: "Facebook Icon",
  },
  {
    text: "Twitter",
    icon: TWITTER_ICON,
    link: "twitter.com",
    alt: "Twitter Icon",
  },
  {
    text: "Tiktok",
    icon: TIKTOK_ICON,
    link: "tiktok.com",
    alt: "Tiktok Icon",
  },
  {
    text: "Github",
    icon: GITHUB_ICON,
    link: "github.com",
    alt: "Github Icon",
  },
];



export default function Footer() {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col ">
        {SOCIALS.map((social) => (
          <div className="flex flex-row gap-5" key={social.link}>
            <Image
              src={social.icon}
              width={25}
              height={25}
              alt={social.alt}
              className="py-2"
            />
            <span className="py-2"> {social.text}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 text-gray-400">
        <div>A 21-year-old software developer</div>
        <div>Davao City,Philippines</div>
        <div>Tech Enthusiast</div>
      </div>
      <div className="flex flex-col ">
        <div>Logo</div>
        <div className="flex flex-col">
          <div>Email</div>
          <div>Phone Number</div>
          <div>Tidy Calendar Link</div>
        </div>
      </div>
    </section>
  );
}
