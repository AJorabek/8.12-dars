import Link from "next/link";
import Image from "next/image";

const Advice = () => {
  return (
    <div>
      <h2 className="text-center text-3xl mt-11 mb-11">You may also like</h2>
      <ul className="flex flex-wrap gap-11 items-center justify-around">
        <li className="advice_item">
          <Image
          className="product_img"
            width={150}
            height={193}
            src="/shared/image-category-thumbnail-headphones.png"
            alt="the product"
          />
          <h3>XX99 MARK I</h3>
          <Link href="/headphones" className="btn1">
            See Product
          </Link>
        </li>
        <li className="advice_item">
          <Image
            src="/shared/image-xx59-headphones.jpg"
            height={190}
            width={199}
            alt="the product"
          />
          <h3>XX59</h3>
          <Link href="/headphones" className="btn1">
            See Product
          </Link>
        </li>
        <li className="advice_item">
          <Image
            src="/shared/image-category-thumbnail-speakers.png"
            height={143}
            width={172}
            alt="the product"
          />
          <h3>ZX9 SPEAKER</h3>
          <Link href="/speakers" className="btn1">
            See Product
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Advice;
