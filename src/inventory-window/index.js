import React from "react";

class InventoryWindow extends React.Component {
  render() {
    return(
      <div id="inventory-window">
        <div id="header">
          Inventory
        </div>
        <hr align="center" width="90%"></hr>
        <table id="inventory-slots">
          <tbody>
            <tr className='0'>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InventoryWindow;