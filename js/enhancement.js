var success_sound = new Audio("wav/success.wav");
var failure_sound = new Audio("wav/failure.wav");
success_sound.volume = 0.2;
failure_sound.volume = 0.3;

var failstack_count = 0;

var enhancement_rank = {
	one: 1,
	two: 1,
	three: 1,
	four: 1,
	five: 1,
	six: 1,
	seven: 1,
	eight: 0.2,
	nine: .1750,
	ten: .15,
	eleven: .125,
	twelve: .1,
	thirteen: .075,
	fourteen: .05,
	fifteen: .025,
	sixteen: .15,
	seventeen: .075,
	eighteen: .05,
	nineteen: .02,
	twenty: .015
};

function enhance_item_rclick(img, e) {
	if (e.which === 3)
	{
		enhance_item(img);
	}
}

function enhance_item(img) {
	var parent_td = '#' + $(img).closest('td').attr('id');
	var black_stone_weapon_path = $('#black_stone_weapon').children()[0].src;
	var black_stone_armor_path = $('#black_stone_armor').children()[0].src;
	var tooltip_display = $(img).closest('td').children('img').attr('onmouseover');
	var tooltip_display_off = $(img).closest('td').children('img').attr('onmouseout');
	var weapon_id = $(img).attr('id');
	var weapon_desc = obj[weapon_id].item_desc;
	var weapon_enhance_rank = obj[weapon_id].enhance_rank;

	var check_div = $(img).closest('td').children().length;

	$('#' + img.id).css('opacity', 0.2);
	selected_item_slot = weapon_id;

	//checks if there is an existing item in enhancement window
	//if so, remove it
	if	($('.item_temp').length)
	{
		var id_path;
		id_path = $('.item_temp').attr('id');
		$('.item_temp').remove();
		$('#' + id_path).css('opacity', 1);
	}

	//checks if there is an existing item in enhancement window
	if	($('#temp_enhancement_rank').length)
	{
		$('#temp_enhancement_rank').remove();
	}

	if	($('#black_stone_weapon_temp').length)
	{
		$('#black_stone_weapon_temp').remove();
	}

	if	($('#black_stone_armor_temp').length)
	{
		$('#black_stone_armor_temp').remove();
	}

	if	($('#acc_temp').length)
	{
		$('#acc_temp').remove();
	}

	if	($('#temp_container').length)
	{
		$('#temp_container').remove();
	}

	//checks if there's a div enhancement rank
	if (check_div < 2)
	{
		var design_left = $("#design_slot").position().left;
		var design_width = $("#design_slot").width();
		var design_right = (design_left + design_width);

		//if img is first element
		//place image in enhancement window
		//weapon_item
		$('#design_slot').prepend('<div id="temp_container"><img class="item_temp" id="' + img.id + '" src="' + img.src + '" ondragstart="return drag(event,' + "'" + weapon_desc + "'" + ')" ondragover="return allow_drop(event)" onmouseover="' + tooltip_display + '" onmouseout="' + tooltip_display_off + '"/></div>');
		document.getElementById('temp_container').style.top = (35) + 'px';
		document.getElementById('temp_container').style.left = (design_right-108) + 'px';

		//could come up with a better name for top tier ring class
		if (img.className === 'top_tier')
		{
			//temporarily hardcoding img paths
			switch (obj[weapon_id].item_desc)
			{
				case ('ogre_ring_description'):
					$('#design_slot').prepend('<img id="acc_temp" src="img/accessories/top_tier/ogre_ring.png">');
					break;

				case ('tungrade_earring_description'):
					$('#design_slot').prepend('<img id="acc_temp" src="img/accessories/top_tier/tungrade_earring.png">');
					break;

				case ('basilisk_belt_description'):
					$('#design_slot').prepend('<img id="acc_temp" src="img/accessories/top_tier/basilisk_belt.png">');
					break;

				case ('ring_of_crescent_guardian_description'):
					$('#design_slot').prepend('<img id="acc_temp" src="img/accessories/top_tier/ring_of_crescent_guardian.png">');
					break;

				default:
					break;
			}

			document.getElementById('acc_temp').style.top = (35) + 'px';
			document.getElementById('acc_temp').style.left = (design_left+53) + 'px';
		}
		else
		{
			//black stone weapon positioning
			if (img.className != "boss_armor")
			{
				$('#design_slot').prepend('<img id="black_stone_weapon_temp" src="' + black_stone_weapon_path + '">');
				document.getElementById('black_stone_weapon_temp').style.top = (35) + 'px';
				document.getElementById('black_stone_weapon_temp').style.left = (design_left+53) + 'px';
			}
			//black stone armor positioning
			else
			{
				$('#design_slot').prepend('<img id="black_stone_armor_temp" src="' + black_stone_armor_path + '">');
				document.getElementById('black_stone_armor_temp').style.top = (35) + 'px';
				document.getElementById('black_stone_armor_temp').style.left = (design_left+53) + 'px';
			}
		}
	}
	//place enhanced image in enhancement window
	else
	{
		var design_left = $("#design_slot").position().left;
		var design_width = $("#design_slot").width();
		var design_right = (design_left + design_width);

		//if img is first element
		//place image in enhancement window
		//weapon_item
		$('#design_slot').prepend('<div id="temp_container"><img class="item_temp" id="' + img.id + '" src="' + img.src + '" ondragstart="return drag(event,' + "'" + weapon_desc + "'" + ')" ondragover="return allow_drop(event)" onmouseover="' + tooltip_display + '" onmouseout="' + tooltip_display_off + '"/></div>');

		if (weapon_enhance_rank <= 15)
		{
			$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + weapon_enhance_rank + '</div>');
		}
		else if (weapon_enhance_rank === 16)
		{
			$('#temp_container').prepend('<div id="temp_enhancement_rank">I</div>');
		}
		else if (weapon_enhance_rank === 17)
		{
			$('#temp_container').prepend('<div id="temp_enhancement_rank">II</div>');
		}
		else if (weapon_enhance_rank === 18)
		{
			$('#temp_container').prepend('<div id="temp_enhancement_rank">III</div>');
		}
		else if (weapon_enhance_rank === 19)
		{
			$('#temp_container').prepend('<div id="temp_enhancement_rank">IV</div>');
		}
		else if (weapon_enhance_rank === 20)
		{
			$('#temp_container').prepend('<div id="temp_enhancement_rank">V</div>');
		}

		document.getElementById('temp_container').style.top = (8) + 'px';
		document.getElementById('temp_container').style.left = (design_right-108) + 'px';

		//black stone weapon positioning
		if (img.className === 'top_tier')
		{
			//temporarily hardcoding acc img paths
			switch (obj[weapon_id].item_desc)
			{
				case ('ogre_ring_description'):
					$('#design_slot').prepend('<img id="acc_temp" src="img/accessories/top_tier/ogre_ring.png">');
					break;

				case ('tungrade_earring_description'):
					$('#design_slot').prepend('<img id="acc_temp" src="img/accessories/top_tier/tungrade_earring.png">');
					break;

				case ('basilisk_belt_description'):
					$('#design_slot').prepend('<img id="acc_temp" src="img/accessories/top_tier/basilisk_belt.png">');
					break;

				case ('ring_of_crescent_guardian_description'):
					$('#design_slot').prepend('<img id="acc_temp" src="img/accessories/top_tier/ring_of_crescent_guardian.png">');
					break;
			}

			document.getElementById('acc_temp').style.top = (35) + 'px';
			document.getElementById('acc_temp').style.left = (design_left+53) + 'px';
		}
		else
		{
			if (img.className != "boss_armor")
			{
				if (weapon_enhance_rank >= 15)
				{
					$('#design_slot').prepend('<img id="black_stone_weapon_temp" src="img/black_stone/concentrated_magical_black_stone_weapon.png"/>');
					document.getElementById('black_stone_weapon_temp').style.top = (35) + 'px';
					document.getElementById('black_stone_weapon_temp').style.left = (design_left+53) + 'px';
				}
				else
				{
					$('#design_slot').prepend('<img id="black_stone_weapon_temp" src="' + black_stone_weapon_path + '"/>');
					document.getElementById('black_stone_weapon_temp').style.top = (35) + 'px';
					document.getElementById('black_stone_weapon_temp').style.left = (design_left+53) + 'px';
				}
			}
			//black stone armor positioning
			else
			{
				$('#design_slot').prepend('<img id="black_stone_armor_temp" src="' + black_stone_armor_path + '"/>');
				document.getElementById('black_stone_armor_temp').style.top = (35) + 'px';
				document.getElementById('black_stone_armor_temp').style.left = (design_left+53) + 'px';
			}
		}
	}
}


