import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#262626] text-white pt-16 pb-8">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-4 gap-8 mb-16">
        <div>
          <img src="/img/logo.png" alt="Logo" className="mb-4" />
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Sitemap</h3>
          <ul>
            <li className="mb-4"><Link to="/">Home</Link></li>
            <li className="mb-4"><Link to="/shop">Shop</Link></li>
            <li className="mb-4"><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Help</h3>
          <ul>
            <li className="mb-4"><Link to="/payment-options">Payment Options</Link></li>
            <li className="mb-4"><Link to="/returns">Returns</Link></li>
            <li><Link to="/privacy-policies">Privacy Policies</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Location</h3>
          <ul>
            <li className="mb-4"><a href="mailto:support@euphoria.in">support@euphoria.in</a></li>
            <li className="mb-4">Ahmedabad Main Road</li>
            <li>Udaipur, India- 313002</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-center mt-8">Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
    </footer>
  );
};

export default Footer;