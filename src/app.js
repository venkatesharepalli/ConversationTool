import React, { PureComponent } from "react";
import { Paper, Card, CardHeader, CardContent } from "@material-ui/core";
import { ConversationList, ConversationInput } from "./components";
import { RomanNumerals } from "./helpers/helper";

/* App - Main view of the application and Enclosed by two components.
 *  - ConversationList - which hold the conversation types.
 *  - ConversationInput - To Provide conversation inputs.
 */
class App extends PureComponent {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      converType: "number",
      inputValue: "",
      converValue: ""
    };
  }

  /**
   * onConvTypeSelectHandler - select handler for the conversation types
   * @param {object} event - event handler for the selected type.
   */
  onConvTypeSelectHandler = event => {
    this.updateState("", event.target.value, "");
  };

  /**
   * onChangeInput - onChange input handler
   * @param {object} event - event handler for the input handler
   */
  onChangeInput = event => {
    const inputValue = event.target.value;
    if (isNaN(inputValue)) {
      this.updateState(inputValue, "roman", "");
    } else {
      this.updateState(inputValue, "number", "");
    }
  };

  /**
   * updateState
   * @param {string} inputValue - input value entered by user.
   * @param {string} converType - conversation type selected by user.
   * @param {string} converValue - reset the output value.
   */
  updateState = (inputValue, converType, converValue) => {
    this.setState({
      inputValue,
      converType,
      converValue
    });
  };

  /**
   * onConvertClickHandler - convert button click handler.
   */
  onConvertClickHandler = () => {
    const { converType, inputValue } = this.state;
    const converValue =
      converType === "number"
        ? RomanNumerals.toRoman(inputValue)
        : RomanNumerals.fromRoman(inputValue);
    this.setState({ converValue });
  };

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { converType, inputValue, converValue } = this.state;
    return (
      <Paper elevation={0} class="main-container">
        <Card>
          <CardHeader title="Roman Numericals to Number" />
          <CardContent>
            <ConversationList
              type={converType}
              handleChange={this.onConvTypeSelectHandler}
            />
            <ConversationInput
              inputValue={inputValue}
              onInputChange={this.onChangeInput}
              onButtonClick={this.onConvertClickHandler}
            />
            <div className="output-value">{converValue}</div>
          </CardContent>
        </Card>
      </Paper>
    );
  }
}

export default App;
