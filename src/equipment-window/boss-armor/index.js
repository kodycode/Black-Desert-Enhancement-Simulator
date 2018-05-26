import React from "react";

class BossArmor extends React.Component {
  render() {
    return (
      <div className="boss-armor">
        <div id="header">
          Boss Armor (Enhancement not featured yet)
        </div>
        <hr align="center" width="70%"></hr>
        <img onMouseOver="imgover(this, 'giath_helmet_description')" src="bdo-img/armor/boss_armor/giath_helmet.png" onMouseOut="imgout('giath_helmet_description')"/>
        <img onMouseOver="imgover(this, 'tree_spirit_armor_description')" src="bdo-img/armor/boss_armor/tree_spirit_armor.png" onMouseOut="imgout('tree_spirit_armor_description')"/>
        <img onMouseOver="imgover(this, 'red_nose_armor_description')" src="bdo-img/armor/boss_armor/red_nose_armor.png" onMouseOut="imgout('red_nose_armor_description')"/>
        <img onMouseOver="imgover(this, 'bheg_gloves_description')" src="bdo-img/armor/boss_armor/bheg_gloves.png" onMouseOut="imgout('bheg_gloves_description')"/>
        <img onMouseOver="imgover(this, 'muskan_shoes_description')" src="bdo-img/armor/boss_armor/muskan_shoes.png" onMouseOut="imgout('muskan_shoes_description')"/>
      </div>
    );
  }
}

export default BossArmor;