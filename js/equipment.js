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
	//this.weapon_img = new Image(); may not need this
	this.slot_number = 0;
	//this.item_name = "undefined";
	this.item_class = "undefined";
	this.item_desc = "undefined";
	this.enhance_rank = 0;
	this.enhancement_success_count = 0;
	this.enhancement_fail_count = 0;
	this.total_enhancement_attempts = 0;
	this.black_stone_weapon = 0;
	this.black_stone_armor = 0;
	this.concentrated_black_stone_weapon = 0;
	this.concentrated_black_stone_armor = 0;
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

//displays tooltip
function imgover(img, desc) {
	var equipment_left = $("#equipment_window").position().left;
	var equipment_width = $("#equipment_window").width();
	var equipment_right = (equipment_left + equipment_width);
	
	document.getElementById(desc).style.display = 'block';
	document.getElementById(desc).style.left = (equipment_right) + "px";
	
	if (desc.startsWith("liverto"))
	{
		document.getElementById(desc).style.left = (equipment_right) + "px";
	}
}

//displays tooltip from inventory
function imgover_inventory(img, desc) {
	var inventory_left = $("#inventory_window").position().left;
	var inventory_width = $("#inventory_window").width();
	var tooltip_width = 365;
	var img_right = (inventory_left - tooltip_width);
	var weapon_id = $(img).attr('id');
	var desc_span;
	var desc_ap = $('#' + desc).children('.total_ap');
	
	//took the lazy way out and added a line break before and after property
	var span_enhancement_success_count = '<span class="enhancement_success_count"> </br> Total Enhancement Success Count: ' + obj[weapon_id].enhancement_success_count + ' </span>';
	var span_enhancement_fail_count = '<span class="enhancement_fail_count"> </br> Total Enhancement Fail Count: ' + obj[weapon_id].enhancement_fail_count + ' </span>';
	var span_total_enhancement_count = '<span class="total_enhancement_attempts"> </br> Total Enhancement Count: ' + obj[weapon_id].total_enhancement_attempts + ' </span>';
	
	temp_tooltip_ap = desc_ap.text();
	
	$('#' + desc).append(span_enhancement_success_count);
	$('#' + desc).append(span_enhancement_fail_count);
	$('#' + desc).append(span_total_enhancement_count);
	
	if (obj[weapon_id].item_class === "liverto")
	{
		desc_span = $('#' + desc).children('.blue_weapon_name');
		temp_tooltip_name = $('#' + desc).children('.blue_weapon_name').text();
	}
	else
	{
		desc_span = $('#' + desc).children('.gold_weapon_name');
		temp_tooltip_name = $('#' + desc).children('.gold_weapon_name').text();
	}
	
	if (obj[weapon_id].enhance_rank >= 1)
	{
		desc_span.text('+' + obj[weapon_id].enhance_rank + ' ' + temp_tooltip_name);
	}
	
	switch (obj[weapon_id].enhance_rank)
	{
		case 1:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 22 ~ 31');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 22 ~ 26');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 22 ~ 26');
			}
			break;
			
		case 2:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 25 ~ 34');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 25 ~ 29');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 25 ~ 29');
			}
			break;
			
		case 3:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 28 ~ 37');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 28 ~ 32');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 28 ~ 32');
			}
			break;
			
		case 4:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 30 ~ 39');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 30 ~ 34');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 30 ~ 34');
			}
			break;
			
		case 5:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 32 ~ 41');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 32 ~ 36');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 32 ~ 36');
			}
			break;
		
		case 6:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 35 ~ 44');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 35 ~ 39');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 35 ~ 39');
			}
			break;
		
		case 7:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 38 ~ 47');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 38 ~ 42');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 38 ~ 42');
			}
			break;
		
		case 8:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 43 ~ 52');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 43 ~ 47');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 43 ~ 47');
			}
			break;
		
		case 9:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 48 ~ 57');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 48 ~ 52');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 48 ~ 52');
			}
			break;
			
		case 10:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 53 ~ 62');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 53 ~ 57');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 53 ~ 57');
			}
			break;
			
		case 11:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 58 ~ 67');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 58 ~ 62');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 58 ~ 62');
			}
			break;
			
		case 12:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 63 ~ 72');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 63 ~ 67');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 63 ~ 67');
			}
			break;
			
		case 13:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 68 ~ 77');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 68 ~ 72');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 68 ~ 72');
			}
			break;
			
		case 14:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 73 ~ 82');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 73 ~ 77');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 73 ~ 77');
			}
			break;
			
		case 15:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 78 ~ 87');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 78 ~ 82');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 78 ~ 82');
			}
			break;
			
		case 16:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 86 ~ 95');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 86 ~ 90');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 86 ~ 90');
			}
			break;
			
		case 17:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 94 ~ 103');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 94 ~ 98');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 94 ~ 98');
			}
			break;
			
		case 18:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 106 ~ 115');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 106 ~ 110');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 106 ~ 110');
			}
			break;
			
		case 19:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 114 ~ 123');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 114 ~ 118');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 114 ~ 118');
			}
			break;
			
		case 20:
			if (obj[weapon_id].item_class === "dandelion")
			{
				desc_ap.text('Total AP: 122 ~ 131');
			}
			else if (obj[weapon_id].item_class === "kzarka")
			{
				desc_ap.text('Total AP: 122 ~ 126');
			}
			else if (obj[weapon_id].item_class === "liverto")
			{
				desc_ap.text('Total AP: 122 ~ 126');
			}
			break;
		
		default:
			break;
	}
	
	document.getElementById(desc).style.display = 'block';
	document.getElementById(desc).style.left = (img_right) + "px";
}

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
	
	weapon_object.item_class = $(img).parent().attr('class');
	
	if (weapon_object.item_class !== "liverto" && weapon_object.item_class !== "kzarka" && weapon_object.item_class !== "dandelion" && weapon_object.item_class !== "top_tier")
	{
		weapon_object.item_class = $(img).parent().parent().attr('class');
	}
	
	weapon_object.item_desc = desc;
	
	if (parent_div === 'second_row')
	{
		parent_div = ($(img).closest('div').parent().attr('class'));
	}
	
	//will come back and make this more proper
	if (typeof removed_num[0] != 'undefined')
	{	
		removed_num.sort(sortNumber);
		append_object = '<img class=' + "'" + parent_div + "'" + 'id="' + removed_num[0] + '"ondblclick="enhance_item(this)"  ondrop="return swap_td(event)" ondragover="return allow_drop(event)" ondragstart="return drag(event,' + "'" + weapon_object.item_desc + "'" + ')" onmousedown="enhance_item_rclick(this, event)" onmouseover="imgover_inventory(this, ' + "'"+ weapon_object.item_desc + "'" + ')" src="' + img.src + '" onmouseout="imgout(' + "'" + weapon_object.item_desc + "'" + ')"/>';
	}
	else
	{
		append_object = '<td class="slot" id="slot_' + slot_count + '"><img class=' + "'" + parent_div + "'" + 'id="' + weapon_count + '" ondrop="return swap_td(event)" ondragover="return allow_drop(event)" ondragstart="return drag(event,' + "'" + weapon_object.item_desc + "'" + ')" ondblclick="enhance_item(this)" onmousedown="enhance_item_rclick(this, event)" src="' + img.src + '" onmouseover="imgover_inventory(this, ' + "'"+ weapon_object.item_desc + "'" + ')" onmouseout="imgout(' + "'" + weapon_object.item_desc + "'" + ')"/></td>';
	}
	alert(removed_num[0]);
	if ($('#slot_' + (removed_num).toString() + ':empty') && typeof removed_num[0] != 'undefined')
	{
		row_num = (Math.floor((removed_num[0]/8))).toString();
		
		table = ('#inventory_slots tbody .' + row_num.toString() + ' #slot_' + (removed_num[0]).toString());
		$(table).append(append_object);
		removed_num.splice(0, 1);
	}
	else if (((inventory_count % slots_in_row) === 0) && (inventory_count != 0))
	{
		$('#inventory_slots tbody').append('<tr class="' + row_num + '"></tr>');
		$(table).append(append_object);
	}
	else
	{
		$(table).append(append_object);
	}
	
	weapon_object.slot_number = weapon_count;
	
	obj.push(weapon_object);
	
	weapon_count++;
	slot_count++;
	inventory_count++;
}

//removes tooltip
function imgout(desc) {
	var desc_gold_span = $('#' + desc).children('.gold_weapon_name');
	var desc_blue_span = $('#' + desc).children('.blue_weapon_name');
	var desc_enhancement_success_count = $('#' + desc).children('.enhancement_success_count');
	var desc_enhancement_fail_count = $('#' + desc).children('.enhancement_fail_count');
	var desc_enhancement_total_count = $('#' + desc).children('.total_enhancement_attempts');
	var desc_ap = $('#' + desc).children('.total_ap');
	
    document.getElementById(desc).style.display = 'none';
	
	temp_tooltip_name = desc_gold_span.text().replace(/[^a-zA-Z ]+/, '');
	desc_gold_span.text(temp_tooltip_name);
	temp_tooltip_name = desc_blue_span.text().replace(/[^a-zA-Z ]+/, '');
	desc_blue_span.text(temp_tooltip_name);
	desc_ap.text(temp_tooltip_ap);
	desc_enhancement_success_count.remove();
	desc_enhancement_fail_count.remove();
	desc_enhancement_total_count.remove();
}
