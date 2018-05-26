import React from "react";
import BossArmor from "./boss-armor";
import TopTier from "./top-tier";
import Dandelion from "./dandelion";
import Kzarka from "./kzarka";
import Liverto from "./liverto";

class EquipmentWindow extends React.Component {
  render() {
    return(
      <div id="equipment-window">
        <div id="header">
          Equipment
        </div>
        <hr align="center" width="90%"></hr>
        <div id="equip-category">
          <div id="category-icons">
            <button className="tooltip" id="accessory-icon">
              <img src="bdo-img/accessories/top_tier/ogre_ring.png"/>
              <div className="tooltiptext" id="left">
                <span>Accessories</span>
              </div>
            </button>
            <button className="tooltip" id="black-stone-weapon">
              <img src="bdo-img/black_stone/black_stone_weapon.png"/>
              <div className="tooltiptext" id="left">
                <span>Weapon</span>
              </div>
            </button>
            <button className="tooltip" id="black-stone-armor">
              <img src="bdo-img/black_stone/black_stone_armor.png"/>
              <div className="tooltiptext" id="right">
                <span>Armor</span>
              </div>
            </button>
          </div>
        </div>
        <div id="accessories">
          <TopTier />
        </div>
        <div id="weapons">
          <Dandelion />
          <Kzarka />
          <Liverto />
        </div>
        <div id="armor">
          <BossArmor />
        </div>
      </div>
    );
  }
}

export default EquipmentWindow;