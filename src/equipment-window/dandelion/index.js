import React from "react";

/*regex: (?<=dandelion_)(.*)(?=\.png)*/
const WEAPON_DIRECTORY = "bdo-img/weapons/dandelion/";

class TopTier extends React.Component {
  render() {
    return (
      <div className="dandelion" id="dandelion-margin">
        <div id="header">
          Dandelion Weapons
        </div>
        <hr align="center" width="70%"></hr>
        <img onMouseOver="imgover(this, 'aad_sphera_description')" src="bdo-img/weapons/dandelion/dandelion_aad_sphera.png" onMouseDown="imgdown(this, 'aad_sphera_description')" onMouseOut="imgout('aad_sphera_description')"/>
        <img onMouseOver="imgover(this, 'celestial_bo_staff_description')" src="bdo-img/weapons/dandelion/dandelion_celestial_bo_staff.png" onMouseDown="imgdown(this, 'celestial_bo_staff_description')" onMouseOut="imgout('celestial_bo_staff_description')"/>
        <img onMouseOver="imgover(this, 'crescent_blade_description')" src="bdo-img/weapons/dandelion/dandelion_crescent_blade.png" onMouseDown="imgdown(this, 'crescent_blade_description')" onMouseOut="imgout('crescent_blade_description')"/>
        <img onMouseOver="imgover(this, 'godr_sphera_description')" src="bdo-img/weapons/dandelion/dandelion_godr_sphera.png" onMouseDown="imgdown(this, 'godr_sphera_description')" onMouseOut="imgout('godr_sphera_description')"/>
        <img onMouseOver="imgover(this, 'great_sword_description')" src="bdo-img/weapons/dandelion/dandelion_great_sword.png" onMouseDown="imgdown(this, 'great_sword_description')" onMouseOut="imgout('great_sword_description')"/>
        <img onMouseOver="imgover(this, 'iron_buster_description')" src="bdo-img/weapons/dandelion/dandelion_iron_buster.png" onMouseDown="imgdown(this, 'iron_buster_description')" onMouseOut="imgout('iron_buster_description')"/>
        <div className="second-row">
          <img onMouseOver="imgover(this, 'kamasylven_sword_description')" src="bdo-img/weapons/dandelion/dandelion_kamasylven_sword.png" onMouseDown="imgdown(this, 'kamasylven_sword_description')" onMouseOut="imgout('kamasylven_sword_description')"/>
          <img onMouseOver="imgover(this, 'kerispear_description')" src="bdo-img/weapons/dandelion/dandelion_kerispear.png" onMouseDown="imgdown(this, 'kerispear_description')" onMouseOut="imgout('kerispear_description')"/>
          <img onMouseOver="imgover(this, 'lancia_description')" src="bdo-img/weapons/dandelion/dandelion_lancia.png" onMouseDown="imgdown(this, 'lancia_description')" onMouseOut="imgout('lancia_description')"/>
          <img onMouseOver="imgover(this, 'sah_chakram_description')" src="bdo-img/weapons/dandelion/dandelion_sah_chakram.png" onMouseDown="imgdown(this, 'sah_chakram_description')" onMouseOut="imgout('sah_chakram_description')"/>
          <img onMouseOver="imgover(this, 'scythe_description')" src="bdo-img/weapons/dandelion/dandelion_scythe.png" onMouseDown="imgdown(this, 'scythe_description')" onMouseOut="imgout('scythe_description')"/>
          <img onMouseOver="imgover(this, 'sura_katana_description')" src="bdo-img/weapons/dandelion/dandelion_sura_katana.png" onMouseDown="imgdown(this, 'sura_katana_description')" onMouseOut="imgout('sura_katana_description')"/>
        </div>
        <div className="third-row">
          <img onMouseOver="imgover(this, 'vediant_description')" src="bdo-img/weapons/dandelion/dandelion_vediant.png" onMouseDown="imgdown(this, 'vediant_description')" onMouseOut="imgout('vediant_description')"/>
		      <img onMouseOver="imgover(this, 'gardbrace_description')" src="bdo-img/weapons/dandelion/dandelion_gardbrace.png" onMouseDown="imgdown(this, 'gardbrace_description')" onMouseOut="imgout('gardbrace_description')"/>
		      <img onMouseOver="imgover(this, 'mystic_glove_description')" src="bdo-img/weapons/dandelion/dandelion_mystic_glove.png" onMouseDown="imgdown(this, 'mystic_glove_description')" onMouseOut="imgout('mystic_glove_description')"/>
        </div>
      </div>
    );
  }
}

export default TopTier;