//remove accessories upon failure
function remove_acc(weapon_id) {
	var slot_num = '#slot_' + weapon_id;
	var slot_id = '#' + weapon_id;

	//checks if there is an existing item in enhancement window
	if	($('#temp_enhancement_rank').length)
	{
		$('#temp_enhancement_rank').remove();
	}

	if ($('#acc_temp').length)
	{
		$('#acc_temp').remove();
	}

	if	($('#temp_container').length)
	{
		$('#temp_container').remove();
	}

	$(slot_num).children('div').remove();

	$(slot_id).remove();

	if ($(slot_id).length)
	{
		$(slot_id).remove();
	}

	delete obj[weapon_id];

	weapon_count--;
	inventory_count--;
	slot_count--;
	obj.splice(weapon_id,1);
	removed_num.push(weapon_id);
	make_empty_slot(weapon_id);
}

$("#mute_input").click(function() {
    if (this.checked) {
        success_sound.volume = 0;
				failure_sound.volume = 0;
    }
		else {
			success_sound.volume = 0.2;
			failure_sound.volume = 0.3;
		}
});

function play_enhancement_success_sound() {
	success_sound.currentTime = 0;
	success_sound.play();
}

function play_enhancement_failure_sound() {
	failure_sound.currentTime = 0;
	failure_sound.play();
}

