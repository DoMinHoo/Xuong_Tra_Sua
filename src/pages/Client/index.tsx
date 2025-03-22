import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import banner from "./img/banner.jpg";
import sp from "./img/APL100-thumb-6.jpg"
import sp2 from "./img/gallerry.jpg"



interface NewsCardProps {
  imgSrc: string;
  date: string;
  title: string;
  link: string;
}




const NewsCard: (React.FC<NewsCardProps>) = ({ imgSrc, date, title, link }) => {
  return (
    <div>
      <div>
        <img src={imgSrc} alt={title} />
      </div>
      <div>
        <p className="text-[#9ca3af] font-semibold text-sm flex items-center mt-4 mb-1">
          <span className="material-symbols-outlined mr-2">calendar_month</span>
          {date}
        </p>
        <h3 className="font-semibold text-xl mb-3">{title}</h3>
        <a href={link} className="font-semibold text-red-600 text-base flex items-center">
          Xem chi tiết
          <span className="material-symbols-outlined m-2">arrow_forward</span>
        </a>
      </div>
    </div>
  );
};

const ProductCard = ({ imgSrc, name, description, price }: any) => (
  <div>
    <div className="overflow-hidden">
      <img src={imgSrc} alt={name} className="hover:scale-125 duration-1000" />
    </div>
    <div className="bg-[#f5f5f5] p-4">
      <h3 className="font-semibold text-xl">{name}</h3>
      <p className="text-[#898989] text-base mt-1 mb-2">{description}</p>
      <p className="text-[#ef4444] font-semibold text-xl mb-3">{price}</p>
      <button className="border border-solid border-yellow-700 text-yellow-700 w-full py-2 font-semibold text-base hover:bg-yellow-700 hover:text-white">
        Add to cart
      </button>
    </div>
  </div>
);

const Gallery = () => (
  <div className="grid grid-cols-3 gap-8">
    {[...Array(6)].map((_, index) => (
      <img key={index} src={sp2} alt="Gallery" />
    ))}
  </div>
);


const Feature = ({ imgSrc, title, description }: any) => (
  <div className="flex gap-5 items-center">
    <img src={imgSrc} alt={title} />
    <div>
      <h3 className="font-semibold text-xl mb-1">{title}</h3>
      <p className="text-[#898989]">{description}</p>
    </div>
  </div>
);



const HomePage = () => {
  return (
    <>
      <Header />
      <section>
        <img src={banner} alt="Banner" className="w-full" />
      </section>
      <section className="container max-w-screen-xl m-auto mt-16">
        <h2 className="font-semibold text-[40px]">New Product</h2>
        <div className="grid grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <ProductCard key={index} imgSrc={sp} name="Syltherine" description="Stylish cafe chair" price="2.500.000đ" />
          ))}
        </div>
      </section>
      <section className="container max-w-screen-xl m-auto mt-16">
        <h2 className="font-semibold text-[40px]">Gallery</h2>
        <Gallery />
      </section>

      <section className="bg-[#fff7ed] py-16 mt-16">
        <div className="container max-w-screen-xl m-auto grid grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <Feature key={index} imgSrc="{}" title="High Quality" description="Crafted from top materials" />
          ))}
        </div>

      </section>
      <Footer />
    </>
  );
};

export default HomePage;
