import { Container } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import ThreeCoursesPreview from "../../CommonComponents/Course/ThreeCoursesPreview";
import { RootState } from "../../redux/reducers";
import HeroHeader from "./HeroSection";

type Props = PropsFromRedux & {};

const Home: React.FC<Props> = ({ isLoggedIn }) => {
  return (
    <Container maxWidth="lg">
      <HeroHeader />
      <ThreeCoursesPreview />
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

export default connector(Home);