function prepend_enhancement_rank(obj, slot_num, weapon_id) {
	switch (obj[weapon_id].enhance_rank)
	{
		case (16):
			$(slot_num).prepend('<div id="enhancement_rank">I</div>');
			$('#temp_container').prepend('<div id="temp_enhancement_rank">I</div>');
			break;
		case (17):
			$(slot_num).prepend('<div id="enhancement_rank">II</div>');
			$('#temp_container').prepend('<div id="temp_enhancement_rank">II</div>');
			break;
		case (18):
			$(slot_num).prepend('<div id="enhancement_rank">III</div>');
			$('#temp_container').prepend('<div id="temp_enhancement_rank">III</div>');
			break;
		case (19):
			$(slot_num).prepend('<div id="enhancement_rank">IV</div>');
			$('#temp_container').prepend('<div id="temp_enhancement_rank">IV</div>');
			break;
		case (20):
			$(slot_num).prepend('<div id="enhancement_rank">V</div>');
			$('#temp_container').prepend('<div id="temp_enhancement_rank">V</div>');
			break;
		default:
			$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
			$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
			break;
	}
}

function enhancement_success(obj, existing_div, weapon_id, slot_num) {
	play_enhancement_success_sound();

	if (obj[weapon_id].enhance_rank === 0 && obj[weapon_id].item_class === "top_tier")
	{
		obj[weapon_id].enhance_rank = 16;
	}
	else
	{
		obj[weapon_id].enhance_rank++;
	}

	obj[weapon_id].enhancement_success_count++;
	obj[weapon_id].total_enhancement_attempts++;
	failstack_count = 0;

	if(existing_div.attr('id') === "enhancement_rank")
	{
		existing_div.remove();
	}

	//checks if there is an existing item in enhancement window
	if ($('#temp_enhancement_rank').length)
	{
		$('#temp_enhancement_rank').remove();
	}

	prepend_enhancement_rank(obj, slot_num, weapon_id);

	$('#counter').text('+' + failstack_count);
}

