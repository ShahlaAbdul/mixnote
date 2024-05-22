import { Link } from "react-router-dom";
import "./style.scss";
function Navbar() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="nav_logo">
            <Link to={"/"}>Mixnote</Link>
            <div className="navbar">
              <ul>
                <li>
                  {" "}
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>About</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Gallery</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Login</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>element</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
