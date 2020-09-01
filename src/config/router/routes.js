import { Home as HomeIcon } from '@material-ui/icons';
import Home from '../../pages/Home';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    title: 'Home',
    component: Home,
    show_menu: true,
    icon: HomeIcon,
  },
];
