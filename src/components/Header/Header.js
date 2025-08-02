import "./Header.css";
import logo from "../../assets/logo.png";
import accountIcon from "../../assets/account.png";
import cartIcon from "../../assets/shopping-cart.png";
import dropdownIcon from "../../assets/Dropdown.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      {/* Logo + menu giống nhau */}
      <div className="container">
        <div className="row align-center space-between">
          <div className="col col-logo">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>
          <div className="col col-menu">
            <nav className="menu">
              <ul className="row menu-list">
                <li className="menu-item">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="menu-item">
                  <Link to="/product">Sản phẩm</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about">Giới Thiệu</Link>
                </li>
                <li className="menu-item">
                  <Link to="/history">Lịch sử</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact">Liên hệ</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Phần icon hồ sơ + giỏ hàng */}
          <div className="col col-icons">
            <div className="row icons">
              <div className="icon-account">
                <Link to="/profile" title="Hồ sơ">
                  <img src={accountIcon} alt="User Icon" />
                </Link>
              </div>
              <div className="icon-wrapper">
                <Link to="/cart" title="Giỏ hàng">
                  <img src={cartIcon} alt="Cart Icon" />
                  <span className="badge">12</span>
                </Link>
              </div>
              <div className="icon-wrapper dropdown">
                <a href="#" title="Ngôn ngữ">
                  <img src={dropdownIcon} alt="Dropdown" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
