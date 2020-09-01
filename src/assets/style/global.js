import { withStyles } from '@material-ui/styles';

export default withStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.white,
    },
    '.MuiDivider-root': {
      margin: '1rem 0',
    },
    '.MuiButtonBase-root': {
      marginTop: '1rem',
    },
    '.MuiCheckbox-root': {
      marginTop: '0',
    },
    '.MuiButton-root': {
      textTransform: 'capitalize',
    },
  },
}))(() => null);
