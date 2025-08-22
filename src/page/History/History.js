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
        <h4 className="h-heading__history">Lịch sử, Bia, Heineken</h4>
        <h4 className="h-heading___text">
          Gerard Adriaan Heineken sinh ra trong một gia đình thương nhân ở
          Amsterdam vào năm 1841. Năm 1864, ông mua nhà máy bia ‘De Hooiberg’
          (Cái Đống Rơm) ở Amsterdam và ngay lập tức tập trung vào việc sản xuất
          bia lager cao cấp không bị thỏa hiệp. Ông áp dụng những đổi mới mới
          nhất trong ngành sản xuất bia và trở thành người đầu tiên trên thế
          giới giới thiệu phòng thí nghiệm kiểm soát chất lượng. Ông cũng đã làm
          rất nhiều cho thành phố Amsterdam.
        </h4>
      </header>
    </section>
  );
}

export default History;
