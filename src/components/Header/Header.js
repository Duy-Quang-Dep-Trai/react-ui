import React, { useEffect, useState } from "react";
import "./Header.css";
import "./HeaderResponsive.css";
import logo from "../../assets/logo.png";
import accountIcon from "../../assets/account.png";
import cartIcon from "../../assets/shopping-cart.png";
import dropdownIcon from "../../assets/Dropdown.png";
import { Link } from "react-router-dom";

function Header() {
  const [openLang, setOpenLang] = useState(false);
  const [open, setOpen] = useState(false);

  // Khóa scroll khi mở menu + đóng bằng phím ESC
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="row align-center space-between">
            {/* Logo trái */}
            <div className="col col-logo">
              <Link to="/" className="logo" onClick={() => setOpen(false)}>
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
                  <button
                    type="button"
                    className="lang-btn"
                    aria-label="Chọn ngôn ngữ"
                    aria-expanded={openLang}
                    aria-controls="lang-menu"
                    onClick={() => setOpenLang((v) => !v)}
                  >
                    <img src={dropdownIcon} alt="" className="lang-badge" />
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
      </header>

      {/* Backdrop */}
      {open && (
        <div
          className="mobile-backdrop is-active"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer mobile */}
      <nav
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-header">
          <img src={logo} alt="Biaken.cz" className="mobile-logo" />
          <button
            className="mobile-close"
            aria-label="Đóng menu"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>

        <div className="mobile-nav">
          <Link to="/" className="mobile-link" onClick={() => setOpen(false)}>
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
        </div>

        <div className="mobile-lang">
          <span role="" aria-label="VN">
            🇻🇳
          </span>
          <span>VN</span>
        </div>

        <div className="mobile-actions-drawer">
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
      </nav>
    </>
  );
}

export default Header;
