import React, { memo } from "react";
import {Paper} from "@material-ui/core";
import Header from "./header";

/**
 * Layout component - To display the Header and Container.
*/
const Layout = memo(props => (
  <Paper
    elevation={0}
  >
   <Header title="Roman Numerical Conversation Tool" />
    {props.children}
  </Paper>
));

export default Layout;
