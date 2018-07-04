import React from "react";
import BossArmor from "./boss-armor";
import TopTier from "./top-tier";
import Dandelion from "./dandelion";
import Kzarka from "./kzarka";
import Liverto from "./liverto";

class EquipmentWindow extends React.Component {
  state = {
    "category": "weapons",
  }

  displayCategoryItems() {
    if (this.state.category === "accessories") {
      return (
        <div id="accessories">
          <TopTier />
        </div>
      );
    } else if (this.state.category === "weapons") {
      return (
        <div id="weapons">
          <Dandelion />
          <Kzarka />
          <Liverto />
        </div>
      );
    } else if (this.state.category === "armors") {
      return (
        <div id="armor">
          <BossArmor />
        </div>
      );
    }

    return null;
  }

  setCategory = (cat) => {
    if (this.state.category !== cat) {
      this.setState({ category: cat });
    }
  }

  render() {
    return(
      <div id="equipment-window">
        <div id="header">
          Equipment
        </div>
        <hr align="center" width="90%"></hr>
        <div id="equip-category">
          <div id="category-icons">
            <button className="tooltip" id="accessory-icon" onClick={() => this.setCategory("accessories")}>
              <img src="bdo-img/accessories/top_tier/ogre_ring.png"/>
              <div className="tooltiptext" id="left">
                <span>Accessories</span>
              </div>
            </button>
            <button className="tooltip" id="black-stone-weapon" onClick={() => this.setCategory("weapons")}>
              <img src="bdo-img/black_stone/black_stone_weapon.png"/>
              <div className="tooltiptext" id="left">
                <span>Weapon</span>
              </div>
            </button>
            <button className="tooltip" id="black-stone-armor" onClick={() => this.setCategory("armors")}>
              <img src="bdo-img/black_stone/black_stone_armor.png"/>
              <div className="tooltiptext" id="right">
                <span>Armor</span>
              </div>
            </button>
          </div>
        </div>
        {this.displayCategoryItems()}
      </div>
    );
  }
}

export default EquipmentWindow;