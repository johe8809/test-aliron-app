import React from 'react';
import { withRouter } from 'react-router-dom';
import useStyles from './style';

export default withRouter(() => {
  const styles = useStyles();
  return <h1>{'Login'}</h1>;
});
