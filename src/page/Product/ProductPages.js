import "./ProductPages.css"; // nếu có css cho trang sản phẩm

function ProductPages() {
  return (
    <main className="product-page">
      <div className="product-container">
        <h1 className="product-title">SẢN PHẨM CỦA HEINEKEN</h1>
        <div className="product-filters">
          <div className="filter-wrapper">
            <div className="select-group">
              <div className="custom-select-wrapper">
                <select
                  className="filter-select heineken active"
                  defaultValue="Heineken"
                >
                  <option>Heineken</option>
                </select>
                <i className="fa-solid fa-chevron-down select-icon"></i>
              </div>

              <div className="custom-select-wrapper">
                <select className="filter-select type" defaultValue="Type">
                  <option>Type</option>
                </select>
                <i className="fa-solid fa-chevron-down select-icon"></i>
              </div>

              <div className="custom-select-wrapper">
                <select className="filter-select price" defaultValue="Price">
                  <option>Price</option>
                </select>
                <i className="fa-solid fa-chevron-down select-icon"></i>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Grid layout 2 cột --> */}
        <div className="product-main-grid">
          {/* <!-- Danh sách sản phẩm --> */}
          <div className="product-list">
            {/* <!-- Hàng 1 --> */}
            <div className="product-row">
              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image1.png")}
                    alt="Heineken Original"
                  />
                </div>
                <div className="discount-badge">10%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken Original</div>
                    <div className="product-price">
                      <span className="old-price">17.99 Kč</span>
                      <span className="new-price">15.99 Kč</span>
                    </div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                      alt="Cart"
                    />
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image 2.png")}
                    alt="Heineken 0.0"
                  />
                </div>
                <div className="discount-badge invisible">0%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken 0.0</div>
                    <div className="product-price">17.99 Kč</div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                      alt="Cart"
                    />
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image 3.png")}
                    alt="Heineken Silver"
                  />
                </div>
                <div className="discount-badge invisible">0%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken Silver</div>
                    <div className="product-price">17.99 Kč</div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                      alt="Cart"
                    />
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image 4.png")}
                    alt="Heineken Light"
                  />
                </div>
                <div className="discount-badge invisible">0%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken Light</div>
                    <div className="product-price">17.99 Kč</div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="product-row">
              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image1.png")}
                    alt="Heineken Dark"
                  />
                </div>
                <div className="discount-badge invisible">0%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken Original</div>
                    <div className="product-price">
                      {/* <!-- <span className="old-price">18.99 Kč</span> --> */}
                      <span className="new-price">17.99 Kč</span>
                    </div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                      alt="Cart"
                    />
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image 2.png")}
                    alt="Heineken Blonde"
                  />
                </div>
                <div className="discount-badge">10%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken 0.0</div>
                    <span className="old-price">17.99 Kč</span>
                    <span className="new-price">15.99 Kč</span>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                    />
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image 3.png")}
                    alt="Heineken Extra"
                  />
                </div>
                <div className="discount-badge invisible">0%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken Silver</div>
                    <div className="product-price">17.99 Kč</div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                      alt="Cart"
                    />
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image 4.png")}
                    alt="Heineken Special"
                  />
                </div>
                <div className="discount-badge invisible">0%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken Special</div>
                    <div className="product-price">17.99 Kč</div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Hàng 3 --> */}
            <div className="product-row">
              <div className="product-card">
                {/* <!-- Heineken Dark --> */}
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image1.png")}
                    alt="Heineken Dark"
                  />
                </div>
                <div className="discount-badge">10%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken Original</div>
                    <div className="product-price">
                      <span className="old-price">18.99 Kč</span>
                      <span className="new-price">17.99 Kč</span>
                    </div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                    />
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image 2.png")}
                    alt="Heineken Blonde"
                  />
                </div>
                <div className="discount-badge invisible">0%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken 0.0</div>
                    <div className="product-price">17.99 Kč</div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                      alt="Cart"
                    />
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image 3.png")}
                    alt="Heineken Extra"
                  />
                </div>
                <div className="discount-badge">10%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken Silver</div>
                    <span className="old-price">17.99 Kč</span>
                    <span className="new-price">15.99 Kč</span>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                      alt="Cart"
                    />
                  </button>
                </div>
              </div>

              <div className="product-card">
                <div className="page-image-wrapper">
                  <img
                    src={require("../../assets/image 4.png")}
                    alt="Heineken Special"
                  />
                </div>
                <div className="discount-badge invisible">0%</div>
                <div className="page-product-info">
                  <div className="product-text">
                    <div className="product-name">Heineken Special</div>
                    <div className="product-price">17.99 Kč</div>
                  </div>
                  <button className="product-card-btn">
                    <img
                      src={require("../../assets/solar_cart-3-outline (1).png")}
                      alt="Cart"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- PHÂN TRANG --> */}
            <div className="pagination">
              <a href="#" className="page-link active">
                1
              </a>
              <a href="#" className="page-link">
                2
              </a>
              <a href="#" className="page-link">
                3
              </a>
              <a href="#" className="page-link">
                4
              </a>
              <a href="#" className="page-link">
                5
              </a>
              <a href="#" className="page-link next-page">
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="video-section">
              <section className="home-video">
                <div className="container-video">
                  <div className="video-wrapper">
                    <video
                      id="video-home"
                      className="video-pr"
                      autoplay
                      muted
                      loop
                      playsinline
                      controls
                    >
                      <source
                        src="https://res.cloudinary.com/df1gg3pig/video/upload/quanghoclaptrinh.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="product-detail">
            <div className="product-content">
              <div className="page-product-header">
                <h2 className="detail-title">Heineken Original</h2>
                <p className="detail-price">17.99 Kč</p>
              </div>

              <img
                src={require("../../assets/image1.png")}
                className="detail-img"
                alt="Heineken"
              />

              <div className="quantity-select">
                <button className="active">x1</button>
                <button>x5</button>
                <button>x10</button>
                <button>x20</button>
              </div>

              <div className="quantity-price-row">
                <div className="quantity-control">
                  <button className="decrease">-</button>
                  <span>1</span>
                  <button className="increase">+</button>
                </div>
                <p className="final-price">17.99 Kč</p>
              </div>

              <div className="button-group">
                <button className="order-btn">Đặt hàng</button>
                <button className="add-to-cart-btn">Thêm vào giỏ hàng</button>
              </div>

              <div className="product-description">
                <h3>Chi Tiết</h3>
                <p>
                  Heineken là một loại bia lager nhạt với lịch sử phong phú và
                  hương vị đặc trưng. Hãy thưởng thức vị tươi mát và sảng khoái
                  của Heineken, được sản xuất từ những nguyên liệu chất lượng
                  cao.
                </p>
                <h4>Chi Tiết Sản Phẩm</h4>
                <p>Nồng Độ Cồn: 5%, Thể Tích: 330ml</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPages;
