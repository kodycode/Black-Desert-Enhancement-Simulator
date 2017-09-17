var tempTooltipAP;		//holds original tooltip ap description

//displays tooltip from equipment window
function imgover(img, desc) {
  var equipmentLeft = $("#equipment_window").position().left;
  var equipmentWidth = $("#equipment_window").width();
  var equipmentRight = (equipmentLeft + equipmentWidth);

  document.getElementById(desc).style.display = 'block';
  document.getElementById(desc).style.left = (equipmentRight) + "px";

  if (desc.startsWith("liverto"))
  {
    document.getElementById(desc).style.left = (equipmentRight) + "px";
  }
}

//displays tooltip from inventory
function imgoverInventory(img, desc) {
  var inventoryLeft = $("#inventory_window").position().left;
  var tooltipWidth = 365;
  var imgRight = (inventoryLeft - tooltipWidth);
  var weaponId = $(img).attr('id');
  var descSpan;
  var descAp = $('#' + desc).children('.total_ap');

  //if weapon enhancement rank greater than 15, display new counts
  //for concentrated blackstones, and a separate count for regular
  //black stone success/failure
  if (obj[weaponId].enhanceRank >= 15)
  {
    var spanEnhancementSuccessCount = '<span class="enhancement_success_count"> </br>' +
                                         ' Total Enhancement Success Count: ' + obj[weaponId].enhancementSuccessCount +
                                         ' (Pre-15: ' + obj[weaponId].blackStoneWeaponTotalSuccess + ')' +
                                         '</span>';

    var spanEnhancementFailCount = '<span class="enhancement_fail_count"> </br>' +
                                      ' Total Enhancement Fail Count: ' + obj[weaponId].enhancementFailCount +
                                      ' (Pre-15: ' + obj[weaponId].blackStoneWeaponTotalFailure + ')' +
                                      '</span>';

    var spanTotalEnhancementCount = '<span class="total_enhancement_attempts"> </br>' +
                                       ' Total Enhancement Count: ' + obj[weaponId].totalEnhancementAttempts +
                                       '</span>';
  }
  else
  {
    var spanEnhancementSuccessCount = '<span class="enhancement_success_count"> </br>' +
                                         ' Total Enhancement Success Count: ' + obj[weaponId].enhancementSuccessCount +
                                         '</span>';
    var spanEnhancementFailCount = '<span class="enhancement_fail_count"> </br>' +
                                      ' Total Enhancement Fail Count: ' + obj[weaponId].enhancementFailCount +
                                      '</span>';
    var spanTotalEnhancementCount = '<span class="total_enhancement_attempts"> </br>' +
                                       ' Total Enhancement Count: ' + obj[weaponId].totalEnhancementAttempts +
                                       '</span>';
  }

  tempTooltipAP = descAp.text();

  $('#' + desc).append(spanEnhancementSuccessCount);
  $('#' + desc).append(spanEnhancementFailCount);
  $('#' + desc).append(spanTotalEnhancementCount);


  //makes liverto icon blue
  if (obj[weaponId].item_class === "liverto")
  {
    descSpan = $('#' + desc).children('.blue_weapon_name');
    tempTooltipName = $('#' + desc).children('.blue_weapon_name').text();
  }
  //makes everything not a liverto yellow
  else
  {
    descSpan = $('#' + desc).children('.gold_weapon_name');
    tempTooltipName = $('#' + desc).children('.gold_weapon_name').text();
  }

  //adds enhancement rank to weapon name
  if (obj[weaponId].enhanceRank >= 1)
  {
    descSpan.text('+' + obj[weaponId].enhanceRank + ' ' + tempTooltipName);
  }

  displayAp(weaponId, desc, descAp, imgRight);
}

//removes tooltip
function imgout(desc) {
  var descGoldSpan = $('#' + desc).children('.gold_weapon_name');
  var descBlueSpan = $('#' + desc).children('.blue_weapon_name');
  var descEnhancementSuccessCount = $('#' + desc).children('.enhancement_success_count');
  var descEnhancementFailCount = $('#' + desc).children('.enhancement_fail_count');
  var descEnhancementTotalCount = $('#' + desc).children('.total_enhancement_attempts');
  var descAp = $('#' + desc).children('.total_ap');

  document.getElementById(desc).style.display = 'none';

  tempTooltipName = descGoldSpan.text().replace(/[^a-zA-Z ]+/, '');
  descGoldSpan.text(tempTooltipName);
  tempTooltipName = descBlueSpan.text().replace(/[^a-zA-Z ]+/, '');
  descBlueSpan.text(tempTooltipName);
  descAp.text(tempTooltipAP);
  descEnhancementSuccessCount.remove();
  descEnhancementFailCount.remove();
  descEnhancementTotalCount.remove();
}