function derank_enhancement(obj, weapon_id, slot_num, existing_div) {
	if(existing_div.attr('id') === "enhancement_rank")
	{
		existing_div.remove();
	}

	//checks if there is an existing item in enhancement window
	if	($('#temp_enhancement_rank').length)
	{
		$('#temp_enhancement_rank').remove();
	}

	prepend_enhancement_rank(obj, slot_num, weapon_id);
}

function enhancement_failure(obj, weapon_id, slot_num, existing_div) {
	play_enhancement_failure_sound();

	if (obj[weapon_id].item_class === "top_tier")
	{
		remove_acc(weapon_id);
		failstack_count++;
		$('#counter').text('+' + failstack_count);
	}
	else
	{
		obj[weapon_id].enhancement_fail_count++;
		obj[weapon_id].total_enhancement_attempts++;

		if (obj[weapon_id].enhance_rank === 15)
		{
			failstack_count += 2;
		}
		else if (obj[weapon_id].enhance_rank === 16)
		{
			derank_enhancement(obj, weapon_id, slot_num, existing_div);
			failstack_count += 3;
		}
		else if (obj[weapon_id].enhance_rank === 17)
		{
			obj[weapon_id].enhance_rank--;
			derank_enhancement(obj, weapon_id, slot_num, existing_div);
			failstack_count += 4;
		}
		else if (obj[weapon_id].enhance_rank === 18)
		{
			obj[weapon_id].enhance_rank--;
			derank_enhancement(obj, weapon_id, slot_num, existing_div);
			failstack_count += 5;
		}
		else if (obj[weapon_id].enhance_rank === 19)
		{
			obj[weapon_id].enhance_rank--;
			derank_enhancement(obj, weapon_id, slot_num, existing_div);
			failstack_count += 6;
		}
		else
		{
			failstack_count++;
		}
		$('#counter').text('+' + failstack_count);
	}
}

function enhance_acc(obj, weapon_id, slot_num, random_num, existing_div) {
	switch (obj[weapon_id].enhance_rank)
	{
		case (0):
			if (failstack_count <= 25)
			{
				random_num -= (failstack_count * .015);
			}
			else
			{
				random_num -= (25 * .015);
			}

			if (random_num <= enhancement_rank.sixteen)
			{
				enhancement_success(obj, existing_div, weapon_id, slot_num);
			}
			else
			{
				enhancement_failure(obj, weapon_id, slot_num, existing_div);
			}
			break;

	case (16):
			if (failstack_count <= 35)
			{
				random_num -= (failstack_count * .0075);
			}
			else
			{
				random_num -= (35 * .0075);
			}

			if (random_num <= enhancement_rank.seventeen)
			{
				enhancement_success(obj, existing_div, weapon_id, slot_num);
			}
			else
			{
				enhancement_failure(obj, weapon_id, slot_num, existing_div);
			}
			break;

	case (17):
			if (failstack_count <= 44)
			{
				random_num -= (failstack_count * .005);
			}
			else
			{
				random_num -= (44 * .005);
			}

			if (random_num <= enhancement_rank.eighteen)
			{
				enhancement_success(obj, existing_div, weapon_id, slot_num);
			}
			else
			{
				enhancement_failure(obj, weapon_id, slot_num, existing_div);
			}
			break;

	case (18):
			if (failstack_count <= 90)
			{
				random_num -= (failstack_count * .0025);
			}
			else
			{
				random_num -= (90 * .0025);
			}

			if (random_num <= enhancement_rank.nineteen)
			{
				enhancement_success(obj, existing_div, weapon_id, slot_num);
			}
			else
			{
				enhancement_failure(obj, weapon_id, slot_num, existing_div);
			}
			break;

	case (19):
		if (failstack_count <= 124)
		{
			random_num -= (failstack_count * .0025);
		}
		else
		{
			random_num -= (124 * .0025);
		}

		if (random_num <= enhancement_rank.twenty)
		{
			enhancement_success(obj, existing_div, weapon_id, slot_num);
		}
		else
		{
			enhancement_failure(obj, weapon_id, slot_num, existing_div);
		}
		break;

	default:
		break;
	}
}

