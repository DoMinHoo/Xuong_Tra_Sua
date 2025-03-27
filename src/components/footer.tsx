import React from "react";

import logo from "../pages/Client/img/logo.png";



const sitemapLinks = ["Home", "Shop", "About", "Contact"];
const helpLinks = ["Payment Options", "Returns", "Privacy Policies"];
const locationInfo = ["support@euphoria.in", "Ahmedabad Main Road", "Udaipur, India- 313002"];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#262626] text-white pt-16 pb-8">
      <div className="container max-w-screen-xl m-auto grid grid-cols-4 gap-8 mb-16">
        <div>
          <img src={logo} alt="Logo" className="mb-4" />
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>

        <FooterSection title="Sitemap" items={sitemapLinks} />
        <FooterSection title="Help" items={helpLinks} />
        <FooterSection title="Location" items={locationInfo} />
      </div>

      <hr />
      <p className="text-center mt-8">
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
    </footer>
  );
};

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div>
    <h3 className="font-semibold text-xl mb-4">{title}</h3>
    <ul>
      {items.map((item) => (
        <li key={item} className="mb-4">
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
