import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import fakeMatches from "../../../fakeData/matches";
import { RootState } from "../../../redux/reducers";

type Props = PropsFromRedux & {};

const CompeteHistory: React.FC<Props> = () => {
  return (
    <Paper style={{ width: "100%", padding: "25px", borderRadius: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Completed</Typography>
        <Button>Clear</Button>
      </div>
      <List>
        {fakeMatches.map((match) => {
          const matchResult: "won" | "lost" | "draw" =
            match.result.fromScore > match.result.toScore
              ? "won"
              : match.result.fromScore === match.result.toScore
              ? "draw"
              : "lost";

          return (
            <>
              <ListItem button>
                <ListItemAvatar>
                  <img
                    src={match.toUser.mediaSrc.avatar}
                    alt={match.toUser.name}
                    style={{
                      borderRadius: 50,
                      height: 50,
                      marginRight: "25px",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={match.toUser.name}
                  secondary={match.completedAt.toDateString()}
                />
                <ListItemSecondaryAction>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "#eeeeee",
                        padding: "10px 20px",
                        marginLeft: "10px",
                        borderRadius: 10,
                      }}
                    >
                      <Typography>{match.language.name}</Typography>
                    </div>
                    <div
                      style={{
                        backgroundColor:
                          matchResult === "won"
                            ? "green"
                            : matchResult === "draw"
                            ? "#eeeeee"
                            : "red",
                        padding: "10px 20px",
                        color: "white",
                        marginLeft: "10px",
                        borderRadius: 10,
                      }}
                    >
                      <Typography>
                        {matchResult === "won"
                          ? "You Won"
                          : matchResult === "draw"
                          ? "Draw"
                          : "You Lost"}
                      </Typography>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#eeeeee",
                        padding: "10px 20px",
                        marginLeft: "10px",
                        display: "flex",
                        borderRadius: 10,
                      }}
                    >
                      <Typography>{match.result.fromScore}</Typography>
                      <Typography style={{ margin: "0px 10px" }}>:</Typography>
                      <Typography>{match.result.toScore}</Typography>
                    </div>
                  </div>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider style={{ width: "90%", margin: "auto" }} />
            </>
          );
        })}
      </List>
      <div style={{ display: "flex", margin: "20px 0px" }}>
        <Button variant="outlined" style={{ margin: "auto" }}>
          Load more...
        </Button>
      </div>
    </Paper>
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

export default connector(CompeteHistory);
