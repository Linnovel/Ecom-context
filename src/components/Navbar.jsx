import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { ShoppingCardContext } from "../context/ShoppingCardProvider";

const Navbar = () => {
  const context = useContext(ShoppingCardContext);

  return (
    <nav className="flex justify-between items-centerfont-light py-5 px-8 text-sm  fixed w-full top-0">
      <ul className="flex items-center gap-2 ">
        <li className="font-semibold text-lg">
          <NavLink
            className={({ isActive }) => {
              `nav-link ${isActive} ? 'active' : ''`;
            }}
            to="home"
          >
            Logo
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              `nav-link ${isActive} ? 'active' : ''`;
            }}
            to="home"
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              `nav-link ${isActive} ? 'active' : ''`;
            }}
            to="clothes"
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              `nav-link ${isActive} ? 'active' : ''`;
            }}
            to="electronics"
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              `nav-link ${isActive} ? 'active' : ''`;
            }}
            to="toys"
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              `nav-link ${isActive} ? 'active' : ''`;
            }}
            to="others"
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-2">
        <li className="text-green-800">micorreo@correo.com</li>
        <li>
          <NavLink
            className={({ isActive }) => {
              `nav-link ${isActive} ? 'active' : ''`;
            }}
            to="orders"
          >
            My Orders
          </NavLink>
        </li>
        <li className="flex gap-1 items-center">
          (<AiOutlineShoppingCart /> {context.countItems})
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              `nav-link ${isActive} ? 'active' : ''`;
            }}
            to="account"
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              `nav-link ${isActive} ? 'active' : ''`;
            }}
            to="signin"
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
