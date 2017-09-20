var successSound = new Audio("wav/success.wav");
successSound.volume = 0.2;


function playEnhancementSuccessSound() {
  successSound.currentTime = 0;
  successSound.play();
}

function enhancementSuccess(obj, weaponId, slotNum, existingDiv) {
  playEnhancementSuccessSound();

  if (obj[weaponId].enhanceRank === 0 && obj[weaponId].itemClass === "top_tier")
  {
    obj[weaponId].enhanceRank = 16;
  }
  else
  {
    obj[weaponId].enhanceRank++;
  }

  obj[weaponId].enhancementSuccessCount++;
  obj[weaponId].totalEnhancementAttempts++;

  if (obj[weaponId].enhanceRank > 7) {
    failStackCount = 0;
  }

  if(existingDiv.attr('id') === "enhancement_rank")
  {
    existingDiv.remove();
  }

  //checks if there is an existing item in enhancement window
  if ($('#temp_enhancement_rank').length)
  {
    $('#temp_enhancement_rank').remove();
  }

  prependEnhancementRank(obj, slotNum, weaponId);

  $('#counter').text('+' + failStackCount);
}
