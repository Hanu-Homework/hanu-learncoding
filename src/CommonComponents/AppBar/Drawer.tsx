import React, { Dispatch } from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Icon, List, ListItem, ListItemText } from "@material-ui/core";
import { RootState } from "../../redux/reducers";
import { connect, ConnectedProps } from "react-redux";
import routeTree from "../../Routes";
import { setDrawerOpened } from "../../redux/actions/ui/ui";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import { useHistory } from "react-router-dom";

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

type Props = PropsFromRedux & {};

const CustomDrawer: React.FC<Props> = ({ isDrawerOpened, setOpen }) => {
  const classes = useStyles();

  const history = useHistory();

  const onClick = (path: string) => {
    history.push(path);
  };

  console.log(isDrawerOpened);

  return (
    <Drawer
      variant="temporary"
      open={isDrawerOpened}
      onClose={() => setOpen(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div
        className={clsx({
          [classes.toolbarMargin]: true,
        })}
      />
      <List>
        <ListItem button onClick={() => onClick(routeTree.home.path)}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        {routeTree.content.map((route) => {
          return (
            <ListItem button onClick={() => onClick(route.path)}>
              <ListItemIcon>
                <Icon>{route.media.icon}</Icon>
              </ListItemIcon>
              <ListItemText>{route.name}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isDrawerOpened: state.ui.isDrawerOpened,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setOpen: (open: boolean) => dispatch(setDrawerOpened(open)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CustomDrawer);
