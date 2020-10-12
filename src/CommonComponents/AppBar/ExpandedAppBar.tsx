import { Button, Container, Grid, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useHistory } from "react-router-dom";
import routeTree from "../../Routes";

type Props = PropsFromRedux & {};

const useStyles = makeStyles((theme) => ({
  buttonFont: {
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: 15,
  },
  button: {
    margin: "auto 10px",
    borderRadius: 50,
    padding: "10px 30px",
    clear: "both",
    height: "50%",
  },
}));

const ExpandedAppBar: React.FC<Props> = ({ isLoggedIn }) => {
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
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid container item xs={3}>
          <Link href="/">
            <img
              src={window.location.origin + "/LearnCodingLogo.png"}
              alt={"Logo"}
            />
          </Link>
        </Grid>
        <Grid container item xs={9} justify="flex-end">
          {routeTree.content.map((route) => (
            <Button
              className={`${classes.buttonFont} ${classes.button}`}
              color="primary"
              onClick={(e) => onButtonClickRedirect(e, route.path)}
            >
              {route.name}
            </Button>
          ))}
          <Button
            className={`${classes.buttonFont} ${classes.button}`}
            color="primary"
            onClick={(e) =>
              onButtonClickRedirect(
                e,
                isLoggedIn
                  ? routeTree.auth.profile.path
                  : routeTree.auth.signIn.path
              )
            }
            variant="contained"
          >
            {isLoggedIn
              ? routeTree.auth.profile.name
              : routeTree.auth.signIn.name}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ExpandedAppBar);
