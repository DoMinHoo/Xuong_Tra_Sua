import React from "react";

const BlogPost = ({ title }: { title: string }) => {
  return (
    <div className="w-full">
      <div>
        <img src="img/banner.jpg" alt="" className="rounded-lg" />
      </div>
      <div className="flex text-[#9f9f9f] mt-4 gap-8">
        <p className="flex">
          <span className="material-symbols-outlined">person</span>Admin
        </p>
        <p className="flex">
          <span className="material-symbols-outlined">calendar_month</span>16/03/2025
        </p>
        <p className="flex">
          <span className="material-symbols-outlined">sell</span>Wood
        </p>
      </div>
      <div>
        <h2 className="text-4xl font-medium my-8">{title}</h2>
        <div className="text-[#9f9f9f]">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
        </div>
        <div className="my-8">
          <a href="">Read more</a>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="col-span-4">
      <div className="w-full">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <span className="material-symbols-outlined">search</span>
      </div>
      <div className="mt-11 ml-10 gap-4">
        <p className="font-bold text-2xl">Category</p>
        <div className="flex justify-between">
          <div className="*:mt-4 text-[#9f9f9f]">
            <p>Crafts</p>
            <p>Design</p>
            <p>Handmade</p>
            <p>Interior</p>
            <p>Wood</p>
          </div>
          <div className="*:mt-4 text-[#9f9f9f]">
            <p>2</p>
            <p>8</p>
            <p>7</p>
            <p>1</p>
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section className="container max-w-screen-xl m-auto grid grid-cols-12 gap-8 my-16">
      <div className="col-span-8">
        <BlogPost title="Going all-in with millennial design" />
        <BlogPost title="Exploring new ways of decorating" />
        <BlogPost title="Handmade pieces that took time to make" />
        <div className="mt-8 gap-8 text-center">
          <a
            href=""
            className="py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md hover:bg-yellow-400"
          >
            1
          </a>
          <a
            href=""
            className="py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md hover:bg-yellow-400"
          >
            2
          </a>
          <a
            href=""
            className="py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md hover:bg-yellow-400"
          >
            3
          </a>
          <a
            href=""
            className="py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md"
          >
            Next
          </a>
        </div>
      </div>
      <Sidebar />
    </section>
  );
};

export default Blog;
