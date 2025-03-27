import React from "react";
import Header from "../../components/cient/header";
import Footer from "../../components/cient/footer";
import useOne from "../../hooks/useOne";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const {isLoading, error} = useOne({resource:"products", id:Number(id)});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
        <Header/>
        <main className="container max-w-screen-xl m-auto">
      <section>
        <div className="grid grid-cols-2 gap-8">
          <div className="grid grid-cols-6 gap-8">
            <div className="cols-span-1 *:mb-4">
              {[...Array(6)].map((_, i) => (
                <img key={i} src="./public/img/New1.jpg" alt="" />
              ))}
            </div>
            <div className="col-span-5">
              <img src="./public/img/New1.jpg" alt="" />
            </div>
          </div>
          <div>
            <p className="font-medium text-xl">Asgaard sofa</p>
            <p className="font-medium text-[40px] text-[#9f9f9f] my-2">RS.25,000.000</p>
            <div className="flex items-center">
              <div className="*:text-[#FFC700] border-r border-solid border-neutral-400 pr-4 mr-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons">star</span>
                ))}
              </div>
              <span className="font-medium text-sm text-[#9f9f9f]">5 Customer Review</span>
            </div>
            <p className="font-medium my-4">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>
            <div>
              <p className="text-[#a3a3a3] mb-1">Size</p>
              <div className="flex gap-4">
                {['L', 'XL', 'XS'].map(size => (
                  <div key={size} className="bg-neutral-400 w-[30px] flex h-[30px] items-center justify-center hover:bg-yellow-600 hover:text-white rounded">
                    <button>{size}</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 mb-8">
              <p className="text-[#a3a3a3] mb-1">Colors</p>
              <div className="flex gap-4">
                {["#816DFA", "#000000", "#B88E2F"].map(color => (
                  <div key={color} style={{ backgroundColor: color }} className="w-[30px] h-[30px] rounded-full"></div>
                ))}
              </div>
            </div>
            <div>
              <form>
                <div className="border border-solid border-neutral-400 w-fit rounded inline-block">
                  <button className="py-[8px] px-4">-</button>
                  <input type="text" defaultValue="1" className="w-[30px] text-center" />
                  <button className="py-2 px-4">+</button>
                </div>
                <button type="submit" className="border border-solid border-yellow-600 text-yellow-600 rounded py-2 px-10 ml-3 hover:bg-yellow-600 hover:text-white">Add To Cart</button>
                <button type="submit" className="border border-solid text-yellow-600 rounded py-2 px-10 ml-3 hover:bg-black hover:text-white">+ Compare</button>
              </form>
            </div>
            <hr className="text-neutral-400 mt-8 mb-3" />
            <div className="*:mb-3 *:text-[#a3a3a3]">
              <p>SKU: <span>APL100</span></p>
              <p>Category: <span>Chair</span></p>
              <p>Tags: <span>Chair, Furniture, Wood</span></p>
            </div>
          </div>
        </div>
        <div className="mt-20">
      <div className="font-semibold mr-16 text-xl border-b pb-4 justify-center flex gap-8 text-[#a3a3a3]">
        <a href="" className="hover:text-black">Description</a>
        <a href="" className="hover:text-black">Additional Information</a>
        <a href="" className="hover:text-black">Reviews [5]</a>
      </div>
      <div className="text-[#a3a3a3] font-medium">
        <p className="mb-2">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="mb-8">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
        <div className="flex gap-8">
          <img src="img/Group 107.png" alt="" />
          <img src="img/Group 107.png" alt="" />
        </div>
      </div>
    </div>
    <section className="my-16">
            <div className="text-center mb-4">
                <h2 className="font-semibold text-[40px]">Related Products</h2>
            </div>
            <div className="grid grid-cols-4 gap-8">
                {[...Array(4)].map((_, index) => (
                    <div key={index}>
                        <div className="overflow-hidden">
                            <img src="img/APL100-thumb-6.jpg" alt="" className="hover:scale-125 duration-1000" />
                        </div>
                        <div className="bg-[#f5f5f5] p-4">
                            <h3 className="font-semibold text-xl">Syltherine</h3>
                            <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
                            <p className="text-[#ef4444] font-semibold text-xl mb-3">2.500.000đ</p>
                            <button className="border border-solid border-yellow-700 text-yellow-700 w-full py-2 font-semibold text-base hover:bg-yellow-700 hover:text-white">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
                <div className="text-center col-span-4 my-8">
                    <button type="submit" className="border border-solid border-yellow-600 text-yellow-600 rounded py-2 px-10 ml-3 hover:bg-yellow-600 hover:text-white">
                        See more
                    </button>
                </div>
            </div>
        </section>
      </section>
    </main>
    <Footer/>
    </div>
  );
};

export default ProductDetail;
