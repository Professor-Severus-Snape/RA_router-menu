import { Link } from 'react-router-dom';
import './notFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__text">Запрашиваемая страница не найдена...</p>
      <Link className="notFound__btn" to="/">На главную</Link>
    </div>
  );
};

export default NotFoundPage;
