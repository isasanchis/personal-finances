import "./styles.css";
import { BiHome } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
      <h1 className="nav__title">Finances</h1>
        <ul className="nav__list">
          <li className="nav__list--item active">
            <BiHome className="nav__list--icon" /> 
            <Link to="/" className="nav__list--name">
              Home
            </Link>
            </li>
          <li className="nav__list--item active">
            <FaRegMoneyBillAlt className="nav__list--icon" /> 
            <Link to="/create" className="nav__list--name">
              New saving
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;