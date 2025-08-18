import "./History.css";
import { Link } from "react-router-dom";
import image9 from "../../assets/0fdc53591e333975b85b87e40bdc584ac62001e8.png"; // ✅ Import ảnh đúng cách
import img10 from "../../assets/image (10).png";
function History() {
  return (
    <section className="history container-1376">
      <figure className="h-card">
        <img className="h-card__bg" src={image9} alt="Heineken bottles" />
        <div className="h-card__text">
          <h1 className="h-title">Câu chuyện Heineken</h1>
          <p className="h-desc">
            Khám phá lịch sử phong phú của Heineken, từ những khởi đầu khiêm tốn
            đến việc trở thành một trong những thương hiệu bia được công nhận
            nhất trên thế giới.
          </p>
        </div>
      </figure>

      <figure className="h-figure">
        <img
          className="h-figure__img"
          src={img10}
          alt="Gerard Adriaan Heineken"
        />
      </figure>

      <header className="h-heading">
        <h2 className="h-heading__title">Người sáng lập và nhà tư tưởng</h2>
      </header>
    </section>
  );
}

export default History;
