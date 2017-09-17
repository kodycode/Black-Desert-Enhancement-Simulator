var inventoryCount = 0;	//keeps count of items in inventory
var slotsInRow = 8;		//slots per row
var obj = []; 				//stores objects from inventory
var weaponCount = 0;		//counts number of weapons
var removedNum = []; 		//stores an array of items that were removed
var slotCount = 0;			//counts slot-slot ID in other words
var selectedItemSlot = -1;//keeps track of what item is selected
var tempTooltipName;		//holds original tooltip name description


function inventoryObject() {
  this.slotNumber = 0;
  //this.item_name = "undefined";
  this.itemClass = "undefined";
  this.itemDesc = "undefined";
  this.enhanceRank = 0;
  this.enhancementSuccessCount = 0;
  this.enhancementFailCount = 0;
  this.totalEnhancementAttempts = 0;
  this.blackStoneWeaponTotalSuccess = 0;
  this.blackStoneWeaponTotalFailure = 0;
  this.empty = true;
}

$("#accessory_icon").on("click", function(){
  $("#accessories").show();
  $("#weapons").hide();
  $("#armor").hide();
});

$("#black_stone_weapon").on("click", function(){
  $("#accessories").hide();
  $("#armor").hide();
  $("#weapons").show();
});

$("#black_stone_armor").on("click", function(){
  $("#accessories").hide();
  $("#weapons").hide();
  $("#armor").show();
});

//numerical sorting function; credits to 'aks' on stackoverflow
function sortNumber(a,b) {
  return a - b;
}

//puts weapon from equipment to inventory when item is clicked on
function imgdown(img, desc) {
  var weaponObject = new inventoryObject();
  var rowNum = (Math.floor((inventoryCount/8))).toString();
  var table = ('#inventory_slots tbody .' + rowNum).toString();
  var parentDiv = ($(img).closest('div').attr('class'));

  var appendObject;

  //gets class
  weaponObject.itemClass = $(img).parent().attr('class');

  //moves up one more level to get the class if it fails the first time
  if (weaponObject.itemClass != "liverto" && weaponObject.itemClass != "kzarka" && weaponObject.itemClass != "dandelion" && weaponObject.itemClass != "top_tier")
  {
    weaponObject.itemClass = $(img).parent().parent().attr('class');
  }

  weaponObject.itemDesc = desc;

  //further advances one more level up to get weapon class
  //of weapons in the second/third row of the category
  //i.e. second/third row of dandelion weapons
  if (parentDiv === 'second_row' || parentDiv === 'third_row')
  {
    parentDiv = ($(img).closest('div').parent().attr('class'));
  }

  //if there are items that have been removed
  //sort the array of removed items by slot inventory Number
  //then clear old data from that inventory number
  //and append new img element to replace it
  if (typeof removedNum[0] != 'undefined')
  {
    removedNum.sort(sortNumber);

    if (obj[Number(removedNum[0])].empty === true)
    {
      delete obj.splice(Number(removedNum[0]), 1);
    }

    appendObject = '<img class=' + "'" + parentDiv + "'" +
                    ' id="' + removedNum[0] +'"' +
                    ' ondblclick="transitionItem(this)"' +
                    ' ondrop="return swapTd(event)"' +
                    ' ondragover="return allowDrop(event)"' +
                    ' ondragstart="return drag(event,' + "'" + weaponObject.itemDesc + "'" + ')"' +
                    ' onmousedown="transitionItemRclick(this, event)"' +
                    ' onmouseover="imgoverInventory(this, ' + "'"+ weaponObject.itemDesc + "'" + ')"' +
                    ' src="' + img.src + '"' +
                    ' onmouseout="imgout(' + "'" + weaponObject.itemDesc + "'" + ')"/>';
  }
  //otherwise just put the new item in the next available item slot
  else
  {
    appendObject = '<td class="slot"' +
                    ' id="slot_' + slotCount + '">' +
                    '<img class=' + "'" + parentDiv + "'" +
                    ' id="' + weaponCount + '"' +
                    ' ondrop="return swapTd(event)"' +
                    ' ondragover="return allowDrop(event)"' +
                    ' ondragstart="return drag(event,' + "'" + weaponObject.itemDesc + "'" + ')"' +
                    ' ondblclick="transitionItem(this)"' +
                    ' onmousedown="transitionItemRclick(this, event)"' +
                    ' src="' + img.src + '"' +
                    ' onmouseover="imgoverInventory(this, ' + "'"+ weaponObject.itemDesc + "'" + ')"' +
                    ' onmouseout="imgout(' + "'" + weaponObject.itemDesc + "'" + ')"/>' +
                    '</td>';
  }

  //make new item take the spot of the deleted item
  if ($('#slot_' + (removedNum).toString() + ':empty') && typeof removedNum[0] != 'undefined')
  {
    rowNum = (Math.floor((removedNum[0]/8))).toString();

    table = ('#inventory_slots tbody .' + rowNum.toString() + ' #slot_' + (removedNum[0]).toString());
    $(table).append(appendObject);
    weaponObject.slotNumber = Number(removedNum[0]);
    removedNum.splice(0, 1);
  }
  //place item in new row if row is full
  else if (((inventoryCount % slotsInRow) === 0) && (inventoryCount != 0))
  {
    $('#inventory_slots tbody').append('<tr class="' + rowNum + '"></tr>');
    $(table).append(appendObject);
    weaponObject.slotNumber = inventoryCount;
  }
  //just place item in row
  else
  {
    $(table).append(appendObject);
    weaponObject.slotNumber = inventoryCount;
  }

  //so browser knows that this slot is not empty
  weaponObject.empty = false;

  //inserts element into array
  obj.splice(weaponObject.slotNumber, 0, weaponObject);

  weaponCount++;
  slotCount++;
  inventoryCount++;
}
