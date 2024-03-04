"use client";

import Link from "next/link";

const page = () => {
  return (
    <form className="container form_site gap-11" id="form_site">
      <h1 className="mb-10 mt-10 text-4xl font-bold">CHECKOUT</h1>
      <div className="form-wrapper">
        <h3 className="letter_space_3">Billing Details</h3>
        <div className="flex w-full gap-5 flex-wrap">
          <div className="flex flex-col items-start w-1/2 gap-2">
            <h4>Name</h4>
            <input type="text" placeholder="Alexei Ward" required />
          </div>
          <div className="flex flex-col items-start w-1/3 gap-2">
            <h4>Email Address</h4>
            <input type="text" placeholder="alexei@gmail.com" required />
          </div>
          <div className="flex flex-col items-start w-1/2 gap-2">
            <h4>Phone Number</h4>
            <input type="number" placeholder="+1 202-555-0136" required />
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        <h3 className="letter_space_3">shipping info</h3>
        <div className="flex w-full gap-5 flex-wrap">
          <div className="flex flex-col items-start w-full gap-2">
            <h4>Address</h4>
            <input type="text" placeholder="1137 Williams Avenue" required />
          </div>
          <div className="flex flex-col items-start w-1/2 gap-2">
            <h4>ZIP Code</h4>
            <input type="number" placeholder="10001" maxLength={5} required />
          </div>
          <div className="flex flex-col items-start w-1/3 gap-2">
            <h4>City</h4>
            <input type="text" placeholder="New York" required />
          </div>
          <div className="flex flex-col items-start w-1/2 gap-2">
            <h4>Country</h4>
            <input type="text" placeholder="United States" required />
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        <h3 className="letter_space_3">payment details</h3>
        <div className="flex w-full gap-5 flex-wrap">
          <div className="flex items-start justify-between w-full">
            <h3>Payment Method</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center w-full radio_site">
                <input type="radio" />
                <h4 className="w-full">e-Money</h4>
              </div>
              <div className="flex items-center w-full radio_site">
                <input type="radio" />
                <h4 className="w-full">Cash on Delivery</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-5 items-center flex-wrap mt-5">
          <div className="flex flex-col items-start w-1/2 gap-2">
            <h4>e-Money Number</h4>
            <input
              type="number"
              placeholder="238521993"
              maxLength={9}
              required
            />
          </div>
          <div className="flex flex-col items-start w-1/3 gap-2">
            <h4>e-Money PIN</h4>
            <input type="number" placeholder="6891" maxLength={4} required />
          </div>
        </div>
      </div>

      <div
        className={`absolute mt-96  right-0 -top-96 flex-col bg-gray-500  text-black w-52 p-5 h-96`}
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
      </div>
      <Link
        href="/succesfullyPayment"
        className="w-full text-white mt-36 "
        onSubmit={(e) => {
          <Link href="/succesfullyPayment"></Link>;
        }}
        style={{ padding: "15px 30px", background: "#d87d4a" }}
      >
        CONTINUE & PAY
      </Link>
    </form>
  );
};

export default page;