function enhance_weapon(obj, weapon_id, slot_num, random_num, existing_div) {
	if (obj[weapon_id].enhance_rank === 20)
	{
		return;
	}

	switch (obj[weapon_id].enhance_rank)
	{
		case (7):
			if (failstack_count <= 13)
			{
				random_num -= (failstack_count * .025);
			}
			else
			{
				random_num -= (13 * .025);
			}

			if (random_num <= enhancement_rank.eight)
			{
				enhancement_success(obj, existing_div, weapon_id, slot_num);
			}
			else
			{
				enhancement_failure(obj, weapon_id, slot_num, existing_div);
			}
			break;

		case (8):
			if (failstack_count <= 14)
			{
				random_num -= (failstack_count * .02);
			}
			else
			{
				random_num -= (14 * .02);
			}

			if (random_num <= enhancement_rank.nine)
			{
				enhancement_success(obj, existing_div, weapon_id, slot_num);
			}
			else
			{
				enhancement_failure(obj, weapon_id, slot_num, existing_div);
			}
			break;

			case (9):
				if (failstack_count <= 15)
				{
					random_num -= (failstack_count * .015);
				}
				else
				{
					random_num -= (15 * .015);
				}

				if (random_num <= enhancement_rank.ten)
				{
					enhancement_success(obj, existing_div, weapon_id, slot_num);
				}
				else
				{
					enhancement_failure(obj, weapon_id, slot_num, existing_div);
				}
				break;

		case (10):
				if (failstack_count <= 16)
				{
					random_num -= (failstack_count * .0125);
				}
				else
				{
					random_num -= (16 * .0125);
				}

				if (random_num <= enhancement_rank.eleven)
				{
					enhancement_success(obj, existing_div, weapon_id, slot_num);
				}
				else
				{
					enhancement_failure(obj, weapon_id, slot_num, existing_div);
				}
				break;

		case (11):
			if (failstack_count <= 18)
			{
				random_num -= (failstack_count * .0075);
			}
			else
			{
				random_num -= (18 * .0075);
			}

			if (random_num <= enhancement_rank.twelve)
			{
				enhancement_success(obj, existing_div, weapon_id, slot_num);
			}
			else
			{
				enhancement_failure(obj, weapon_id, slot_num, existing_div);
			}
			break;

		case (12):
			if (failstack_count <= 20)
			{
				random_num -= (failstack_count * .0063);
			}
			else
			{
				random_num -= (20 * .0063);
			}

			if (random_num <= enhancement_rank.thirteen)
			{
				enhancement_success(obj, existing_div, weapon_id, slot_num);
			}
			else
			{
				enhancement_failure(obj, weapon_id, slot_num, existing_div);
			}
			break;

		case (13):
				if (failstack_count <= 25)
				{
					random_num -= (failstack_count * .005);
				}
				else
				{
					random_num -= (25 * .005);
				}

				if (random_num <= enhancement_rank.fourteen)
				{
					enhancement_success(obj, existing_div, weapon_id, slot_num);
				}
				else
				{
					enhancement_failure(obj, weapon_id, slot_num, existing_div);
				}
				break;

		case (14):
				if (failstack_count <= 25)
				{
					random_num -= (failstack_count * .005);
				}
				else
				{
					random_num -= (25 * .005);
				}

				if (random_num <= enhancement_rank.fifteen)
				{
					enhancement_success(obj, existing_div, weapon_id, slot_num);
					obj[weapon_id].black_stone_weapon_total_success = obj[weapon_id].enhancement_success_count;
					obj[weapon_id].black_stone_weapon_total_failure = obj[weapon_id].enhancement_fail_count;
					obj[weapon_id].enhancement_success_count = 0;
					obj[weapon_id].enhancement_fail_count = 0;
				}
				else
				{
					enhancement_failure(obj, weapon_id, slot_num, existing_div);
				}
				break;

		case (15):
				if (failstack_count <= 25)
				{
					random_num -= (failstack_count * .015);
				}
				else
				{
					random_num -= (25 * .015);
				}

				if (random_num <= enhancement_rank.sixteen)
				{
					enhancement_success(obj, existing_div, weapon_id, slot_num);
				}
				else
				{
					enhancement_failure(obj, weapon_id, slot_num, existing_div);
				}
				break;

		case (16):
				if (failstack_count <= 35)
				{
					random_num -= (failstack_count * .0075);
				}
				else
				{
					random_num -= (35 * .0075);
				}

				if (random_num <= enhancement_rank.seventeen)
				{
					enhancement_success(obj, existing_div, weapon_id, slot_num);
				}
				else
				{
					enhancement_failure(obj, weapon_id, slot_num, existing_div);
				}
				break;

		case (17):
				if (failstack_count <= 44)
				{
					random_num -= (failstack_count * .005);
				}
				else
				{
					random_num -= (44 * .005);
				}

				if (random_num <= enhancement_rank.eighteen)
				{
					enhancement_success(obj, existing_div, weapon_id, slot_num);
				}
				else
				{
					enhancement_failure(obj, weapon_id, slot_num, existing_div);
				}
				break;

		case (18):
				if (failstack_count <= 90)
				{
					random_num -= (failstack_count * .0025);
				}
				else
				{
					random_num -= (90 * .0025);
				}

				if (random_num <= enhancement_rank.nineteen)
				{
					enhancement_success(obj, existing_div, weapon_id, slot_num);
				}
				else
				{
					enhancement_failure(obj, weapon_id, slot_num, existing_div);
				}
				break;

		case (19):
			if (failstack_count <= 124)
			{
				random_num -= (failstack_count * .0025);
			}
			else
			{
				random_num -= (124 * .0025);
			}

			if (random_num <= enhancement_rank.twenty)
			{
				enhancement_success(obj, existing_div, weapon_id, slot_num);
			}
			else
			{
				enhancement_failure(obj, weapon_id, slot_num, existing_div);
			}
			break;

		default:
			enhancement_success(obj, existing_div, weapon_id, slot_num);
			break;
	}
}

$("#enhance_button").on("click", function(){
	//checks if item is in enhancement window
	if	($('#temp_container').length)
	{
		var weapon_id = $('.item_temp').attr('id');
		var slot_num = '#slot_' + weapon_id;
		var existing_div = $(slot_num).children('div');
		var random_num = Math.random();

		var design_left = $("#design_slot").position().left;
		var design_width = $("#design_slot").width();
		var design_right = (design_left + design_width);

		//% grade modifier based on weapon grade
		if (obj[weapon_id].item_class === 'liverto')
		{
			random_num /= 0.8;
		}
		else
		{
			random_num /= 0.7;
		}

		//checks if theres a weapon in enhancement window
		if (($('.item_temp').length))
		{
			if (obj[weapon_id].item_class === 'top_tier')
			{
				enhance_acc(obj, weapon_id, slot_num, random_num, existing_div);
			}
			else
			{
				enhance_weapon(obj, weapon_id, slot_num, random_num, existing_div);
			}
		}

		//temp fix
		if (obj[weapon_id].enhance_rank != 0 && obj[weapon_id] != "undefined")
		{
			document.getElementById('temp_container').style.top = (8) + 'px';
		}
	}
});
