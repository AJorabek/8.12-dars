import Image from "next/image";
import LinkImg from "../components/LinksImg";
import Link from "next/link";

const page = async () => {
  return (
    <div>
      <div className="p-20 font-bold uppercase background-links">
        <h2 className="text-center text-white text-3xl">Headphones</h2>
      </div>
      <ul className="container flex flex-col mt-10 mb-10 gap-10">
        <li className="flex items-center gap-24 justify-center flex-wrap w-full">
          <Image
            src="/x592/image_1.jpg"
            alt="the headphone"
            width={540}
            height={560}
          />
          <div className="flex flex-col gap-5 text-center items-center">
            <p className="letter_space_2">NEW PRODUCT</p>
            <h2 className="text-4xl">XX99 Mark II Headphones</h2>
            <p className="w-96">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <div className="w-full flex gap-5 items-center flex-wrap flex-col">
              <button className="btn1">Add to cart</button>
            </div>
          </div>
        </li>
        <li className="flex items-center gap-24 justify-center flex-wrap w-full">
          <div className="flex flex-col gap-5 text-center items-center">
            <h2 className="text-4xl">XX99 Mark I Headphones</h2>
            <p className="w-96">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <div className="w-full flex gap-5 items-center flex-wrap flex-col">
              <button className="btn1">Add to cart</button>
            </div>
          </div>
          <Image
            src="/x591/image_1.jpg"
            alt="the headphone"
            width={540}
            height={560}
          />
        </li>
        <li className="flex items-center gap-24 justify-center flex-wrap w-full">
          <Image
            src="/xx593/image_1.jpg"
            alt="the headphone"
            width={540}
            height={560}
          />
          <div className="flex flex-col gap-5 text-center items-center">
            <h2 className="text-4xl">XX59 Headphones</h2>
            <p className="w-96">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <div className="w-full flex gap-5 items-center flex-wrap flex-col">
              <button className="btn1">Add to cart</button>
            </div>
          </div>
        </li>
      </ul>
      <LinkImg />
    </div>
  );
};

export default page;
