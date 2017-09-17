var draggedObject;
var temp1;
var temp2;
var tempClass;

//allows you to drag weapon names
function drag(ev, desc) {
  var descGoldSpan = $('#' + desc).children('.gold_weapon_name');
  var descBlueSpan = $('#' + desc).children('.blue_weapon_name');

  temp1 = '#' + ev.target.getAttribute('id');
  temp2 = ev.target.getAttribute('id');
  tempClass = ev.target.getAttribute('class')

  tempTooltipName = descGoldSpan.text().replace(/[^a-zA-Z ]+/, '');
  descGoldSpan.text(tempTooltipName);
  tempTooltipName = descBlueSpan.text().replace(/[^a-zA-Z ]+/, '');
  descBlueSpan.text(tempTooltipName);

  document.getElementById(desc).style.display = 'none';
}

//allows you to drop item in location
function allowDrop(ev) {
    ev.preventDefault();
}

//trash: remove inventory items
function drop(ev) {
  if ((!((selectedItemSlot === ev.target.getAttribute('id')) || (selectedItemSlot === temp2)) &&
     ((ev.target.getAttribute('id') === "background") || (ev.target.getAttribute('id') === "container")) ))
  {
    var slotNum = '#slot_' + temp2;

    //taking advantage of the top-down approach of the code :(
    if ($(temp1).attr('class') === 'item_temp')
    {
      $('#temp_enhancement_rank').remove();
    }

    $(slotNum).children('div').remove();

    $(temp1).remove();

    if ($(temp1).length)
    {
      $(temp1).remove();
    }

    delete obj[temp2];

    weaponCount--;
    inventoryCount--;
    slotCount--;
    obj.splice(temp2,1);
    removedNum.push(temp2);
    makeEmptySlot(temp2);
  }
}

//makes empty placeholder for deleted item
function makeEmptySlot(temp2) {
  obj.splice(temp2, 0, new inventoryObject());
  obj[temp2].empty = true;
}

//swap table elements
function swapTd(ev) {
  if (!((selectedItemSlot === ev.target.getAttribute('id')) || (selectedItemSlot === temp2)))
  {
    var td1 =  $(temp1).parent();
    var td2 =  $('#' + ev.target.getAttribute('id')).parent();
    var checkDiv1 = $('#slot_' + temp2 + ' > *').length;
    var checkDiv2 = $('#slot_' + ev.target.getAttribute('id') + ' > *').length;
    var div1 = document.getElementById('slot_' + temp2).children[0].outerHTML;
    var div2 = document.getElementById('slot_' + ev.target.getAttribute('id')).children[0].outerHTML;
    var img1 = document.getElementById(temp2).outerHTML;
    var img2 = document.getElementById(ev.target.getAttribute('id')).outerHTML;
    var slotNum1 = "#slot_" + temp2;
    var slotNum2 = "#slot_" + ev.target.getAttribute('id');

    var slotTemp1 = '#' + temp2;
    var slotTemp2 = '#' + ev.target.getAttribute('id');

    //swap object values
    var tempObjVal;

    tempObjVal = obj[temp2].slotNumber;
    obj[temp2].slotNumber = obj[ev.target.getAttribute('id')].slotNumber;
    obj[ev.target.getAttribute('id')].slotNumber = tempObjVal;

    tempObjVal = obj[temp2].itemClass;
    obj[temp2].itemClass = obj[ev.target.getAttribute('id')].itemClass;
    obj[ev.target.getAttribute('id')].itemClass = tempObjVal;

    tempObjVal = obj[temp2].itemDesc;
    obj[temp2].itemDesc = obj[ev.target.getAttribute('id')].itemDesc;
    obj[ev.target.getAttribute('id')].itemDesc = tempObjVal;

    tempObjVal = obj[temp2].enhanceRank;
    obj[temp2].enhanceRank = obj[ev.target.getAttribute('id')].enhanceRank;
    obj[ev.target.getAttribute('id')].enhanceRank = tempObjVal;

    tempObjVal = obj[temp2].enhancementSuccessCount;
    obj[temp2].enhancementSuccessCount = obj[ev.target.getAttribute('id')].enhancementSuccessCount;
    obj[ev.target.getAttribute('id')].enhancementSuccessCount = tempObjVal;

    tempObjVal = obj[temp2].enhancementFailCount;
    obj[temp2].enhancementFailCount = obj[ev.target.getAttribute('id')].enhancementFailCount;
    obj[ev.target.getAttribute('id')].enhancementFailCount = tempObjVal;

    tempObjVal = obj[temp2].blackStoneWeaponTotalSuccess;
    obj[temp2].blackStoneWeaponTotalSuccess = obj[ev.target.getAttribute('id')].blackStoneWeaponTotalSuccess;
    obj[ev.target.getAttribute('id')].blackStoneWeaponTotalSuccess = tempObjVal;

    tempObjVal = obj[temp2].blackStoneWeaponTotalFailure;
    obj[temp2].blackStoneWeaponTotalFailure = obj[ev.target.getAttribute('id')].blackStoneWeaponTotalFailure;
    obj[ev.target.getAttribute('id')].blackStoneWeaponTotalFailure = tempObjVal;

    tempObjVal = obj[temp2].totalEnhancementAttempts;
    obj[temp2].totalEnhancementAttempts = obj[ev.target.getAttribute('id')].totalEnhancementAttempts;
    obj[ev.target.getAttribute('id')].totalEnhancementAttempts = tempObjVal;

    //swap table elements
    if (checkDiv1 == 2 && checkDiv2 == 2)
    {
      $(slotNum1).find('div').remove();
      $(slotNum2).find('div').remove();

      $(slotTemp1).remove();
      $(slotNum2).append(div1);
      $(slotNum2).append(img1);
      $(slotTemp1).attr("id", ev.target.getAttribute('id'));

      $(slotTemp2).remove();
      $(slotNum1).append(div2);
      $(slotNum1).append(img2);
      $(slotNum1).children('img').attr("id", temp2);
    }
    //not destination
    else if (checkDiv1 == 2)
    {
      $(slotNum1).find('div').remove();

      $(slotTemp1).remove();
      $(slotNum2).append(div1);
      $(slotNum2).append(img1);
      $(slotTemp1).attr("id", ev.target.getAttribute('id'));

      $(slotTemp2).remove();
      $(slotNum1).append(img2);
      $(slotNum1).children('img').attr("id", temp2);
    }
    //destination
    else if (checkDiv2 == 2)
    {
      $(slotNum2).find('div').remove();

      $(slotTemp1).remove();
      $(slotNum2).append(img1);
      $(slotTemp1).attr("id", ev.target.getAttribute('id'));

      $(slotTemp2).remove();
      $(slotNum1).append(div2);
      $(slotNum1).append(img2);
      $(slotNum1).children('img').attr("id", temp2);
    }
    else
    {
      $(slotTemp1).remove();
      $(slotNum2).append(img1);
      $(slotTemp1).attr("id", ev.target.getAttribute('id'));

      $(slotTemp2).remove();
      $(slotNum1).append(img2);
      $(slotNum1).children('img').attr("id", temp2);
    }
  }
}
