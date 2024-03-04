import Image from 'next/image'
const NearFooter = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-11 p-10 flex-wrap">
        <div className="w-full max-w-96 flex flex-col gap-5">
          <h2 className="near-footer-title">
            Bringing you the <span className="text-orange-400">best</span> audio
            gear
          </h2>
          <p className="text-black">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <Image
          src="/shared/man.jpg"
          width={350}
          height={350}
          alt="the man listening audio with headphones"
        />
      </div>
    </div>
  );
};

export default NearFooter;
