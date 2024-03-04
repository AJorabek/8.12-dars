import Link from "next/link";
import LinkImg from "./components/LinksImg";
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>
        <section className="main_section">
          <div className="w-full main_container container p-5 flex text_side items-center gap-2">
            <div className="flex flex-col gap-11">
              <p className="letter_space">NEW PRODUCT</p>
              <h2 className="text-5xl w-96">XX99 Mark II Headphones</h2>
              <p className="text-lg w-full">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <a href="/headphones" className="btn1">
                See Product
              </a>
            </div>
            <Image
              width={450}
              height={450}
              src="/home/hero.jpg"
              alt="there is a hero jpg img what it's black headphones you can use easily and movely"
            />
          </div>
        </section>
        <section className="mt-10 mb-10">
          <div className="container">
            <ul className="flex flex-col gap-16">
              <li className="bg-orange-400 flex justify-between flex-wrap gap-11 p-16 items-center">
                <Image src="/home/speakers.png"width={410} height={490} alt="speaker" />
                <div className="flex flex-col gap-11 items-start">
                  <h2 className="uppercase text-4xl text-white">zx9 speaker</h2>
                  <p className="text-gray-600">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                  <Link href='/speakers' className="btn2 w-52">See Products</Link>
                </div>
              </li>
              <li className="relative">
                <div className="absolute top-36 left-16 flex flex-col gap-5">
                  <h2 className="text-3xl">ZX7 SPEAKER</h2>
                  <a href="/speakers" className="btn2">See Products</a>
                </div>
                <Image width={1900} height={600} src="/home/zx7.jpg" alt="" />
              </li>
              <li className="flex items-center justify-center flex-wrap gap-10">
                <Image width={540} height={320} src="/home/earphone.jpg" alt="speaker" />
                <div className="h-80 flex items-center p-10 gap-5 justify-center text-center flex-col" style={{width:"540px",background:"#F1F1F1"}}>
                  <h2 className="text-3xl">YX1 EARPHONES</h2>
                  <a href="/earphones" className="btn2">See Products</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <LinkImg/>
        </section>
      </div>
    </>
  );
}
