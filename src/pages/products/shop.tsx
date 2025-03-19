import React from "react";
import Header from "../../components/header";
import banner from "./img/banner.jpg"
import sp1 from "./img/prd1.jpg"
import logo1 from "./img/onf1.png"
import Footer from "../../components/footer";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Spin } from "antd";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}



const ShopPage = () => {

  const queryClient = useQueryClient();


  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/products`);
      console.log(response);
    },
  });
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  if (isError) return <div>{error.message}</div>;
  return (
    <>
      <Header />
      <section>
        <img src={banner} alt="Shop Banner" className="w-full" />
      </section>

      <main className="container max-w-screen-xl grid grid-cols-12 gap-8 m-auto mt-16">
        <div className="col-span-3">
          <h2 className="font-semibold text-xl mb-4">Categories</h2>
          <ul>
            {["Cafe Chair", "Sofa", "Lamp", "Carpet", "Cabinet", "Tea table"].map((category) => (
              <li key={category} className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
                <a href="">{category}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-8">
            {data?.map((item, index) => (
              <div key={item.id || index}>
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.name} className="hover:scale-125 duration-1000" />
                </div>
                <div className="bg-[#f5f5f5] p-4">
                  <h3 className="font-semibold text-xl">{item.name}</h3>
                  <p className="text-[#898989] text-base mt-1 mb-2">{item.description}</p>
                  <p className="text-[#ef4444] font-semibold text-xl mb-3">{item.price}</p>
                  <button className="border border-solid border-yellow-700 text-yellow-700 w-full py-2 font-semibold text-base hover:bg-yellow-700 hover:text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>


          <div className="mt-8">
            {[1, 2, 3].map((page) => (
              <a key={page} href="#" className={`py-2 m-1 px-4 inline-block text-white font-bold rounded-md ${page === 1 ? "bg-yellow-600" : "bg-neutral-400"}`}>
                {page}
              </a>
            ))}
            <a href="#" className="py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md">
              Next
            </a>
          </div>
        </div>
      </main>

      <section className="bg-[#fff7ed] py-16 mt-16">
        <div className="container max-w-screen-xl m-auto grid grid-cols-4">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex gap-5 items-center">
                <img src={logo1} alt="" />
                <div>
                  <h3 className="font-semibold text-xl mb-1">High Quality</h3>
                  <p className="text-[#898989]">Crafted from top materials</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ShopPage;
