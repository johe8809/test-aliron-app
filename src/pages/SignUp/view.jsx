import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box, Paper, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Input from '../../components/common/Form/Input';
import strings from '../../config/languages/es-co.json';
import logo from '../../assets/images/aliron_logo.png';
import useStyles from './style';

function SignUpView({ signUpStore, onSignUp, errorMessage, handleCloseErrorMessage }) {
  const styles = useStyles();

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} className={styles.container}>
        <Paper elevation={3} className={styles.paper}>
          <Box marginBottom={'2rem'} display={'flex'} justifyContent={'center'}>
            <img src={logo} alt={'Logo aliron.app'} className={styles.logo} />
          </Box>
          <Box marginBottom={'1rem'} color={'#fff'}>
            <Input label={strings.signup.nickname} name={'nickname'} store={signUpStore} fullWidth />
          </Box>
          <Box marginBottom={'1rem'} color={'#fff'}>
            <Input label={strings.common.email} name={'email'} store={signUpStore} fullWidth />
          </Box>
          <Box marginBottom={'1rem'}>
            <Input label={strings.common.password} name={'password'} type={'password'} store={signUpStore} fullWidth />
          </Box>
          <Box marginBottom={'1rem'}>
            <Input
              label={strings.signup.confirmPassword}
              name={'confirmPassword'}
              type={'password'}
              store={signUpStore}
              fullWidth
            />
            <Button onClick={onSignUp} color={'secondary'} variant={'contained'} fullWidth>
              {strings.common.signin}
            </Button>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleCloseErrorMessage}
      >
        <MuiAlert variant={'filled'} severity={'error'}>
          {errorMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
}

SignUpView.defaultProps = {
  errorMessage: null,
};

SignUpView.propTypes = {
  onSignUp: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleCloseErrorMessage: PropTypes.func.isRequired,
};

export default SignUpView;
