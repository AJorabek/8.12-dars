"use client";
import Image from "next/image";

const Shop = () => {
  const handleModal = () => {
    console.log("hi");

    let modal = document.getElementById("modal");
    modal?.classList.toggle("hidden");
  };
  return (
    <>
      <Image
        className="cursor-pointer"
        onClick={handleModal}
        src="/shared/cart.svg"
        width={25}
        height={25}
        style={{ objectFit: "contain" }}
        alt="the shopping cart image"
      />
    </>
  );
};

export default Shop;
