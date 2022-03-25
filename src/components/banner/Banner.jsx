import "./Banner.css";
import bracket from "../img/bracket.png";
const Banner = () => {
  return (
    <section id="BannerArea">
      <div className="banner_cnt">
        <h2>Lorem ipsum dolor sit iusmod tempor </h2>
        <h1>incididunt bore</h1>
        <p>Orem ipsum dolor sit amet, consectetur </p>
        <img src={bracket} alt="bracket" />
        <div>
          <button className="btn btn-warning btn-lg rounded-0 fw-bold">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
