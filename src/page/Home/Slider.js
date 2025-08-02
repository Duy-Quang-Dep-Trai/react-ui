import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <main className="main-slider">
      <div className="slider">
        <div className="container">
          <div className="row">
            {/* Left text */}
            <div className="col left-content">
              <div className="gach-content">
                <div className="gach-gach-do"></div>
                <div className="gach"></div>
                <div className="gach"></div>
              </div>
              <h4>HƯƠNG VỊ ĐẾN TỪ AMSTERDAM</h4>
              <h1>Heineken: Mở ra thế giới của bạn</h1>
              <p>
                Heineken có một lịch sử phong phú bắt đầu từ năm 1864, được
                thành lập bởi Gerard Adriaan Heineken tại Amsterdam. Các giá trị
                cốt lõi chúng tôi tập trung vào chất lượng, đổi mới và bền vững,
                đảm bảo rằng mỗi ngụm Heineken phản ánh cam kết của chúng tôi
                đối với sự xuất sắc.
              </p>
            </div>

            {/* Right image */}
            <div className="col right-image">
              <img
                src={require("../../assets/Heineken trong xô đá.png")}
                alt="Heineken trong xô đá"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Slider;
