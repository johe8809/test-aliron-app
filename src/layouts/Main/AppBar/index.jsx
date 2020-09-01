import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { InputBase } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';

const ButtonAppBar = (props) => {
  const { onOpenMenu, isOpen } = props;
  const styles = useStyles();

  return (
    <AppBar
      position={'fixed'}
      elevation={3}
      className={classNames(styles.appBar, {
        [styles.appBarShift]: isOpen,
      })}
    >
      <Toolbar disableGutters={!isOpen}>
        <IconButton
          color={'inherit'}
          aria-label={'Open drawer'}
          onClick={() => onOpenMenu(true)}
          className={classNames(styles.menuButton, {
            [styles.hide]: isOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default ButtonAppBar;
