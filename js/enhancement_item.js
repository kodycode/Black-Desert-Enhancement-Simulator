function getFailstackPercentage(enhanceRank) {
  switch (enhanceRank) {
    case (7):
      return failstackCount <= 13 ? failstackCount * .025 : 13 * .025;

    case (8):
      return failstackCount <= 14 ? failstackCount * .02 : 14 * .02;

    case (9):
      return failstackCount <= 15 ? failstackCount * .015 : 15 * .015;

    case (10):
      return failstackCount <= 16 ? failstackCount * .0125 : 16 * .0125;

    case (11):
      return failstackCount <= 18 ? failstackCount * .0075 : 18 * .0075;

    case (12):
      return failstackCount <= 20 ? failstackCount * .0063 : 20 * .0063;

    case (13):
      return failstackCount <= 25 ? failstackCount * .005 : 25 * .005;

    case (14):
      return failstackCount <= 25 ? failstackCount * .005 : 25 * .005;

    case (15):
      return failstackCount <= 25 ? failstackCount * .015 : 25 * .015;

    case (16):
      return failstackCount <= 35 ? failstackCount * .0075 : 35 * .0075;

    case (17):
      return failstackCount <= 44 ? failstackCount * .005 : 44 * .005;

    case (18):
      return failstackCount <= 90 ? failstackCount * .0025 : 90 * .0025;

    case (19):
      return failstackCount <= 124 ? failstackCount * .0025 : 124 * .0025;
  }
}

function enhanceItem(obj, weaponId, slotNum, randomNum, existingDiv) {
  var enhanceRank = obj[weaponId].enhanceRank;
  var enhanceChance = randomNum - getFailstackPercentage(enhanceRank);

  if (obj[weaponId].enhanceRank >= 20)
  {
    return;
  }

  if (obj[weaponId].itemClass === "top_tier" && obj[weaponId].enhanceRank === 0)
  {
    enhanceRank = 14;
  }

  switch (enhanceRank)
  {
    case (7):
      if (enhanceChance <= enhancementRank.eight) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (8):
      if (enhanceChance <= enhancementRank.nine) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (9):
      if (enhanceChance <= enhancementRank.ten) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (10):
      if (enhanceChance <= enhancementRank.eleven) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (11):
      if (enhanceChance <= enhancementRank.twelve) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (12):
      if (enhanceChance <= enhancementRank.thirteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (13):
      if (enhanceChance <= enhancementRank.fourteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (14):
      if (enhanceChance <= enhancementRank.fifteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
        if (obj[weaponId].itemClass !== "top_tier")
        {
          obj[weaponId].blackStoneWeaponTotalSuccess = obj[weaponId].enhancementSuccessCount;
          obj[weaponId].blackStoneWeaponTotalFailure = obj[weaponId].enhancementFailCount;
          obj[weaponId].enhancementSuccessCount = 0;
          obj[weaponId].enhancementFailCount = 0;
        }
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (15):
      if (enhanceChance <= enhancementRank.sixteen) {
        if ($('#black_stone_weapon_temp').length) {
          $('#black_stone_weapon_temp').attr('src', "img/black_stone/concentrated_magical_black_stone_weapon.png");
        }
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (16):
      if (enhanceChance <= enhancementRank.seventeen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (17):
      if (enhanceChance <= enhancementRank.eighteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (18):
      if (enhanceChance <= enhancementRank.nineteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (19):
      if (enhanceChance <= enhancementRank.twenty) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    default:
      enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      break;
  }
}
