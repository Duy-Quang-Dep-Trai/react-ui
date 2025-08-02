import "./ProductHeader.css";
import logo from "../../assets/logo.png";
import dropdownIcon from "../../assets/Dropdown.png";
import { Link } from "react-router-dom";

function ProductHeader() {
  return (
    <header className="navbar">
      {/* Logo + menu giống Header */}
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
                  <a href="/about">Giới thiệu</a>
                </li>
                <li className="menu-item">
                  <a href="/history">Lịch sử</a>
                </li>
                <li className="menu-item">
                  <a href="/contact">Liên hệ</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Phần bên phải: nút đăng nhập + đăng ký */}
          <div className="col col-icons">
            <div className="row icons">
              <Link to="/register" className="auth-register">
                Đăng ký
              </Link>
              <Link to="/login" className="auth-button login">
                Đăng nhập
              </Link>
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

export default ProductHeader;
