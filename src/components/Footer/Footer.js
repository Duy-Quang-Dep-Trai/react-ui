import "./Footer.css";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import Logo from "../../assets/logo.svg";
import ViewPort from "../../assets/viewport.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col logo-vietpot-wrapper">
          <div className="logo-col">
            <img src={Logo} alt="Heineken Logo" className="logo" />
            <div className="social-icons">
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
              <img src={Twitter} alt="X" />
            </div>
          </div>
          <div className="vietpot-col">
            <img src={ViewPort} alt="Vietpot Logo" className="vietpot-logo" />
            <p className="partner-desc">
              Vietpot, là đối tác đồng hành cùng Heineken.
            </p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-col company-col">
            <h4>Công ty</h4>
            <ul>
              <li>Giới thiệu về chúng tôi</li>
              <li>Sự nghiệp</li>
              <li>Báo chí</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div className="footer-col product-col">
            <h4>Sản phẩm</h4>
            <ul>
              <li>Bia</li>
              <li>Hàng hóa</li>
              <li>Thẻ quà tặng</li>
              <li>Phiên bản đặc biệt</li>
            </ul>
          </div>
          <div className="footer-col update-col">
            <h4>Cập nhật</h4>
            <p>
              Đăng ký nhận bản tin của chúng tôi để nhận thông tin cập nhật và
              khuyến mãi mới nhất.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Địa chỉ email" />
              <button>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-inner">
          <p>@2024, Vietpot Agentura s.r.o. - designed by Duy Quang</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
// This is a simple Footer component for a React application.
