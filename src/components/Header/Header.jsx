import { useContext } from 'react';
import { Icon } from '../common/Icon/Icon';
import { GlobalContext } from '../../provider/Provider';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <Sup />
      <Bottom />
      <Sign />
    </header>
  );
}

function Sup() {
  return (
    <div className="Header-sup">
      <Logo />
      <Nav />
      <MenuBtn />
    </div>
  );
}

function Logo() {
  return (
    <h1 className="Header-h1">
      <a href="#" className="Header-a">
        <Icon name="logo" />
      </a>
    </h1>
  );
}

function Nav() {
  const { header } = useContext(GlobalContext);
  const { menu } = header;

  return (
    <nav className="Header-nav">
      <ul className="Header-ul">
        {menu.map(({ id, href, title, disabled }) => (
          <li key={id} className="Header-li">
            <a
              href={href}
              className={`Header-link ${disabled ? 'disabled' : ''}`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Sign() {
  return (
    <button className="Header-btn">
      <svg className="Header-sign"></svg>
      <span className="Header-span">Sign in</span>
    </button>
  );
}

function MenuBtn() {
  return (
    <button className="Header-menu">
      <Icon name="menu" />
    </button>
  );
}

function Bottom() {
  return <div className="Header-bottom">15 days till the show</div>;
}

export default Header;
