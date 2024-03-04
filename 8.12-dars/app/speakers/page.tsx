import Image from "next/image";
import LinkImg from "../components/LinksImg";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="p-20 font-bold uppercase background-links">
        <h2 className="text-center text-white text-3xl">Speakers</h2>
      </div>
      <ul className="container flex flex-col mt-10 mb-10 gap-10">
        <li className="flex items-center gap-24 justify-center flex-wrap w-full">
          <Image
            src="/x9/image_1.jpg"
            alt="the headphone"
            width={540}
            height={560}
          />
          <div className="flex flex-col gap-5 text-center items-center">
            <p className="letter_space_2">NEW PRODUCT</p>
            <h2 className="text-4xl">ZX9 SPEAKER</h2>
            <p className="w-96">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <div className="w-full flex gap-5 items-center flex-wrap flex-col">
              <button className="btn1">Add to cart</button>
              <Link href="/products/4" className="btn1">
                See Product
              </Link>
            </div>
          </div>
        </li>
        <li className="flex items-center gap-24 justify-center flex-wrap w-full">
          <div className="flex flex-col gap-5 text-center items-center">
            <h2 className="text-4xl">ZX7 SPEAKER</h2>
            <p className="w-96">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <Link href="/products/1" className="btn1">
              See Product
            </Link>
          </div>
          <Image
            src="/x7/image_1.jpg"
            alt="the headphone"
            width={540}
            height={560}
          />
        </li>
      </ul>
      <LinkImg />
    </div>
  );
};

export default page;
