//displays tooltip from equipment window
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

  //if weapon enhancement rank greater than 15, display new counts
  //for concentrated blackstones, and a separate count for regular
  //black stone success/failure
  if (obj[weapon_id].enhance_rank >= 15)
  {
    var span_enhancement_success_count = '<span class="enhancement_success_count"> </br>' +
                                         ' Total Enhancement Success Count: ' + obj[weapon_id].enhancement_success_count +
                                         ' (Pre-15: ' + obj[weapon_id].black_stone_weapon_total_success + ')' +
                                         '</span>';

    var span_enhancement_fail_count = '<span class="enhancement_fail_count"> </br>' +
                                      ' Total Enhancement Fail Count: ' + obj[weapon_id].enhancement_fail_count +
                                      ' (Pre-15: ' + obj[weapon_id].black_stone_weapon_total_failure + ')' +
                                      '</span>';

    var span_total_enhancement_count = '<span class="total_enhancement_attempts"> </br>' +
                                       ' Total Enhancement Count: ' + obj[weapon_id].total_enhancement_attempts +
                                       '</span>';
  }
  else
  {
    var span_enhancement_success_count = '<span class="enhancement_success_count"> </br>' +
                                         ' Total Enhancement Success Count: ' + obj[weapon_id].enhancement_success_count +
                                         '</span>';
    var span_enhancement_fail_count = '<span class="enhancement_fail_count"> </br>' +
                                      ' Total Enhancement Fail Count: ' + obj[weapon_id].enhancement_fail_count +
                                      '</span>';
    var span_total_enhancement_count = '<span class="total_enhancement_attempts"> </br>' +
                                       ' Total Enhancement Count: ' + obj[weapon_id].total_enhancement_attempts +
                                       '</span>';
  }

  temp_tooltip_ap = desc_ap.text();

  $('#' + desc).append(span_enhancement_success_count);
  $('#' + desc).append(span_enhancement_fail_count);
  $('#' + desc).append(span_total_enhancement_count);


  //makes liverto icon blue
  if (obj[weapon_id].item_class === "liverto")
  {
    desc_span = $('#' + desc).children('.blue_weapon_name');
    temp_tooltip_name = $('#' + desc).children('.blue_weapon_name').text();
  }
  //makes everything not a liverto yellow
  else
  {
    desc_span = $('#' + desc).children('.gold_weapon_name');
    temp_tooltip_name = $('#' + desc).children('.gold_weapon_name').text();
  }

  //adds enhancement rank to weapon name
  if (obj[weapon_id].enhance_rank >= 1)
  {
    desc_span.text('+' + obj[weapon_id].enhance_rank + ' ' + temp_tooltip_name);
  }

  display_ap(weapon_id, desc, desc_ap, img_right);
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
