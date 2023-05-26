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
      <ShinyBtn name="Add event to calendar" />
      <a href="@" className="Vote-now">
        Vote now
      </a>
    </div>
  );
}

function Marquee() {
  return (
    <div className="Intro-marquee Marquee">
      <p className="Marquee-p Marquee-p--stroke">
        Global celebration of video games
      </p>
      <p className="Marquee-p Marquee-p--white">
        Streams live on all platforms
      </p>
    </div>
  );
}

export default Intro;
