//import { useState } from 'react'
//import './App.css'
//import css from './App.module.css';
import { Routes, Route, Link } from "react-router-dom";
//import clsx from 'clsx';
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from "path/to/pages/NotFound"; //збігатиметься з будь-яким URL, але він буде обраний тільки в тому випадку, якщо жоден інший маршрут не підійде
import ProductDetails from "path/to/pages/ProductDetails";
import Mission from "path/to/components/Mission";
import Team from "path/to/components/Team";
import Reviews from "path/to/components/Reviews";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

export default function App () {
  return (
    <div>
      {/* <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}
