import "./styles.css";
import { BiHome } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
      <h1 className="nav__title">Finances</h1>
        <ul className="nav__list">
          <Link to="/" className="nav__list--item">
            <li className="nav__list--name">
              <BiHome className="nav__list--icon" /> 
                <p>Home</p>
            </li>
          </Link>
          <Link to="/create" className="nav__list--item">
            <li className="nav__list--name">
              <IoIosAdd className="nav__list--icon" /> 
              <p>Add</p>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;