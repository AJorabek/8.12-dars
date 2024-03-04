import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container gap-5">
        <div className="flex items-center justify-between p-5 gap-5">
          <Link href="/" className="text-white font-bold text-3xl">
            audiophile
          </Link>
          <nav>
            <ul className="flex flex-wrap gap-11">
              <li className="nav_link">
                <Link href="/">HOME</Link>
              </li>
              <li className="nav_link">
                <Link href="/headphones">HEADPHONES</Link>
              </li>
              <li className="nav_link">
                <Link href="/speakers">SPEAKERS</Link>
              </li>
              <li className="nav_link">
                <Link href="/earphones">EARPHONES</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-gray-600 flex items-center p-5 gap-5 flex-wrap justify-between">
          <div className="flex flex-col">
            <p className="mb-5 w-full max-w-96">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="mt-5 w-full">Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="flex gap-4 h-7 cursor-pointer">
            <a href="#">
              <Image
                src="/shared/facebook.svg"
                alt="the social network img"
                width={28}
                height={28}
              />
            </a>
            <a href="#">
              <Image
                src="/shared/twitter.svg"
                alt="the social network img"
                width={28}
                height={28}
              />
            </a>
            <a href="#">
              <Image
                src="/shared/instagram.svg"
                alt="the social network img"
                width={28}
                height={28}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
