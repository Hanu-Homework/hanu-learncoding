import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/reducers";

type Props = PropsFromRedux & {};

const ForumTable: React.FC<Props> = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const [tabIndex, setTabIndex] = React.useState<number>(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Paper style={{ padding: "25px", borderRadius: 16 }}>
      <Grid container spacing={3}>
        <Grid container item xs={6} md={12} lg={6}>
          <Typography variant="h5">Q&A Discussions</Typography>
        </Grid>
        <Grid container item xs={6} md={4} lg={6} justify="flex-end">
          <Button variant="contained" color="primary">
            <Typography variant="button">New Question</Typography>
          </Button>
        </Grid>
        <Grid container item xs={12} md={8} lg={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="component-outlined">Search</InputLabel>
            <OutlinedInput
              fullWidth
              id="component-outlined"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{ borderRadius: 16 }}
              label="Search"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box mb={3} />
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        variant="scrollable"
      >
        <Tab label="Trending" />
        <Tab label="Most Recent" />
        <Tab label="Unanswered" />
        <Tab label="My Questions" />
        <Tab label="My Answers" />
      </Tabs>
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

export default connector(ForumTable);
