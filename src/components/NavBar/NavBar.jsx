
import CartWidget from "./CartWidget"; 
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="navContainer">
        <Link to="/">
          <h1 className="brand">StyleSphere</h1>
        </Link>
        <nav className="links">
          <Link to="/category/Moda">Moda</Link>
          <Link to="/category/tecnologia">Tecnologia</Link>
          <Link to="/category/gaming">Gaming</Link>
          <Link to="/category/outlet">Outlet</Link>
        </nav>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
