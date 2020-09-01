import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(1) * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(1) * 9 + 1,
    },
  },
  drawerBg: {
    backgroundColor: theme.palette.primary.main,
  },
  listItem: {
    color: theme.palette.primary.contrastText,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    backgroundColor: theme.palette.primary.main,
  },
  toolbarShadow: {
    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
  },
  container__logo: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  appName: {
    marginLeft: '1rem',
  },
  logo: {
    width: '80%',
  },
}));
