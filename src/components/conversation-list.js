import React, { memo } from "react";
import {FormControl, FormLabel, RadioGroup, FormControlLabel,Radio } from "@material-ui/core";

/**
 * ConversationList component
 * @param {object} props Component props
 * @param {string} props.type  - selected type by the user.
 * @param {func} props.handleChange - To handle the selection type.
 */
const ConversationList = memo(props => {
  const {type, handleChange} = props;
  return (     
      <FormControl>
        <FormLabel>Conversation Type</FormLabel>
          <RadioGroup row value={type} onChange={handleChange}>              
            <FormControlLabel value="number" control={<Radio />} label="Number to Roman" />
            <FormControlLabel value="roman" control={<Radio />} label="Roman to Number" />        
        </RadioGroup>
      </FormControl>      
  )});

export default ConversationList;