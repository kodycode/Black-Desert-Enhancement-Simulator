//base enhancement rates
var enhancementRate = {
  eight: 0.2,
  nine: 0.175,
  ten: 0.15,
  eleven: 0.125,
  twelve: 0.1,
  thirteen: 0.075,
  fourteen: 0.05,
  fifteen: 0.025,
  sixteen: 0.15,
  seventeen: 0.075,
  eighteen: 0.05,
  nineteen: 0.02,
  twenty: 0.015
}

//max number of failStacks you can possibly have to
//increase odds
var failStackLimit = {
  eight: 13,
  nine: 14,
  ten: 15,
  eleven: 16,
  twelve: 18,
  thirteen: 20,
  fourteen: 25,
  fifteen: 25,
  sixteen: 25,
  seventeen: 35,
  eighteen: 44,
  nineteen: 90,
  twenty: 124
}

//enhancement rates for each rank
var failStackRate = {
  eight: 0.025,
  nine: 0.02,
  ten: 0.015,
  eleven: 0.0125,
  twelve: 0.0075,
  thirteen: 0.063,
  fourteen: 0.005,
  fifteen: 0.005,
  sixteen: 0.015,
  seventeen: 0.0075,
  eighteen: 0.005,
  nineteen: 0.0025,
  twenty: 0.0025
};

function getFailstackPercentage(enhanceRank) {
  switch (enhanceRank) {
    case (7):
      return failStackCount <= failStackLimit.eight
          ? failStackCount * failStackRate.eight
          : failStackLimit.eight * failStackRate.eight;

    case (8):
      return failStackCount <= failStackLimit.nine
          ? failStackCount * failStackRate.nine
          : failStackLimit.nine * failStackRate.nine;

    case (9):
      return failStackCount <= failStackLimit.ten
          ? failStackCount * failStackRate.ten
          : failStackLimit.ten * failStackRate.ten;

    case (10):
      return failStackCount <= failStackLimit.eleven
          ? failStackCount * failStackRate.eleven
          : failStackLimit.eleven * failStackRate.eleven;

    case (11):
      return failStackCount <= failStackLimit.twelve
          ? failStackCount * failStackRate.twelve
          : failStackLimit.twelve * failStackRate.twelve;

    case (12):
      return failStackCount <= failStackLimit.thirteen
          ? failStackCount * failStackRate.thirteen
          : failStackLimit.thirteen * failStackRate.thirteen;

    case (13):
      return failStackCount <= failStackLimit.fourteen
          ? failStackCount * failStackRate.fourteen
          : failStackLimit.fourteen * failStackRate.fourteen;

    case (14):
      return failStackCount <= failStackLimit.fifteen
          ? failStackCount * failStackRate.fifteen
          : failStackLimit.fifteen * failStackRate.fifteen;

    case (15):
      return failStackCount <= failStackLimit.sixteen
          ? failStackCount * failStackRate.sixteen
          : failStackLimit.sixteen * failStackRate.sixteen;

    case (16):
      return failStackCount <= failStackLimit.seventeen
          ? failStackCount * failStackRate.seventeen
          : failStackLimit.seventeen * failStackRate.seventeen;

    case (17):
      return failStackCount <= failStackLimit.eighteen
          ? failStackCount * failStackRate.eighteen
          : failStackLimit.eighteen * failStackRate.eighteen;

    case (18):
      return failStackCount <= failStackLimit.nineteen
          ? failStackCount * failStackRate.nineteen
          : failStackLimit.nineteen * failStackRate.nineteen;

    case (19):
      return failStackCount <= failStackLimit.twenty
          ? failStackCount * failStackRate.twenty
          : failStackLimit.twenty * failStackRate.twenty;

    default:
      return 0;
  }
}

function enhanceItem(obj, weaponId, slotNum, randomNum, existingDiv) {
  if (obj[weaponId].enhanceRank >= 20)
  {
    return;
  }

  var accessoryStartRank = 14;
  var enhanceRank = (obj[weaponId].itemClass === "top_tier" && obj[weaponId].enhanceRank === 0)
                   ? accessoryStartRank
                   : obj[weaponId].enhanceRank;
  var failStackPercentage = getFailstackPercentage(enhanceRank);
  var enhanceChance = randomNum - failStackPercentage;

  if (obj[weaponId].itemClass === "liverto") {
    var temp;
    enhanceChance -= failStackPercentage;
    temp = Math.abs(enhanceChance) * 0.3;
    enhanceChance += temp;
  }
  else {
    var temp;
    enhanceChance -= failStackPercentage;
    temp = Math.abs(enhanceChance) * 0.4;
    enhanceChance += temp;
  }

  switch (enhanceRank)
  {
    case (7):
      if (enhanceChance <= enhancementRate.eight) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (8):
      if (enhanceChance <= enhancementRate.nine) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (9):
      if (enhanceChance <= enhancementRate.ten) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (10):
      if (enhanceChance <= enhancementRate.eleven) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (11):
      if (enhanceChance <= enhancementRate.twelve) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (12):
      if (enhanceChance <= enhancementRate.thirteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (13):
      if (enhanceChance <= enhancementRate.fourteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (14):
      if (enhanceChance <= enhancementRate.fifteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);

        if ($('#black_stone_weapon_temp').length) {
          $('#black_stone_weapon_temp').attr('src', "img/black_stone/concentrated_magical_black_stone_weapon.png");
        }

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
      if (enhanceChance <= enhancementRate.sixteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (16):
      if (enhanceChance <= enhancementRate.seventeen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (17):
      if (enhanceChance <= enhancementRate.eighteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (18):
      if (enhanceChance <= enhancementRate.nineteen) {
        enhancementSuccess(obj, weaponId, slotNum, existingDiv);
      }
      else {
        enhancementFailure(obj, weaponId, slotNum, existingDiv);
      }
      break;

    case (19):
      if (enhanceChance <= enhancementRate.twenty) {
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
