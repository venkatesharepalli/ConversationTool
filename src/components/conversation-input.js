import React, { memo } from "react";
import { TextField, Button, Grid } from "@material-ui/core";

/**
 * ConversationInput component
 * @param {object} props Component props
 * @param {string} props.inputValue  - user input.
 * @param {func} props.onInputChange - To handle input value changes.
 * @param {func} props.onButtonClick  - To handle button click function.
 */
const ConversationInput = memo(props => (
  <Grid container>
    <Grid xs={6} md={7} item style={{ paddingRight: 16 }}>
      <TextField
        placeholder="Type here"
        value={props.inputValue}
        onChange={props.onInputChange}
        fullWidth
      />
    </Grid>
    <Grid xs={3} md={3} item>
      <Button
        color="secondary"
        variant="outlined"
        onClick={props.onButtonClick}
      >
        Convert
      </Button>
    </Grid>
  </Grid>
));

export default ConversationInput;
