import Link from "next/link";

const Modal = () => {
  return (
    <>
      <div
        className={`absolute mt-96  right-0 -top-96 hidden flex-col bg-gray-500  text-black w-52 p-5 h-96`}
        id="modal"
      >
        <div className="flex items-center justify-between">
          <h3>
            Cart(<span id="product-counter">3</span>)
          </h3>
          <button>Remove all</button>
        </div>
        <ul className="products-list" id="products-list"></ul>
        <div className="flex items-center justify-between mb-56">
          <h3>Total</h3>
          <span id="total-sum">$3499</span>
        </div>
        <Link href="/checkout" className="btn1">
          Checkout
        </Link>
      </div>
    </>
  );
};

export default Modal;
