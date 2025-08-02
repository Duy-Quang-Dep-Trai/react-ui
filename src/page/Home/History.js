import "../../page/Home/History.css";
import MuitenPhai from "../../assets/muitenphai.svg";
import MuitenTrai from "../../assets/muitentrai.svg";
import ImageSVG from "../../assets/Image.svg";
function History() {
  return (
    <section className="heineken-history">
      <div className="container">
        <div className="history-content">
          <h2 className="history-title">LỊCH SỬ HEINEKEN</h2>
          <p className="history-desc">
            Kể từ năm 1864, Heineken đã chế biến những loại bia tốt nhất được
            yêu thích trên toàn thế giới.
          </p>
          <div className="history-grid">
            <div className="history-image">
              <img src={ImageSVG} alt="Heineken Factory" />
            </div>
            <div className="history-timeline">
              <p>
                Hành trình của Heineken bắt đầu vào năm 1864 khi Gerard Adriaan
                Heineken mua một nhà máy bia nhỏ ở Amsterdam. Qua nhiều năm,
                Heineken đã trở thành thương hiệu toàn cầu nổi tiếng với cam kết
                về chất lượng. Ngày nay, Heineken là nhà lãnh đạo trong ngành
                công nghiệp bia, có mặt tại hơn 190 quốc gia.
              </p>
              <p>
                Hành trình của Heineken bắt đầu vào năm 1864 khi Gerard Adriaan
                Heineken mua một nhà máy bia nhỏ ở Amsterdam. Qua nhiều năm,
                Heineken đã trở thành thương hiệu toàn cầu nổi tiếng với cam kết
                về
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-nav">
        <button className="history-nav-btn prev">
          <img src={MuitenTrai} alt="muitentrai" />
        </button>
        <button className="history-nav-btn prev">
          <img src={MuitenPhai} alt="muitenphai" />
        </button>
      </div>
    </section>
  );
}

export default History;
