import React, { useEffect, useState } from "react";
import "./Header.css";
import "./HeaderResponsive.css"; // 👈 responsive tách riêng
import logo from "../../assets/logo.png";
import accountIcon from "../../assets/account.png";
import cartIcon from "../../assets/shopping-cart.png";
import dropdownIcon from "../../assets/Dropdown.png";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  // khoá scroll khi mở menu
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <header className="navbar">
      <div className="container">
        <div className="row align-center space-between">
          <div className="col col-logo">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>

          {/* MENU DESKTOP */}
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

          {/* ICONS DESKTOP */}
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

          {/* HAMBURGER (mobile) */}
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

      {/* DRAWER MOBILE */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-header">
          <img src={logo} alt="Logo" className="mobile-logo" />
          <button
            className="mobile-close"
            aria-label="Đóng menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="mobile-nav">
          <Link
            to="/"
            className="mobile-link active"
            onClick={() => setOpen(false)}
          >
            Trang chủ
          </Link>
          <Link
            to="/about"
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            Giới thiệu
          </Link>
          <Link
            to="/product"
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            Sản phẩm
          </Link>
          <Link
            to="/history"
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            Lịch sử
          </Link>
          <Link
            to="/contact"
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            Liên hệ
          </Link>
        </nav>

        <div className="mobile-lang">
          <span className="flag">🇻🇳</span>
          <span>VN</span>
          <span className="caret">▾</span>
        </div>

        <div className="mobile-actions">
          <Link
            to="/login"
            className="btn-login"
            onClick={() => setOpen(false)}
          >
            Đăng nhập
          </Link>
          <Link
            to="/register"
            className="txt-register"
            onClick={() => setOpen(false)}
          >
            Đăng ký
          </Link>
        </div>
      </div>

      {open && (
        <div className="mobile-backdrop" onClick={() => setOpen(false)} />
      )}
    </header>
  );
}
export default Header;
