import React from "react";
import Header from "../../../components/cient/header";
import Banner from "../../../components/cient/banner";
import Footer from "../../../components/cient/footer";

const categories = [
  "Cafe Chair",
  "Sofa",
  "Lamp",
  "Carpet",
  "Cabinet",
  "Tea table",
];

const products = new Array(9).fill({
  name: "Syltherine",
  description: "Stylish cafe chair",
  price: "2.500.000đ",
  image: "img/prd1.jpg",
});

const Shop: React.FC = () => {
  return (
    <main>
        <Header />
        <Banner/>
      <section className="container max-w-screen-xl grid grid-cols-12 gap-8 m-auto mt-16">
        <div className="col-span-3">
          <h2 className="font-semibold text-xl mb-4">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className="font-medium text-[#737373] mb-2 hover:text-yellow-600"
              >
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index}>
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="hover:scale-125 duration-1000"
                  />
                </div>
                <div className="bg-[#f5f5f5] p-4">
                  <h3 className="font-semibold text-xl">{product.name}</h3>
                  <p className="text-[#898989] text-base mt-1 mb-2">
                    {product.description}
                  </p>
                  <p className="text-[#ef4444] font-semibold text-xl mb-3">
                    {product.price}
                  </p>
                  <button className="border border-solid border-yellow-700 text-yellow-700 w-full py-2 font-semibold text-base hover:bg-yellow-700 hover:text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8">
            {[1, 2, 3].map((page) => (
              <a
                key={page}
                href="#"
                className={`py-2 px-4 inline-block text-white font-bold rounded-md ${
                  page === 1 ? "bg-yellow-600" : "bg-neutral-400"
                }`}
              >
                {page}
              </a>
            ))}
            <a
              href="#"
              className="py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md"
            >
              Next
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#fff7ed] py-16 mt-16">
        <div className="container max-w-screen-xl m-auto grid grid-cols-4">
          {new Array(4).fill(null).map((_, index) => (
            <div key={index} className="flex gap-5 items-center">
              <img src="img/onf1.png" alt="Feature" />
              <div>
                <h3 className="font-semibold text-xl mb-1">High Quality</h3>
                <p className="text-[#898989]">Crafted from top materials</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Shop;
