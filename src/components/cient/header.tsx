import { Link } from "react-router-dom";


const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <section className="container max-w-screen-xl mx-auto flex items-center justify-between py-4">
        <img src="../public/img/logo.png" alt="Logo" className="h-10" />
        
        <ul className="flex gap-8 font-medium text-xl">
          <li className="hover:text-orange-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-200">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-orange-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-orange-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex gap-4 text-gray-700">
          <span className="material-symbols-outlined cursor-pointer"><Link to={"/login"}>person</Link></span>
          <span className="material-symbols-outlined cursor-pointer">search</span>
          <span className="material-symbols-outlined cursor-pointer">favorite</span>
          <span className="material-symbols-outlined cursor-pointer">shopping_cart</span>
        </div>
      </section>
    </header>
    
  );
};

export default Header;
