import React from "react";

class Kzarka extends React.Component {
  render() {
    return (
      <div className="liverto">
        <div id="header">
          Liverto Weapons
        </div>
        <hr align="center" width="70%"></hr>
        <img onMouseOver="imgover(this, 'liverto_amulet_description')" src="bdo-img/weapons/liverto/liverto_amulet.png" onMouseDown="imgdown(this, 'liverto_amulet_description')" onMouseOut="imgout('liverto_amulet_description')"/>
        <img onMouseOver="imgover(this, 'liverto_axe_description')" src="bdo-img/weapons/liverto/liverto_axe.png" onMouseDown="imgdown(this, 'liverto_axe_description')" onMouseOut="imgout('liverto_axe_description')"/>
        <img onMouseOver="imgover(this, 'liverto_blade_description')" src="bdo-img/weapons/liverto/liverto_blade.png" onMouseDown="imgdown(this, 'liverto_blade_description')" onMouseOut="imgout('liverto_blade_description')"/>
        <img onMouseOver="imgover(this, 'liverto_longbow_description')" src="bdo-img/weapons/liverto/liverto_longbow.png" onMouseDown="imgdown(this, 'liverto_longbow_description')" onMouseOut="imgout('liverto_longbow_description')"/>
        <img onMouseOver="imgover(this, 'liverto_longsword_description')" src="bdo-img/weapons/liverto/liverto_longsword.png" onMouseDown="imgdown(this, 'liverto_longsword_description')" onMouseOut="imgout('liverto_longsword_description')"/>
        <img onMouseOver="imgover(this, 'liverto_shortsword_description')" src="bdo-img/weapons/liverto/liverto_shortsword.png" onMouseDown="imgdown(this, 'liverto_shortsword_description')" onMouseOut="imgout('liverto_shortsword_description')"/>
        <div className="second-row">
          <img onMouseOver="imgover(this, 'liverto_staff_description')" src="bdo-img/weapons/liverto/liverto_staff.png" onMouseDown="imgdown(this, 'liverto_staff_description')" onMouseOut="imgout('liverto_staff_description')"/>
          <img onMouseOver="imgover(this, 'liverto_kriegsmesser_description')" src="bdo-img/weapons/liverto/liverto_kriegsmesser.png" onMouseDown="imgdown(this, 'liverto_kriegsmesser_description')" onMouseOut="imgout('liverto_kriegsmesser_description')"/>
          <img onMouseOver="imgover(this, 'liverto_gauntlet_description')" src="bdo-img/weapons/liverto/liverto_gauntlet.png" onMouseDown="imgdown(this, 'liverto_gauntlet_description')" onMouseOut="imgout('liverto_gauntlet_description')"/>
        </div>
      </div>
    );
  }
}

export default Kzarka;