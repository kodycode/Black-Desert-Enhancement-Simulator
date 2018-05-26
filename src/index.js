import React from "react";
import ReactDOM from "react-dom";
import EquipmentWindow from "./equipment-window";
import EnhancementWindow from "./enhancement-window";
import InventoryWindow from "./inventory-window";
import "./index.css";

class Test extends React.Component {
  render() {
    return (
      <div id="container">
        <img src="bdo-img/bdo-logo.png" />
        <div id="simulator">
          <EquipmentWindow />
          <EnhancementWindow />
          <InventoryWindow />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));