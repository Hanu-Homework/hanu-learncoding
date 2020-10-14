import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/reducers";

type Props = PropsFromRedux & {};

const CompeteBattle: React.FC<Props> = () => {
  return <div>CompeteBattle</div>;
};

const mapStateToProps = (state: RootState) => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {};
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CompeteBattle);
