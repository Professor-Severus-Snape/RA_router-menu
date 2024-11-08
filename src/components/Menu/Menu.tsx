import { NavLink } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'menu__link menu__link-active' : 'menu__link';

  return (
    <nav className="menu">
      <li className="menu__item">
        <NavLink className={linkClass} to="/">Главная</NavLink>
      </li>
      <li className="menu__item">
        <NavLink className={linkClass} to="/drift">Дрифт-такси</NavLink>
      </li>
      <li className="menu__item">
        <NavLink className={linkClass} to="/timeattack">Time Attack</NavLink>
      </li>
      <li className="menu__item">
        <NavLink className={linkClass} to="/forza">Forza Karting</NavLink>
      </li>
    </nav>
  );
};

export default Menu;
