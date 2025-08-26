import React, { useEffect, useState } from "react";
import "./Header.css";
import "./HeaderResponsive.css";
import logo from "../../assets/logo.png";
import accountIcon from "../../assets/account.png";
import cartIcon from "../../assets/shopping-cart.png";
import dropdownIcon from "../../assets/Dropdown.png";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <header className="navbar">
      <div className="container">
        <div className="row align-center space-between">
          {/* Logo trái */}
          <div className="col col-logo">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>

          {/* MENU DESKTOP (ẩn trên mobile) */}
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

          {/* ICONS DESKTOP (ẩn trên mobile) */}
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
                <button type="button" title="Ngôn ngữ">
                  <img src={dropdownIcon} alt="Dropdown" />
                </button>
              </div>
            </div>
          </div>

          {/* NHÓM ICON MOBILE (hiện trên mobile) */}
          <div className="mobile-actions">
            <Link to="/profile" className="icon-account" title="Hồ sơ">
              <img src={accountIcon} alt="User Icon" />
            </Link>

            <Link to="/cart" className="icon-wrapper" title="Giỏ hàng">
              <img src={cartIcon} alt="Cart Icon" />
              <span className="badge">12</span>
            </Link>

            <button
              className="hamburger"
              aria-label="Mở menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer/mobile-menu & backdrop giữ nguyên như bạn đang có */}
      {/* ... */}
    </header>
  );
}
export default Header;
