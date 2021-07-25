import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Book from '../views/pages/book';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/booked': Book,
};

export default routes;
