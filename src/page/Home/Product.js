import "../../page/Home/Product.css";
function Product() {
  return (
    <section class="product-section">
      <div class="Product-container">
        <h1 class="section-title">SẢN PHẨM CỦA HEINEKEN</h1>
        <ul class="tabs">
          <li class="active-item">Heineken</li>
          <li class="active-item">Strongbow</li>
          <li class="active-item">Desperados</li>
          <li class="active-item">Zlatopramen</li>
          <li class="active-item">Krušovice</li>
          <li class="active-item">Starobrno</li>
          <li class="active-item">Zlatý Bažant</li>
          <li class="active-item">Ostatní</li>
        </ul>
        <div class="row">
          <div class="product-list">
            {/* <!-- Product Item 1 --> */}
            <div class="product-item">
              <div class="image-wrapper">
                <img
                  src={require("../../assets/image1.png")}
                  alt="Heineken Original"
                />
              </div>
              <div class="discount-badge">10%</div>
              {/* <!-- Chuyển ra khỏi image-wrapper --> */}
              <div class="product-info">
                <h3>Heineken Original</h3>
                <p class="price">
                  <span class="old-price">17.99 Kč</span>
                  <span class="new-price">15.99 Kč</span>
                </p>
                <button class="cart-btn">
                  <img
                    src={require("../../assets/solar_cart-3-outline (1).png")}
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- Product Item 2 --> */}
            <div class="product-item">
              <div class="image-wrapper">
                <img
                  src={require("../../assets/image 2.png")}
                  alt="Heineken 0.0"
                />
              </div>
              <div class="discount-badge invisible">0%</div>
              <div class="product-info">
                <h3>Heineken 0.0</h3>
                <p class="price">17.99 Kč</p>
                <button class="cart-btn">
                  <img
                    src={require("../../assets/solar_cart-3-outline (1).png")}
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- Product Item 3 --> */}
            <div class="product-item">
              <div class="image-wrapper">
                <img
                  src={require("../../assets/image 3.png")}
                  alt="Heineken Silver"
                />
              </div>
              <div class="discount-badge invisible">0%</div>
              <div class="product-info">
                <h3>Heineken Silver</h3>
                <p class="price">17.99 Kč</p>
                <button class="cart-btn">
                  <img
                    src={require("../../assets/solar_cart-3-outline (1).png")}
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* <!-- Product Item 4 --> */}
            <div class="product-item">
              <div class="image-wrapper">
                <img
                  src={require("../../assets/image 4.png")}
                  alt="Heineken Light"
                />
              </div>
              <div class="discount-badge invisible">0%</div>
              <div class="product-info">
                <h3>Heineken Light</h3>
                <p class="price">17.99 Kč</p>
                <button class="cart-btn">
                  <img
                    src={require("../../assets/solar_cart-3-outline (1).png")}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navigation arrows --> */}
        <div class="navigation-arrows">
          <button class="nav-btn nav-left" id="btn-left">
            &lt;
          </button>
          <button class="nav-btn nav-right active" id="btn-right">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product;
