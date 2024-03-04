import Image from "next/image";
import Advice from "../components/Advice";
import LinkImg from "../components/LinksImg";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="p-20 font-bold uppercase background-links">
        <h2 className="text-center text-white text-3xl">Earphones</h2>
      </div>
      <ul className="container flex flex-col mt-10 mb-10 gap-10">
        <li className="flex items-center gap-24 justify-center flex-wrap w-full">
          <Image
            src="/yx1/image_1.jpg"
            alt="the headphone"
            width={540}
            height={560}
          />
          <div className="flex flex-col gap-5 text-center items-center">
            <p className="letter_space_2">NEW PRODUCT</p>
            <h2 className="text-4xl">YX1 WIRELESS EARPHONES</h2>
            <p className="w-96">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <div className="w-full flex gap-5 items-center flex-wrap flex-col">
              <button className="btn1">Add to cart</button>
              <Link href="/products/4" className="btn1">
                See Product
              </Link>
            </div>
          </div>
        </li>
      </ul>
      <Advice />
      <LinkImg />
    </div>
  );
};

export default page;
