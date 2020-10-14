import {
  Paper,
  Tabs,
  Typography,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import React, { Dispatch, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import fakeOtherUsers from "../../../fakeData/users/users";
import { RootState } from "../../../redux/reducers";

type Props = PropsFromRedux & {};

const LeaderBoardCard: React.FC<Props> = () => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Fragment>
      <Paper style={{ borderRadius: 16, padding: "25px", width: "100%" }}>
        <Typography
          variant="h6"
          style={{ textAlign: "center", marginBottom: "25px" }}
        >
          Leaderboard
        </Typography>
        <Tabs
          value={tabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          variant="fullWidth"
        >
          <Tab label="Global" />
          <Tab label="Local" />
        </Tabs>
        <List>
          {fakeOtherUsers.map((user, index) => {
            return (
              <ListItem button>
                <ListItemAvatar>
                  <img
                    src={user.mediaSrc.avatar}
                    alt={user.name}
                    style={{
                      borderRadius: 50,
                      height: 50,
                      marginRight: "15px",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={"+1788 XP"}
                  primaryTypographyProps={{
                    variant: "body1",
                    style: { fontSize: "90%" },
                  }}
                  secondaryTypographyProps={{
                    variant: "body2",
                    style: { fontSize: "90%" },
                  }}
                />
                <ListItemSecondaryAction>
                  <Typography style={{ fontWeight: "bold" }}>
                    {index + 1}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {};
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(LeaderBoardCard);
