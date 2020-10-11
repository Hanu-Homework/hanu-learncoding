import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ExpandedAppBar from "./ExpandedAppBar";
import MobileAppBar from "./MobileAppBar";

const ResponsiveAppBar: React.FC = () => {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.up("md"));

  return matches ? <ExpandedAppBar /> : <MobileAppBar />;
};

export default ResponsiveAppBar;
