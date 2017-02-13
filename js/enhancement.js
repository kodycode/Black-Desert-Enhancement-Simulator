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

var failstack_count = 0;

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
			
	//document.getElementById(img.id).style.opacity = 0.2;
	$('#' + img.id).css('opacity', 0.2);
	selected_item_slot = weapon_id;
			
	//checks if there is an existing item in enhancement window
	if	($('.item_temp').length)
	{
		var id_path;
		id_path = $('.item_temp').attr('id');
		$('.item_temp').remove();
		//document.getElementById(id_path).style.opacity = 1;
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
			}
			
			document.getElementById('acc_temp').style.top = (35) + 'px';
			document.getElementById('acc_temp').style.left = (design_left+53) + 'px';
		}
		else
		{
			//black stone weapon positioning
			if (img.className !== "boss_armor")
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
		
		//make thing for accessory
		
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
			}
			
			document.getElementById('acc_temp').style.top = (35) + 'px';
			document.getElementById('acc_temp').style.left = (design_left+53) + 'px';
		}
		else
		{
			if (img.className !== "boss_armor")
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

$("#enhance_button").on("click", function(){
	var weapon_id = $('.item_temp').attr('id');
	var slot_num = '#slot_' + weapon_id;
	var existing_div = $(slot_num).children('div');
	var random_num = Math.random();
	
	var design_left = $("#design_slot").position().left;
	var design_width = $("#design_slot").width();
	var design_right = (design_left + design_width);
	
	//temporary nerf on % success
	if (obj[weapon_id].item_class === 'liverto')
	{
		random_num += .05;
	}
	else
	{
		random_num += .08;
	}
	
	//checks if theres a weapon in enhancement window
	if (($('.item_temp').length))
	{
		if (obj[weapon_id].item_class === 'top_tier')
		{
			switch (obj[weapon_id].enhance_rank)
			{
				case (0):
					if (failstack_count <= 25)
					{
						random_num -= (failstack_count * .0057);
					}
					else
					{
						random_num -= (25 * .0057);
					}
					
					if (random_num <= enhancement_rank.sixteen)
					{
						failstack_count = 0;
						obj[weapon_id].enhance_rank = 16;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">I</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">I</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count ++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count += 2;
						$('#counter').text('+' + failstack_count);
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
						failstack_count = 0;
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">II</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">II</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count += 3;
						
						$('#counter').text('+' + failstack_count);
					}
					break;
					
			case (17):
					if (failstack_count <= 44)
					{
						random_num -= (failstack_count * .0047);
					}
					else
					{
						random_num -= (44 * .0047);
					}
			
					if (random_num <= enhancement_rank.eighteen)
					{
						failstack_count = 0;
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						$('#temp_enhancement_rank').remove();
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">III</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">III</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhance_rank--;
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count += 4;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
						
						$(slot_num).prepend('<div id="enhancement_rank">I</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">I</div>');
						
						$('#counter').text('+' + failstack_count);
					}
					break;
					
			case (18):
					if (failstack_count <= 90)
					{
						random_num -= (failstack_count * .0022);
					}
					else
					{
						random_num -= (90 * .0022);
					}
					
					if (random_num <= enhancement_rank.nineteen)
					{
						failstack_count = 0;
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						$('#temp_enhancement_rank').remove();
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">IV</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">IV</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhance_rank--;
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count += 5;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						$('#temp_enhancement_rank').remove();
						
						$(slot_num).prepend('<div id="enhancement_rank">II</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">II</div>');

						$('#counter').text('+' + failstack_count);
					}
					break;
					
			case (19):
				if (failstack_count <= 124)
				{
					random_num -= (failstack_count * .0022);
				}
				else
				{
					random_num -= (124 * .0022);
				}
			
				if (random_num <= enhancement_rank.twenty)
				{
					failstack_count = 0;
					obj[weapon_id].enhance_rank++;
					obj[weapon_id].enhancement_success_count++;
					obj[weapon_id].total_enhancement_attempts++;
					
					if(existing_div.attr('id') === "enhancement_rank")
					{
						existing_div.remove();
					}
					
					//checks if there is an existing item in enhancement window
					if	($('#temp_enhancement_rank').length)
					{
						$('#temp_enhancement_rank').remove();
					}
				
					//append new rank
					$(slot_num).prepend('<div id="enhancement_rank">V</div>');
					$('#temp_container').prepend('<div id="temp_enhancement_rank">V</div>');
					$('#counter').text('+' + failstack_count);
				}
				else
				{
					obj[weapon_id].enhance_rank--;
					obj[weapon_id].enhancement_fail_count++;
					obj[weapon_id].total_enhancement_attempts++;
					failstack_count += 6;
					
					if(existing_div.attr('id') === "enhancement_rank")
					{
						existing_div.remove();
					}
						
					//checks if there is an existing item in enhancement window
					if	($('#temp_enhancement_rank').length)
					{
						$('#temp_enhancement_rank').remove();
					}
						
					$(slot_num).prepend('<div id="enhancement_rank">III</div>');
					$('#temp_container').prepend('<div id="temp_enhancement_rank">III</div>');
					
					$('#counter').text('+' + failstack_count);
				}
				break;
		
			default:
				break;
			}
		}
		else
		{
			switch (obj[weapon_id].enhance_rank)
			{
				case (0):
					if (random_num <= enhancement_rank.one)
					{
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;

						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
						
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
				case (1):
					if (random_num <= enhancement_rank.two)
					{
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
				case (2):
					if (random_num <= enhancement_rank.three)
					{
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
				case (3):
					if (random_num <= enhancement_rank.four)
					{
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
				case (4):
					if (random_num <= enhancement_rank.five)
					{
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
				case (5):
					if (random_num <= enhancement_rank.six)
					{
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
				case (6):
					if (random_num <= enhancement_rank.seven)
					{
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
		
				case (7):
					if (failstack_count <= 13)
					{
						if (obj[weapon_id].item_class === "liverto")
						{
							random_num -= (failstack_count * .025);
						}
						else
						{
							random_num -= (failstack_count * 0.02);
						}
					}
					else
					{
						if (obj[weapon_id].item_class === "liverto")
						{
							random_num -= (13 * .025);
						}
						else
						{
							random_num -= (13 * 0.02);
						}
					}
					
					if (random_num <= enhancement_rank.eight)
					{
						failstack_count = 0;
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
				case (8):
					if (failstack_count <= 14)
					{
						if (obj[weapon_id].item_class === 'liverto')
						{
							random_num -= (failstack_count * .02);
						}
						else
						{
							random_num -= (failstack_count * .015);
						}
					}
					else
					{
						if (obj[weapon_id].item_class === 'liverto')
						{
							random_num -= (14 * .02);
						}
						else
						{
							random_num -= (14* .015);
						}
					}
					
					if (random_num <= enhancement_rank.nine)
					{
						failstack_count = 0;
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
					case (9):
						if (failstack_count <= 15)
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (failstack_count * .015);
							}
							else
							{
								random_num -= (failstack_count * 0.01);
							}
						}
						else
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (15 * .01);
							}
							else
							{
								random_num -= (15 * 0.005);
							}
						}
					
						if (random_num <= enhancement_rank.ten)
						{
							failstack_count = 0;
							obj[weapon_id].enhance_rank++;
							obj[weapon_id].enhancement_success_count++;
							obj[weapon_id].total_enhancement_attempts++;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							//checks if there is an existing item in enhancement window
							if	($('#temp_enhancement_rank').length)
							{
								$('#temp_enhancement_rank').remove();
							}
						
							//append new rank
							$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
							$('#counter').text('+' + failstack_count);
						}
						else
						{
							obj[weapon_id].enhancement_fail_count++;
							obj[weapon_id].total_enhancement_attempts++;
							failstack_count++;
							$('#counter').text('+' + failstack_count);
						}
						break;
					
				case (10):
						if (failstack_count <= 16)
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (failstack_count * .008);
							}
							else
							{
								random_num -= (failstack_count * 0.007);
							}
						}
						else
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (16 * .008);
							}
							else
							{
								random_num -= (16 * 0.007);
							}
						}
				
						if (random_num <= enhancement_rank.eleven)
						{
							failstack_count = 0;
							obj[weapon_id].enhance_rank++;
							obj[weapon_id].enhancement_success_count++;
							obj[weapon_id].total_enhancement_attempts++;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							//checks if there is an existing item in enhancement window
							if	($('#temp_enhancement_rank').length)
							{
								$('#temp_enhancement_rank').remove();
							}
						
							//append new rank
							$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
							$('#counter').text('+' + failstack_count);
						}
						else
						{
							obj[weapon_id].enhancement_fail_count++;
							obj[weapon_id].total_enhancement_attempts++;
							failstack_count++;
							$('#counter').text('+' + failstack_count);
						}
						break;
						
				case (11):
					if (failstack_count <= 18)
					{
						if (obj[weapon_id].item_class === 'liverto')
						{
							random_num -= (failstack_count * .007);
						}
						else
						{
							random_num -= (failstack_count * .0065);
						}
					}
					else
					{
						if (obj[weapon_id].item_class === 'liverto')
						{
							random_num -= (18 * .006);
						}
						else
						{
							random_num -= (18 * .0055);
						}
					}
				
					if (random_num <= enhancement_rank.twelve)
					{
						failstack_count = 0;
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
				case (12):
					if (failstack_count <= 20)
					{
						if (obj[weapon_id].item_class === 'liverto')
						{
							random_num -= (failstack_count * .0053);
						}
						else
						{
							random_num -= (failstack_count * .0048);
						}
					}
					else
					{
						if (obj[weapon_id].item_class === 'liverto')
						{
							random_num -= (20 * .0053);
						}
						else
						{
							random_num -= (20 * .0048);
						}
					}
					
					if (random_num <= enhancement_rank.thirteen)
					{
						failstack_count = 0;
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count++;
						$('#counter').text('+' + failstack_count);
					}
					break;
					
				case (13):
						if (failstack_count <= 25)
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (failstack_count * .005);
							}
							else
							{
								random_num -= (failstack_count * .0045);
							}
						}
						else
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (25 * .005);
							}
							else
							{
								random_num -= (25 * .0045);
							}
						}
					
						if (random_num <= enhancement_rank.fourteen)
						{
							failstack_count = 0;
							obj[weapon_id].enhance_rank++;
							obj[weapon_id].enhancement_success_count++;
							obj[weapon_id].total_enhancement_attempts++;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							//checks if there is an existing item in enhancement window
							if	($('#temp_enhancement_rank').length)
							{
								$('#temp_enhancement_rank').remove();
							}
						
							//append new rank
							$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
							$('#counter').text('+' + failstack_count);
						}
						else
						{
							obj[weapon_id].enhancement_fail_count++;
							obj[weapon_id].total_enhancement_attempts++;
							failstack_count++;
							$('#counter').text('+' + failstack_count);
						}
						break;
					
				case (14):
						if (failstack_count <= 25)
						{	
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (failstack_count * .004);
							}
							else
							{
								random_num -= (failstack_count * .003);
							}
						}
						else
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (25 * .004);
							}
							else
							{
								random_num -= (25 * .003);
							}
						}
						
						if (random_num <= enhancement_rank.fifteen)
						{
							failstack_count = 0;
							obj[weapon_id].enhance_rank++;
							obj[weapon_id].enhancement_success_count++;
							obj[weapon_id].total_enhancement_attempts++;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							//checks if there is an existing item in enhancement window
							if	($('#temp_enhancement_rank').length)
							{
								$('#temp_enhancement_rank').remove();
							}
							
							$('#black_stone_weapon_temp').attr('src', 'img/black_stone/concentrated_magical_black_stone_weapon.png');
						
							//append new rank
							$(slot_num).prepend('<div id="enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weapon_id].enhance_rank + '</div>');
							$('#counter').text('+' + failstack_count);
						}
						else
						{
							obj[weapon_id].enhancement_fail_count++;
							obj[weapon_id].total_enhancement_attempts++;
							failstack_count++;
							$('#counter').text('+' + failstack_count);
						}
						break;
				
				case (15):
						if (failstack_count <= 25)
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (failstack_count * .015);
							}
							else
							{
								random_num -= (failstack_count * .0057);
							}
						}
						else
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (25 * .0063);
							}
							else
							{
								random_num -= (25 * .0057);
							}
						}
						
						if (random_num <= enhancement_rank.sixteen)
						{
							failstack_count = 0;
							obj[weapon_id].enhance_rank++;
							obj[weapon_id].enhancement_success_count++;
							obj[weapon_id].total_enhancement_attempts++;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							//checks if there is an existing item in enhancement window
							if	($('#temp_enhancement_rank').length)
							{
								$('#temp_enhancement_rank').remove();
							}
							
							$('#black_stone_weapon_temp').attr('src', 'img/black_stone/concentrated_magical_black_stone_weapon.png');
						
							//append new rank
							$(slot_num).prepend('<div id="enhancement_rank">I</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">I</div>');
							$('#counter').text('+' + failstack_count);
						}
						else
						{
							obj[weapon_id].enhancement_fail_count ++;
							obj[weapon_id].total_enhancement_attempts++;
							failstack_count += 2;
							$('#counter').text('+' + failstack_count);
						}
						break;
						
				case (16):
						if (failstack_count <= 35)
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (failstack_count * .01);
							}
							else
							{
								random_num -= (failstack_count * .0075);
							}
						}
						else
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (35 * .001);
							}
							else
							{
								random_num -= (35 * .0075);
							}
						}
						
						if (random_num <= enhancement_rank.seventeen)
						{
							failstack_count = 0;
							obj[weapon_id].enhance_rank++;
							obj[weapon_id].enhancement_success_count++;
							obj[weapon_id].total_enhancement_attempts++;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							//checks if there is an existing item in enhancement window
							if	($('#temp_enhancement_rank').length)
							{
								$('#temp_enhancement_rank').remove();
							}
						
							//append new rank
							$(slot_num).prepend('<div id="enhancement_rank">II</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">II</div>');
							$('#counter').text('+' + failstack_count);
						}
						else
						{
							obj[weapon_id].enhancement_fail_count++;
							obj[weapon_id].total_enhancement_attempts++;
							failstack_count += 3;
							
							$('#counter').text('+' + failstack_count);
						}
						break;
						
				case (17):
						if (failstack_count <= 44)
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (failstack_count * .005);
							}
							else
							{
								random_num -= (failstack_count * .0047);
							}
						}
						else
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (44 * .005);
							}
							else
							{
								random_num -= (44 * .0047);
							}
						}
				
						if (random_num <= enhancement_rank.eighteen)
						{
							failstack_count = 0;
							obj[weapon_id].enhance_rank++;
							obj[weapon_id].enhancement_success_count++;
							obj[weapon_id].total_enhancement_attempts++;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							$('#temp_enhancement_rank').remove();
						
							//append new rank
							$(slot_num).prepend('<div id="enhancement_rank">III</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">III</div>');
							$('#counter').text('+' + failstack_count);
						}
						else
						{
							obj[weapon_id].enhance_rank--;
							obj[weapon_id].enhancement_fail_count++;
							obj[weapon_id].total_enhancement_attempts++;
							failstack_count += 4;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							//checks if there is an existing item in enhancement window
							if	($('#temp_enhancement_rank').length)
							{
								$('#temp_enhancement_rank').remove();
							}
							
							$(slot_num).prepend('<div id="enhancement_rank">I</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">I</div>');
							
							$('#counter').text('+' + failstack_count);
						}
						break;
						
				case (18):
						if (failstack_count <= 90)
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (failstack_count * .0025);
							}
							else
							{
								random_num -= (failstack_count * .0022);
							}
						}
						else
						{
							if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (90 * .0025);
							}
							else
							{
								random_num -= (90 * .0022);
							}
						}
						
						if (random_num <= enhancement_rank.nineteen)
						{
							failstack_count = 0;
							obj[weapon_id].enhance_rank++;
							obj[weapon_id].enhancement_success_count++;
							obj[weapon_id].total_enhancement_attempts++;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							$('#temp_enhancement_rank').remove();
						
							//append new rank
							$(slot_num).prepend('<div id="enhancement_rank">IV</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">IV</div>');
							$('#counter').text('+' + failstack_count);
						}
						else
						{
							obj[weapon_id].enhance_rank--;
							obj[weapon_id].enhancement_fail_count++;
							obj[weapon_id].total_enhancement_attempts++;
							failstack_count += 5;
							
							if(existing_div.attr('id') === "enhancement_rank")
							{
								existing_div.remove();
							}
							
							$('#temp_enhancement_rank').remove();
							
							$(slot_num).prepend('<div id="enhancement_rank">II</div>');
							$('#temp_container').prepend('<div id="temp_enhancement_rank">II</div>');

							$('#counter').text('+' + failstack_count);
						}
						break;
						
				case (19):
					if (failstack_count <= 124)
					{
						if (obj[weapon_id].item_class === 'liverto')
							{
								random_num -= (failstack_count * .0025);
							}
							else
							{
								random_num -= (failstack_count * .0022);
							}
					}
					else
					{
						if (obj[weapon_id].item_class === 'liverto')
						{
							random_num -= (124 * .0025);
						}
						else
						{
							random_num -= (124 * .0022);
						}
					}
				
					if (random_num <= enhancement_rank.twenty)
					{
						failstack_count = 0;
						obj[weapon_id].enhance_rank++;
						obj[weapon_id].enhancement_success_count++;
						obj[weapon_id].total_enhancement_attempts++;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
						
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
					
						//append new rank
						$(slot_num).prepend('<div id="enhancement_rank">V</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">V</div>');
						$('#counter').text('+' + failstack_count);
					}
					else
					{
						obj[weapon_id].enhance_rank--;
						obj[weapon_id].enhancement_fail_count++;
						obj[weapon_id].total_enhancement_attempts++;
						failstack_count += 6;
						
						if(existing_div.attr('id') === "enhancement_rank")
						{
							existing_div.remove();
						}
							
						//checks if there is an existing item in enhancement window
						if	($('#temp_enhancement_rank').length)
						{
							$('#temp_enhancement_rank').remove();
						}
							
						$(slot_num).prepend('<div id="enhancement_rank">III</div>');
						$('#temp_container').prepend('<div id="temp_enhancement_rank">III</div>');
						
						$('#counter').text('+' + failstack_count);
					}
					break;
			
				default:
					break;
			}
		}
	}
	
	//temp fix
	if (obj[weapon_id].enhance_rank !== 0)
	{
		document.getElementById('temp_container').style.top = (8) + 'px';
	}
});