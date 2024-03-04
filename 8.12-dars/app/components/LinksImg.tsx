import Link from "next/link";
import Image from 'next/image'

const LinkImg = () => {
  return (
    <div className="links_img_wrapper">
      <ul className="flex items-center flex-wrap gap-11 justify-around">
        <li className="link_img_item">
          <Image
            className="link_img_item_img"
            width={121}
            height={121}
            src="/shared/image-category-thumbnail-headphones.png"
            alt="headphone img"
          />
          <h3 className="font-bold">HEADPHONES</h3>
          <Link className="btn3" href="/headphones">
            SHOP
          </Link>
        </li>
        <li className="link_img_item">
          <Image
            className="link_img_item_img"
            src="/shared/image-category-thumbnail-speakers.png"
            width={121}
            height={121}
            alt="speaker img"
          />
          <h3 className="font-bold">SPEAKERS</h3>
          <Link className="btn3" href="/speakers">
            SHOP
          </Link>
        </li>
        <li className="link_img_item">
          <Image
            className="link_img_item_img"
            width={121}
            height={121}
            src="/shared/image-category-thumbnail-earphones.png"
            alt="earphone img"
          />
          <h3 className="font-bold">EARPHONES</h3>
          <Link className="btn3" href="/earphones">
            SHOP
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkImg;
