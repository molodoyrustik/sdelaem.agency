import NotFound from './components/templates/pages/NotFound';
import Case from './components/templates/pages/Case';
import Service from './components/templates/pages/Service';

import PageHoc from './components/HOC/PageHoc.jsx';


const Routes = [
  {
    path: '/case',
    exact: true,
    component: Case,
  },
  {
    path: '/service',
    exact: true,
    component: Service,
  },
  {
    path: '/',
    exact: true,
    component: PageHoc,
  },
  {
    path: '/:slug',
    exact: true,
    component: PageHoc,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default Routes;
