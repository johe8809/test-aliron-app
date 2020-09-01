import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import logo from '../../assets/images/aliron_logo.png';
import useStyles from './style';

export default (props) => {
  const { children } = props;
  const styles = useStyles();

  return (
    <>
      <AppBar position={'static'} elevation={0} color={'transparent'}>
        <Toolbar>
          <img src={logo} alt={'Logo aliron.app'} className={styles.logo} />
        </Toolbar>
      </AppBar>
      <Container maxWidth={'md'}>
        <Box padding={'1rem 0'}>{children}</Box>
      </Container>
    </>
  );
};
