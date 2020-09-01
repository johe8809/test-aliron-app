import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  container: {
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    padding: '2rem 1rem',
    width: 380,
  },
  logo: {
    width: '50%',
  },
}));
