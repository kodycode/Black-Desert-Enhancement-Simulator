import React from "react";

class TopTier extends React.Component {
  render() {
    return (
      <div className="top-tier">
        <div id="header">
          Best in Slot
        </div>
        <hr align="center" width="70%"></hr>
        <img onMouseOver="imgover(this, 'ogre_ring_description')" src="bdo-img/accessories/top_tier/ogre_ring.png" onMouseDown="imgdown(this, 'ogre_ring_description')" onMouseOut="imgout('ogre_ring_description')"/>
        <img onMouseOver="imgover(this, 'tungrade_earring_description')" src="bdo-img/accessories/top_tier/tungrade_earring.png" onMouseDown="imgdown(this, 'tungrade_earring_description')" onMouseOut="imgout('tungrade_earring_description')"/>
        <img onMouseOver="imgover(this, 'basilisk_belt_description')" src="bdo-img/accessories/top_tier/basilisk_belt.png" onMouseDown="imgdown(this, 'basilisk_belt_description')" onMouseOut="imgout('basilisk_belt_description')"/>
        <img onMouseOver="imgover(this, 'ring_of_crescent_guardian_description')" src="bdo-img/accessories/top_tier/ring_of_crescent_guardian.png" onMouseDown="imgdown(this, 'ring_of_crescent_guardian_description')" onMouseOut="imgout('ring_of_crescent_guardian_description')"/>
      </div>
    );
  }
}

export default TopTier;