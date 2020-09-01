import React, { Fragment, forwardRef } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { withTheme } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { ROUTES } from '../../../config/router/routes';
import logo from '../../../assets/images/aliron_logo.png';
import useStyles from './style';

const DrawerComponent = (props) => {
  const { theme, onCloseMenu, isOpen } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Drawer
        variant={'permanent'}
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: classNames(classes.drawerBg, {
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
        open={isOpen}
      >
        <div
          className={classNames(classes.toolbar, {
            [classes.toolbarShadow]: isOpen,
          })}
        >
          <div className={classes.container__logo}>
            <img src={logo} alt={'Logo aliron.app'} className={classes.logo} />
          </div>
          <IconButton onClick={() => onCloseMenu(false)}>
            {theme.direction === 'rtl' ? (
              <ChevronRight classes={{ root: classes.listItem }} />
            ) : (
              <ChevronLeft classes={{ root: classes.listItem }} />
            )}
          </IconButton>
        </div>
        <List>
          {ROUTES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Fragment key={index}>
                {item.show_menu && (
                  <ListItem
                    button
                    component={forwardRef((itemProps, ref) => (
                      <Link to={item.path} {...itemProps} innerRef={ref} />
                    ))}
                    classes={{ root: classes.listItem }}
                  >
                    {item.icon && (
                      <ListItemIcon classes={{ root: classes.listItem }}>
                        <Icon />
                      </ListItemIcon>
                    )}
                    <ListItemText primary={item.name} />
                  </ListItem>
                )}
              </Fragment>
            );
          })}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default withTheme(DrawerComponent);
