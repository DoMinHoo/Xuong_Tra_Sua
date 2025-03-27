import React from "react";
import Header from "../../components/cient/header";
import Footer from "../../components/footer";
import sp from "./img/prd2.jpg"

const menuItems = ["Home", "Shop", "About", "Contact"];
const cartItems = [
  {
    id: 1,
    name: "Asgaard sofa",
    image: sp,
    price: 25000000,
    quantity: 1,
  },
];

const CartPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container max-w-screen-xl m-auto grid grid-cols-12 gap-8 my-16">
          <CartTable />
          <CartSummary />
        </section>
      </main>
      <Footer />
    </>
  );
};



const CartTable: React.FC = () => (
  <div className="col-span-8">
    <table className="w-full">
      <thead>
        <tr className="bg-neutral-100 *:py-4 *:font-medium">
          <th className="text-left pl-4">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id} className="*:py-4 *:text-center *font-medium">
            <td className="!text-left">
              <img src={item.image} alt={item.name} className="inline w-[100px] mr-4" />
              <span className="font-medium text-neutral-400">{item.name}</span>
            </td>
            <td className="text-neutral-400">{item.price.toLocaleString()}</td>
            <td>{item.quantity}</td>
            <td>{(item.price * item.quantity).toLocaleString()}</td>
            <td>
              <span className="material-icons text-red-500">delete</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CartSummary: React.FC = () => (
  <div className="col-span-4 bg-neutral-100 p-8">
    <h2 className="font-semibold text-2xl mb-4">Cart Total</h2>
    <hr className="border-[#a3a3a3] mb-5" />
    <p className="font-medium flex justify-between items-center mb-4">
      <span>Subtotal</span>
      <span className="text-[#a3a3a3]">{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}</span>
    </p>
    <p className="font-medium flex justify-between items-center mb-8">
      <span>Total</span>
      <span className="font-bold text-red-500 text-[20px]">{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}</span>
    </p>
    <a
      href="#"
      className="border border-solid border-yellow-500 text-yellow-500 w-full inline-block text-center py-2 hover:bg-yellow-600 hover:text-white"
    >
      Check out
    </a>
  </div>
);


interface FooterLinksProps {
  title: string;
  links: string[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
  <div>
    <h3 className="font-semibold text-xl mb-4">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default CartPage;