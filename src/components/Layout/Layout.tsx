import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './layout.css';

const Layout = () => {
  return (
    <div className="container">
      <Menu />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
