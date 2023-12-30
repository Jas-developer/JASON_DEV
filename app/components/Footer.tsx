"use client";

import Image from "next/image";
import GITHUB_ICON from "../../assets/icons/github.png";
import FACEBOOK_ICON from "../../assets/icons/facebook.png";
import TIKTOK_ICON from "../../assets/icons/tiktok.png";
import TWITTER_ICON from "../../assets/icons/twitter.png";
import GMAIL_ICON from "../../assets/icons/gmail.png";
import CALENDER_ICON from "../../assets/icons/icons8-calendar-96.png";
import PHONECALL_ICON from "../../assets/icons/phone-call.png";
import Link from "next/link";
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

const CONTACTS = [
  {
    text: "+639705038067",
    icon: PHONECALL_ICON,
    alt: "Phone Icon",
  },
  {
    text: "devop.jas@gmail.com",
    icon: GMAIL_ICON,
    alt: "Gmail Icon",
  },
  {
    text: "Book",
    icon: CALENDER_ICON,
    alt: "Calendar Icon",
  },
];

export default function Footer() {
  return (
    <section className="flex flex-col md:flex-row gap-3 md:justify-between mt-5">
      {/* div 1 */}
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <div className="flex-row flex gap-2 items-center">
            <Image
              src={GMAIL_ICON}
              width={25}
              height={25}
              alt="gmail image"
              className="py-2"
            />
            devop.jas@gmail.com
          </div>
          <div className="flex-row flex gap-2 items-center">
            <Image
              src={PHONECALL_ICON}
              width={25}
              height={25}
              alt="phonecall image"
              className="py-2"
            />
            +639705038067
          </div>
        </div>
      </div>
      {/* div2 */}
      <div className="flex flex-col gap-2">
        <span>SOFTWARE DEVELOPER</span>
        <span>DAVAO CITY</span>
        <span>©2024</span>
      </div>
      {/* div3 */}
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
            <span className="py-2 text-gray-400"> {social.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
