import "./About.css";
import MuitenPhai from "../../assets/muitenphai.svg";
import MuitenTrai from "../../assets/muitentrai.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
// Swiper core & required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// optional: nếu muốn nút điều hướng & phân trang
import { Navigation, Pagination } from "swiper/modules";

function About() {
  // ===== TESTIMONIALS DATA =====
  const testimonials = [
    {
      rating: 5,
      quote:
        "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
      name: "Lyle Kauffman",
      title: "ABC Restaurant",
      avatar: require("../../assets/Avatar (1).png"), // đặt avatar vào assets
      // photo: require("../../assets/beer-01.jpg"), // ảnh lớn bên phải
    },
    {
      rating: 5,
      quote:
        "Trải nghiệm tốt, giao hàng nhanh, đội ngũ hỗ trợ tận tâm. Heineken giúp sự kiện của chúng tôi thăng hạng.",
      name: "Nguyễn Minh",
      title: "Event Manager",
      avatar: require("../../assets/images.jpg"),
      // photo: require("../../assets/beer-02.jpg"),
    },
    {
      rating: 4,
      quote:
        "Chất lượng đồng nhất và đáng tin cậy . Khách của chúng tôi luôn ấn tượng ngay từ lần đầu tiên.",
      name: "Thu Hà",
      title: "Bar Supervisor",
      avatar: require("../../assets/images.jpg"),
      // photo: require("../../assets/beer-03.jpg"),
    },
  ];

  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  const prev = () =>
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <>
      {/* PHẦN SLIDE GIỚI THIỆU */}
      <section className="about-slide">
        <div className="container">
          <div className="slide-content">
            <div className="slide-left">
              <h1>Heineken: Mở ra thế giới của bạn</h1>
              <p>
                Heineken đã có một lịch sử phong phú từ năm 1864, khi Gerard
                Adriaan Heineken sáng lập công ty tại Amsterdam. Sự hợp tác với
                Vietpot đã mang đến giá trị mới, tập trung vào chất lượng và bền
                vững. Mỗi ngụm Heineken giờ đây không chỉ là trải nghiệm tuyệt
                vời mà còn thể hiện cam kết của chúng tôi với sự xuất sắc.
              </p>
            </div>

            <div className="slide-right">
              <img src={require("../../assets/imageDiv.png")} alt="Heineken" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true"></div>

      {/* PHẦN HỢP TÁC */}
      <section className="partnership-section">
        <div className="glow-bg"></div>
        <div className="container-partnership">
          <h2 className="partnership-title">
            CÂU CHUYỆN HỢP TÁC CỦA CHÚNG TÔI: <br />
            <span>MỘT HÀNH TRÌNH BỀN VỮNG GIỮA HEINEKEN VÀ VIETPOT</span>
          </h2>
          <p className="partnership-description">
            Thành lập năm 1864, Heineken đã từ một nhà máy bia nhỏ ở Amsterdam
            trở thành thương hiệu bia hàng đầu thế giới. Hợp tác với Vietpot,
            chúng tôi mang đến trải nghiệm độc đáo cho người tiêu dùng Việt Nam.
            Các cột mốc quan trọng gồm chai màu xanh biểu tượng ra mắt năm 1886
            và Heineken 0.0 vào năm 2017, thể hiện cam kết đổi mới và chất
            lượng. Chúng tôi cũng chú trọng đến sự bền vững và uống có trách
            nhiệm.
          </p>
          <div className="partnership-image-wrapper">
            <img
              src={require("../../assets/heineken-factory.png")}
              alt="Heineken Brewery"
            />
          </div>
        </div>
      </section>
      <div className="section-divider-full"></div>

      {/* ===== PHẦN CẢM NHẬN KHÁCH HÀNG ===== */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <h2 className="testimonial-heading">CẢM NHẬN CỦA KHÁCH HÀNG</h2>

          <div className="testimonial-content">
            {/* LEFT */}
            <div className="testimonial-left">
              <div className="rating">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>

              <p className="testimonial-quote">“{t.quote}”</p>
              {/* phần của 3 chữ */}

              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <img className="author-avatar" src={t.avatar} alt={t.name} />
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-title">{t.title}</div>
                  </div>
                </div>

                <div className="testimonial-controls">
                  <button
                    className="nav-btn"
                    aria-label="Previous"
                    onClick={prev}
                  >
                    <img src={MuitenTrai} alt="Previous" />
                  </button>
                  <button className="nav-btn" aria-label="Next" onClick={next}>
                    <img src={MuitenPhai} alt="Next" />
                  </button>
                </div>
              </div>

              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === idx ? "active" : ""}`}
                    aria-label={`Chuyển tới đánh giá ${i + 1}`}
                    onClick={() => setIdx(i)}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="testimonial-right">
              <div className="photo-frame">
                <img src={require("../../assets/about.png")}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider-full"></div>

      {/* ===== THẺ REVIEW NHỎ ===== */}
      {/* ===== THẺ REVIEW NHỎ ===== */}
      <section className="mini-reviews">
        <div className="mini-reviews__container">
          <div className="mini-reviews__flush">
            <h3 className="mini-reviews__title">
              VÀ NHIỀU HƠN NỮA TỪ KHÁCH HÀNG CỦA CHÚNG TÔI
            </h3>

            <div className="bleed">
              <Swiper
                spaceBetween={18}
                slidesPerView={4}
                breakpoints={{
                  1100: { slidesPerView: 4 },
                  768: { slidesPerView: 2 },
                  0: { slidesPerView: 1 },
                }}
              >
                {[
                  {
                    name: "Lars van der Meer",
                    role: "Người yêu bia",
                    text: "Heineken là loại bia tôi chọn cho mọi dịp.",
                    avatar: require("../../assets/A man with dark hair smiling and holding a bottle of beer in a lively outdoor gathering with friends..png"),
                  },
                  {
                    name: "Sophie Janssen",
                    role: "Người viết blog ẩm thực",
                    text: "Tôi thích vị giòn, tươi mát của Heineken.",
                    avatar: require("../../assets/profile.png"),
                  },
                  {
                    name: "Johan de Vries",
                    role: "Người làm bia",
                    text: "Cam kết về chất lượng của Heineken là vô song.",
                    avatar: require("../../assets/A brewmaster standing in a well-lit brewery filled with brewing equipment, holding a glass of Heineken beer..png"),
                  },
                  {
                    name: "Eva van den Berg",
                    role: "Người tổ chức sự kiện",
                    text: "Một loại bia hoàn hảo cho bất kỳ buổi gặp gỡ xã hội nào.",
                    avatar: require("../../assets/A group of friends enjoying a lively outdoor gathering while clinking their green bottles of beer..png"),
                  },
                  {
                    name: "Lucas de Jong",
                    role: "Historian",
                    text: "Heineken's history is as rich as its flavor.",
                    avatar: require("../../assets/A historian reflecting on brewing history while standing near a large copper brewing kettle in a cozy, dimly lit brewery..png"),
                  },
                  {
                    name: "Lars van der Meer",
                    role: "Nhà phân tích bia",
                    text: "Heineken là loại bia tôi dùng cho mọi buổi tiệc tùng.",
                    avatar: require("../../assets/A man with dark hair smiling and holding a bottle of beer in a lively outdoor gathering with friends..png"),
                  },
                ].map((it, i) => (
                  <SwiperSlide key={i}>
                    <article className="mini-card">
                      <header className="mini-card__head">
                        <img
                          className="mini-card__avatar"
                          src={it.avatar}
                          alt={it.name}
                        />
                        <div>
                          <div className="mini-card__name">{it.name}</div>
                          <div className="mini-card__role">{it.role}</div>
                        </div>
                      </header>

                      {/* Thân card: vạch dọc + nội dung */}
                      <div className="mini-card__body">
                        <span
                          className="mini-card__bar"
                          aria-hidden="true"
                        ></span>
                        <p className="mini-card__text">{it.text}</p>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HERO ẢNH NỀN ===== */}
      <section className="brand-hero">
        <img
          className="brand-hero__bg"
          src={require("../../assets/image (4).png")}
          alt="Heineken Experience, Amsterdam"
        />
        {/* <div className="brand-hero__overlay" />
        <div className="brand-hero__content">
          <h2 className="brand-hero__heading">
            CHÀO MỪNG ĐẾN VỚI NGÔI NHÀ CỦA HEINEKEN!
          </h2>
          <p className="brand-hero__desc">
            Khám phá hành trình hợp tác giữa Heineken và Vietpot trong việc sản
            xuất loại bia nổi tiếng nhất thế giới tại Amsterdam. Từ di sản văn
            hoá đến quy trình sản xuất tinh tế, cùng với những hỗ trợ cần thiết
            để tạo nên một sản phẩm đẳng cấp. Kết thúc chuyến tham quan một cách
            hoàn hảo với một ly bia… hoặc hai!
          </p>
          <div className="brand-hero__meta">Amsterdam, Hà Lan</div>
        </div> */}
      </section>
    </>
  );
}

export default About;
