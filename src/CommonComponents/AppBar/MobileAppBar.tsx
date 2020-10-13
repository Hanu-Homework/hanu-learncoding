import React, { Dispatch } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducers";
import { toggleDrawerOpen } from "../../redux/actions/ui/ui";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type Props = PropsFromRedux & {};

const MobileAppBar: React.FC<Props> = ({ isDrawerOpened, setDrawerOpened }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              console.log("clicked");
              setDrawerOpened(!isDrawerOpened);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Endeavor
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isDrawerOpened: state.ui.isDrawerOpened,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setDrawerOpened: (open: boolean) => dispatch(toggleDrawerOpen()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MobileAppBar);
