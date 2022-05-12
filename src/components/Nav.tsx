import "./nav.css";
import { BiHome } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list--item">
          <BiHome /> 
          <Link to="/" className="nav__list--name">Home</Link>
          </li>
        <li className="nav__list--item">
          <FaRegMoneyBillAlt /> 
          <Link to="/create" className="nav__list--name">New saving</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;