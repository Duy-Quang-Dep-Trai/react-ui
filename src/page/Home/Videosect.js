import "../../page/Home/Videosect.css";
function Videosect() {
  return (
    <div className="video-section">
      <section className="home-video">
        <div className="container-video">
          <div className="video-wrapper">
            <video
              id="video-home"
              className="video-pr"
              autoPlay
              muted
              loop
              playsInline
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
  );
}
export default Videosect;
