import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/reducers";
import { useHistory } from "react-router-dom";

type Props = PropsFromRedux & {};

const useStyles = makeStyles((theme) => ({
  global: {
    paddingLeft: "50%",
    paddingRight: "50%",
  },
  buttonFont: {
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: 15,
  },
  button: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
}));

const DesktopAppBar: React.FC<Props> = ({ isLoggedIn }) => {
  const history = useHistory();

  const classes = useStyles();

  const onButtonClickRedirect = (
    event: React.MouseEvent<HTMLElement>,
    path: string
  ) => {
    event.preventDefault();
    history.push(path);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item xs={3}>
          <img
            src={window.location.origin + "/LearnCodingLogo.png"}
            alt={"Logo"}
          />
        </Grid>
        <Grid container item xs={9} justify="flex-end">
          <Button
            className={`${classes.buttonFont} ${classes.button}`}
            color="primary"
            onClick={(e) => onButtonClickRedirect(e, "/courses")}
          >
            Courses
          </Button>
          {/* <Box mr={2} /> */}
          <Button
            className={`${classes.buttonFont} ${classes.button}`}
            color="primary"
            onClick={(e) => onButtonClickRedirect(e, "/discuss")}
          >
            Discuss
          </Button>
          {/* <Box mr={2} /> */}
          <Button
            className={`${classes.buttonFont} ${classes.button}`}
            color="primary"
            onClick={(e) => onButtonClickRedirect(e, "top-learners")}
          >
            Top Learners
          </Button>
          {/* <Box mr={2} /> */}
          <Button
            className={`${classes.buttonFont} ${classes.button}`}
            color="primary"
            onClick={(e) => onButtonClickRedirect(e, "/blog")}
          >
            Blog
          </Button>
          {/* <Box mr={2} /> */}
          {isLoggedIn ? (
            <Button
              className={`${classes.buttonFont} ${classes.button}`}
              variant="contained"
              color="primary"
              onClick={(e) => onButtonClickRedirect(e, "/profile")}
            >
              Profile
            </Button>
          ) : (
            <Button
              className={`${classes.buttonFont} ${classes.button}`}
              variant="contained"
              color="primary"
              onClick={(e) => onButtonClickRedirect(e, "/signup")}
            >
              Signup
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(DesktopAppBar);
