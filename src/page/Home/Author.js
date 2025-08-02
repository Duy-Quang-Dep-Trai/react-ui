import "../../page/Home/Author.css";
import FreddyHeineken from "../../assets/Freddy- Heineken.svg";

function Author() {
  return (
    <div className="heineken-quote">
      <div className="quote-container">
        <div className="quote-text">
          <div className="quote-main">
            <div className="quote-line1">“Heineken không bán bia,</div>
            <div className="quote-line2">chúng tôi bán sự trải nghiệm”</div>
          </div>
          <div className="quote-translate">
            (I don’t sell beer, I sell enjoyment.)
          </div>
          <div className="text-img">
            <img src={FreddyHeineken} alt="Freddy Heineken" />
            <p class="quote-desc">
              Freddy Heineken, tên đầy đủ là Alfred Henry Heineken, ông là cháu
              nội của Gerard Adriaan Heineken, người sáng lập hãng bia vào năm
              1864 tại Amsterdam, Hà Lan, là một trong những nhân vật quan trọng
              nhất trong lịch sử của hãng bia Heineken.
            </p>
          </div>
        </div>
        <div class="quote-image">
          <img src={require("../../assets/avatar.png")} alt="Freddy Heineken" />
        </div>
      </div>
    </div>
  );
}

export default Author;
