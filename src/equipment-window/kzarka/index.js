import React from "react";

class Kzarka extends React.Component {
  render() {
    return (
      <div className="kzarka">
        <div id="header">
          Kzarka Weapons
        </div>
        <hr align="center" width="70%"></hr>
        <img onMouseOver="imgover(this, 'kzarka_amulet_description')" src="bdo-img/weapons/kzarka/kzarka_amulet.png" onMouseDown="imgdown(this, 'kzarka_amulet_description')" onMouseOut="imgout('kzarka_amulet_description')"/>
        <img onMouseOver="imgover(this, 'kzarka_axe_description')" src="bdo-img/weapons/kzarka/kzarka_axe.png" onMouseDown="imgdown(this, 'kzarka_axe_description')" onMouseOut="imgout('kzarka_axe_description')"/>
        <img onMouseOver="imgover(this, 'kzarka_blade_description')" src="bdo-img/weapons/kzarka/kzarka_blade.png" onMouseDown="imgdown(this, 'kzarka_blade_description')" onMouseOut="imgout('kzarka_blade_description')"/>
        <img onMouseOver="imgover(this, 'kzarka_longbow_description')" src="bdo-img/weapons/kzarka/kzarka_longbow.png" onMouseDown="imgdown(this, 'kzarka_longbow_description')" onMouseOut="imgout('kzarka_longbow_description')"/>
        <img onMouseOver="imgover(this, 'kzarka_longsword_description')" src="bdo-img/weapons/kzarka/kzarka_longsword.png" onMouseDown="imgdown(this, 'kzarka_longsword_description')" onMouseOut="imgout('kzarka_longsword_description')"/>
        <img onMouseOver="imgover(this, 'kzarka_shortsword_description')" src="bdo-img/weapons/kzarka/kzarka_shortsword.png" onMouseDown="imgdown(this, 'kzarka_shortsword_description')" onMouseOut="imgout('kzarka_shortsword_description')"/>
        <div className="second-row">
          <img onMouseOver="imgover(this, 'kzarka_staff_description')" src="bdo-img/weapons/kzarka/kzarka_staff.png" onMouseDown="imgdown(this, 'kzarka_staff_description')" onMouseOut="imgout('kzarka_staff_description')"/>
          <img onMouseOver="imgover(this, 'kzarka_kriegsmesser_description')" src="bdo-img/weapons/kzarka/kzarka_kriegsmesser.png" onMouseDown="imgdown(this, 'kzarka_kriegsmesser_description')" onMouseOut="imgout('kzarka_kriegsmesser_description')"/>
		  <img onMouseOver="imgover(this, 'kzarka_gauntlet_description')" src="bdo-img/weapons/kzarka/kzarka_gauntlet.png" onMouseDown="imgdown(this, 'kzarka_gauntlet_description')" onMouseOut="imgout('kzarka_gauntlet_description')"/>
        </div>
      </div>
    );
  }
}

export default Kzarka;