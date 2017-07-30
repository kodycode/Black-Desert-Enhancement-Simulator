var inventory_count = 0;	//keeps count of items in inventory
var slots_in_row = 8;		//slots per row
var obj = []; 				//stores objects from inventory
var weapon_count = 0;		//counts number of weapons
var removed_num = []; 		//stores an array of items that were removed
var slot_count = 0;			//counts slot-slot ID in other words
var selected_item_slot = -1;//keeps track of what item is selected
var temp_tooltip_name;		//holds original tooltip name description
var temp_tooltip_ap;		//holds original tooltip ap description


function inventory_object() {
  this.slot_number = 0;
  //this.item_name = "undefined";
  this.item_class = "undefined";
  this.item_desc = "undefined";
  this.enhance_rank = 0;
  this.enhancement_success_count = 0;
  this.enhancement_fail_count = 0;
  this.total_enhancement_attempts = 0;
  this.black_stone_weapon_total_success = 0;
  this.black_stone_weapon_total_failure = 0;
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
  var weapon_object = new inventory_object();
  var row_num = (Math.floor((inventory_count/8))).toString();
  var table = ('#inventory_slots tbody .' + row_num).toString();
  var parent_div = ($(img).closest('div').attr('class'));

  var append_object;

  //gets class
  weapon_object.item_class = $(img).parent().attr('class');

  //moves up one more level to get the class if it fails the first time
  if (weapon_object.item_class != "liverto" && weapon_object.item_class != "kzarka" && weapon_object.item_class != "dandelion" && weapon_object.item_class != "top_tier")
  {
    weapon_object.item_class = $(img).parent().parent().attr('class');
  }

  weapon_object.item_desc = desc;

  //further advances one more level up to get weapon class
  //of weapons in the second/third row of the category
  //i.e. second/third row of dandelion weapons
  if (parent_div === 'second_row' || parent_div === 'third_row')
  {
    parent_div = ($(img).closest('div').parent().attr('class'));
  }

  //if there are items that have been removed
  //sort the array of removed items by slot inventory Number
  //then clear old data from that inventory number
  //and append new img element to replace it
  if (typeof removed_num[0] != 'undefined')
  {
    removed_num.sort(sortNumber);

    if (obj[Number(removed_num[0])].empty === true)
    {
      delete obj.splice(Number(removed_num[0]), 1);
    }

    append_object = '<img class=' + "'" + parent_div + "'" +
                    ' id="' + removed_num[0] +'"' +
                    ' ondblclick="enhance_item(this)"' +
                    ' ondrop="return swap_td(event)"' +
                    ' ondragover="return allow_drop(event)"' +
                    ' ondragstart="return drag(event,' + "'" + weapon_object.item_desc + "'" + ')"' +
                    ' onmousedown="enhance_item_rclick(this, event)"' +
                    ' onmouseover="imgover_inventory(this, ' + "'"+ weapon_object.item_desc + "'" + ')"' +
                    ' src="' + img.src + '"' +
                    ' onmouseout="imgout(' + "'" + weapon_object.item_desc + "'" + ')"/>';
  }
  //otherwise just put the new item in the next available item slot
  else
  {
    append_object = '<td class="slot"' +
                    ' id="slot_' + slot_count + '">' +
                    '<img class=' + "'" + parent_div + "'" +
                    ' id="' + weapon_count + '"' +
                    ' ondrop="return swap_td(event)"' +
                    ' ondragover="return allow_drop(event)"' +
                    ' ondragstart="return drag(event,' + "'" + weapon_object.item_desc + "'" + ')"' +
                    ' ondblclick="enhance_item(this)"' +
                    ' onmousedown="enhance_item_rclick(this, event)"' +
                    ' src="' + img.src + '"' +
                    ' onmouseover="imgover_inventory(this, ' + "'"+ weapon_object.item_desc + "'" + ')"' +
                    ' onmouseout="imgout(' + "'" + weapon_object.item_desc + "'" + ')"/>' +
                    '</td>';
  }

  //make new item take the spot of the deleted item
  if ($('#slot_' + (removed_num).toString() + ':empty') && typeof removed_num[0] != 'undefined')
  {
    row_num = (Math.floor((removed_num[0]/8))).toString();

    table = ('#inventory_slots tbody .' + row_num.toString() + ' #slot_' + (removed_num[0]).toString());
    $(table).append(append_object);
    weapon_object.slot_number = Number(removed_num[0]);
    removed_num.splice(0, 1);
  }
  //place item in new row if row is full
  else if (((inventory_count % slots_in_row) === 0) && (inventory_count != 0))
  {
    $('#inventory_slots tbody').append('<tr class="' + row_num + '"></tr>');
    $(table).append(append_object);
    weapon_object.slot_number = inventory_count;
  }
  //just place item in row
  else
  {
    $(table).append(append_object);
    weapon_object.slot_number = inventory_count;
  }

  //so browser knows that this slot is not empty
  weapon_object.empty = false;

  //inserts element into array
  obj.splice(weapon_object.slot_number, 0, weapon_object);

  weapon_count++;
  slot_count++;
  inventory_count++;
}
