import { Icon } from '../common/Icon/Icon';
import ShinyBtn from './../common/ShinyBtn/ShinyBtn';
import './Intro.scss';

function Intro() {
  return (
    <div className="Intro">
      {/* <video src="#" className="Intro-video" loop muted playsInLine autoPlay></video> */}
      <img
        src="../../../public/assets/home-bg.jpg"
        alt="Intro background"
        className="Intro-img"
      />
      <div className="Wrapper">
        <Vote />
      </div>
      <Marquee />
    </div>
  );
}

function Vote() {
  return (
    <div className="Intro-vote Vote">
      <h2 className="Vote-h2">
        <Icon clase="Vote-icon" name="logo-with-text" />
      </h2>
      <div className="Vote-date">
        <span className="Vote-month">December</span>
        <span className="Vote-day">8</span>
      </div>
      <h3 className="Vote-place">Microsoft Theater, Los Angeles</h3>
      <ShinyBtn name="Add event to calendar" />
      <a href="#" className="Vote-now">
        Vote now
      </a>
    </div>
  );
}

function Marquee() {
  return (
    <div className="Intro-marquee Marquee">
      <ul className="Marquee-ul Marquee-ul--stroke">
        <li className="Marquee-li">Global celebration of video games</li>
        <li className="Marquee-li">Global celebration of video games</li>
        <li className="Marquee-li">Global celebration of video games</li>
      </ul>
      <ul className="Marquee-ul Marquee-ul--white">
        <li className=" Marquee-li Marquee-li--white">
          Streams live on all platforms
        </li>
        <li className=" Marquee-li Marquee-li--white">
          Streams live on all platforms
        </li>
        <li className=" Marquee-li Marquee-li--white">
          Streams live on all platforms
        </li>
        <li className=" Marquee-li Marquee-li--white">
          Streams live on all platforms
        </li>
        <li className=" Marquee-li Marquee-li--white">
          Streams live on all platforms
        </li>
        <li className=" Marquee-li Marquee-li--white">
          Streams live on all platforms
        </li>
      </ul>
    </div>
  );
}

export default Intro;
