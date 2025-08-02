import "../../page/Home/Video.css";
function Video() {
  return (
    <section className="Video-Section">
      <video id="bgVideo" className="bg-video" autoPlay muted loop>
        <source
          src="https://res.cloudinary.com/df1gg3pig/video/upload/v1754069711/quanghocfullstack.mp4"
          type="video/mp4"
        />
      </video>
      <div className="=overlay"></div>
      <div className="content">
        <div className="container">
          <img
            src="https://heniken-fe-nextjs.vercel.app/order/logo.svg"
            alt="logo"
          />
          <h2 className="order-title">ĐẶT HÀNG HEINEKEN YÊU THÍCH CỦA BẠN</h2>
          <p className="order-desc">
            Nhận các sản phẩm Heineken yêu thích của bạn giao tận nhà. Đừng bỏ
            lỡ các ưu đãi đặc biệt của chúng tôi!
          </p>
          <a href="#" className="btn-order">
            ĐẶT HÀNG NGAY
          </a>
        </div>
      </div>
    </section>
  );
}

export default Video;
