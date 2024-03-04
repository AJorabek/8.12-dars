import Link from "next/link";
import Shop from "./Shop";
import { useContext } from "react";
import { productContext } from "../context/productContext";

const Header = () => {
  const context = useContext(productContext);
  return (
    <header className="header text-white">
      <div className="flex items-center container border-b justify-between p-5">
        <Link href="/" className="text-white font-bold text-3xl">
          audiophile
        </Link>
        <nav>
          <ul className="flex gap-11 flex-wrap justify-center">
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
        <Shop />
      </div>
    </header>
  );
};

export default Header;
