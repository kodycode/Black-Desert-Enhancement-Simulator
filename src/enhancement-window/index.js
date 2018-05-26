import React from "react";

class EnhancementWindow extends React.Component {
  render() {
    return(
      <div id="enhancement-window">
        <div id="header">
          Enhancement
        </div>
        <hr align="center" width="90%"></hr>
        <div id="failstacks">
          Increase enhancement rate by (<span id="counter">+0</span>)
        </div>
        <div id="design-slot">
          <img id="enhancement-design" src="bdo-img/enhancement-design.png"/>
        </div>
        <form id="mute-checkbox">
          <label>
            <input id="mute-input" type="checkbox" name="mute-sound" value="True" />
            Mute Sound
          </label>
        </form>
        <div id="enhancer">
          <button id="enhance-button">
            Enhancement
          </button>
        </div>
        <div id="enhance-desc">
          <p>
            * Item Enhancement chance increases as the success stack rate does.
          </p>
        </div>
      </div>
    );
  }
}

export default EnhancementWindow;