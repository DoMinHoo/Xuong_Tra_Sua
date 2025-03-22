import React from "react";
import Header from "../../../components/cient/header";
import Banner from "../../../components/cient/banner";
import Footer from "../../../components/cient/footer";
import useList from "../../../hooks/useList";
import logo1 from "../../products/img/onf1.png"


const categories = [
  "Cafe Chair",
  "Sofa",
  "Lamp",
  "Carpet",
  "Cabinet",
  "Tea table",
];



const Shop: React.FC = () => {
  const { data } = useList({ resource: "products" })

  return (
    <main>
      <Header />
      {/* <Banner/> */}
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
            {data?.data?.slice(0, 6).map((product: any, index: number) => (
              <div key={index} className="w-[300px] flex flex-col bg-[#f5f5f5] p-4 rounded-lg shadow-md">
                {/* Hình ảnh sản phẩm */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="hover:scale-110 w-full h-[200px] object-cover duration-500"
                  />
                </div>

                {/* Nội dung sản phẩm */}
                <div className="flex-grow flex flex-col justify-between mt-4">
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p
                      className="text-[#898989] text-sm mt-1 mb-2 line-clamp-2"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                      }}
                    >
                      {product.description}
                    </p>
                    <p className="text-[#ef4444] font-semibold text-xl">{product.price} VND</p>
                  </div>

                  {/* Nút Add to Cart (Cố định xuống dưới) */}
                  <button
                    className="border border-yellow-700 text-yellow-700 w-full py-2 font-semibold text-base 
          hover:bg-yellow-700 hover:text-white mt-4 self-end"
                  >
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
                className={`py-2 ml-2 px-4 inline-block text-white font-bold rounded-md ${page === 1 ? "bg-yellow-600" : "bg-neutral-400"
                  }`}
              >
                {page}
              </a>
            ))}
            <a
              href="#"
              className="py-2 ml-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md"
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
              <img src={logo1} alt="Feature" />
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
