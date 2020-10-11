import React, { Dispatch } from "react";
import clsx from "clsx";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { RootState } from "../../redux/reducers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  drawerPaper: {
    position: "relative",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const MyDrawer = ({ open, onClose, onItemClick }) => {
  const classes = useStyles();
  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div
        className={clsx({
          [classes.toolbarMargin]: variant === "persistent",
        })}
      />
      <List>
        <ListItem button component={Link} to="/" onClick={onItemClick("Home")}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/Grid"
          onClick={onItemClick("Page 2")}
        >
          <ListItemText>Page 2</ListItemText>
        </ListItem>
        <ListItem button onClick={onItemClick("Page 3")}>
          <ListItemText>Page 3</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isDrawerOpened: state.ui.isDrawerOpened,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setDrawerOpened: (isDrawerOpened: boolean) =>
      dispatch(setDrawerOpened(isDrawerOpened)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps)

export default 
