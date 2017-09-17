var failureSound = new Audio("wav/failure.wav");
failureSound.volume = 0.3;

function playEnhancementFailureSound() {
  failureSound.currentTime = 0;
  failureSound.play();
}

function derankEnhancement(obj, weaponId, slotNum, existingDiv) {
  if(existingDiv.attr('id') === "enhancement_rank")
  {
    existingDiv.remove();
  }

  //checks if there is an existing item in enhancement window
  if  ($('#temp_enhancement_rank').length)
  {
    $('#temp_enhancement_rank').remove();
  }

  prependEnhancementRank(obj, slotNum, weaponId);
}

//remove accessories upon failure
function removeAcc(weaponId) {
  var slotNum = '#slot_' + weaponId;
  var slotId = '#' + weaponId;

  //checks if there is an existing item in enhancement window
  if  ($('#temp_enhancement_rank').length)
  {
    $('#temp_enhancement_rank').remove();
  }

  if ($('#acc_temp').length)
  {
    $('#acc_temp').remove();
  }

  if  ($('#temp_container').length)
  {
    $('#temp_container').remove();
  }

  $(slotNum).children('div').remove();

  $(slotId).remove();

  if ($(slotId).length)
  {
    $(slotId).remove();
  }

  delete obj[weaponId];

  weaponCount--;
  inventoryCount--;
  slotCount--;
  obj.splice(weaponId,1);
  removedNum.push(weaponId);
  makeEmptySlot(weaponId);
}

function enhancementFailure(obj, weaponId, slotNum, existingDiv) {
  playEnhancementFailureSound();

  if (obj[weaponId].itemClass === "top_tier")
  {
    removeAcc(weaponId);
    failstackCount++;
    $('#counter').text('+' + failstackCount);
  }
  else
  {
    obj[weaponId].enhancementFailCount++;
    obj[weaponId].totalEnhancementAttempts++;

    if (obj[weaponId].enhanceRank === 15)
    {
      failstackCount += 2;
    }
    else if (obj[weaponId].enhanceRank === 16)
    {
      derankEnhancement(obj, weaponId, slotNum, existingDiv);
      failstackCount += 3;
    }
    else if (obj[weaponId].enhanceRank === 17)
    {
      obj[weaponId].enhanceRank--;
      derankEnhancement(obj, weaponId, slotNum, existingDiv);
      failstackCount += 4;
    }
    else if (obj[weaponId].enhanceRank === 18)
    {
      obj[weaponId].enhanceRank--;
      derankEnhancement(obj, weaponId, slotNum, existingDiv);
      failstackCount += 5;
    }
    else if (obj[weaponId].enhanceRank === 19)
    {
      obj[weaponId].enhanceRank--;
      derankEnhancement(obj, weaponId, slotNum, existingDiv);
      failstackCount += 6;
    }
    else
    {
      failstackCount++;
    }
    $('#counter').text('+' + failstackCount);
  }
}
