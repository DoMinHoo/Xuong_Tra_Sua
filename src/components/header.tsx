import React from 'react'

import logo from "../pages/Client/img/logo.png"

const Header = () => {
  return (
    <header>
      <section className="container max-w-screen-xl m-auto flex items-center justify-between py-4">
        <img src={logo} alt="Logo" />
        <ul className="flex gap-8 font-medium text-xl">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <li key={item} className="hover:text-orange-200">
              <a href="">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {["person", "search", "favorite", "shopping_cart"].map((icon) => (
            <span key={icon} className="material-symbols-outlined">
              {icon} abc
            </span>
          ))}
        </div>
      </section>

    </header>
  )
}

export default Header