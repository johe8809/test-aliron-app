import React, { useState } from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';
import useStyles from './style';

export default (props) => {
  const { children } = props;
  const styles = useStyles();

  const [drawerState, setDrawerState] = useState(true);
  const onChangeDrawerState = (state) => {
    setDrawerState(state);
  };

  return (
    <div className={styles.root}>
      <AppBar onOpenMenu={onChangeDrawerState} isOpen={drawerState} />
      <Drawer onCloseMenu={onChangeDrawerState} isOpen={drawerState} />
      <main className={styles.content}>
        <div className={styles.toolbar} />
        {children}
      </main>
    </div>
  );
};
