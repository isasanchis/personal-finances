import "./nav.css";
import { BiHome } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <a href="#">
          <li className="nav__list--item">
            <BiHome /> 
            <span className="nav__list--name">Home</span>
          </li>
        </a>
        <a href="#">
          <li className="nav__list--item">
            <FaRegMoneyBillAlt /> 
            <span className="nav__list--name">New saving</span>
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;