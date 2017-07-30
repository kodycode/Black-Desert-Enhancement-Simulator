var dragged_object;
var parent_dragged_object;
var temp1;
var temp2;
var temp_class;

//allows you to drag weapon names
function drag(ev, desc) {
  var desc_gold_span = $('#' + desc).children('.gold_weapon_name');
  var desc_blue_span = $('#' + desc).children('.blue_weapon_name');

  temp1 = '#' + ev.target.getAttribute('id');
  temp2 = ev.target.getAttribute('id');
  temp_class = ev.target.getAttribute('class')

  temp_tooltip_name = desc_gold_span.text().replace(/[^a-zA-Z ]+/, '');
  desc_gold_span.text(temp_tooltip_name);
  temp_tooltip_name = desc_blue_span.text().replace(/[^a-zA-Z ]+/, '');
  desc_blue_span.text(temp_tooltip_name);

  document.getElementById(desc).style.display = 'none';
}

//allows you to drop item in location
function allow_drop(ev) {
    ev.preventDefault();
}

//trash: remove inventory items
function drop(ev) {
  if ((!((selected_item_slot === ev.target.getAttribute('id')) || (selected_item_slot === temp2)) &&
     ((ev.target.getAttribute('id') === "background") || (ev.target.getAttribute('id') === "container")) ))
  {
    var slot_num = '#slot_' + temp2;

    //taking advantage of the top-down approach of the code :(
    if ($(temp1).attr('class') === 'item_temp')
    {
      $('#temp_enhancement_rank').remove();
    }

    $(slot_num).children('div').remove();

    $(temp1).remove();

    if ($(temp1).length)
    {
      $(temp1).remove();
    }

    delete obj[temp2];

    weapon_count--;
    inventory_count--;
    slot_count--;
    obj.splice(temp2,1);
    removed_num.push(temp2);
    make_empty_slot(temp2);
  }
}

//makes empty placeholder for deleted item
function make_empty_slot(temp2) {
  obj.splice(temp2, 0, new inventory_object());
  obj[temp2].empty = true;
}

//swap table elements
function swap_td(ev) {
  if (!((selected_item_slot === ev.target.getAttribute('id')) || (selected_item_slot === temp2)))
  {
    var td1 =  $(temp1).parent();
    var td2 =  $('#' + ev.target.getAttribute('id')).parent();
    var check_div1 = $('#slot_' + temp2 + ' > *').length;
    var check_div2 = $('#slot_' + ev.target.getAttribute('id') + ' > *').length;
    var div1 = document.getElementById('slot_' + temp2).children[0].outerHTML;
    var div2 = document.getElementById('slot_' + ev.target.getAttribute('id')).children[0].outerHTML;
    var img1 = document.getElementById(temp2).outerHTML;
    var img2 = document.getElementById(ev.target.getAttribute('id')).outerHTML;
    var slot_num1 = "#slot_" + temp2;
    var slot_num2 = "#slot_" + ev.target.getAttribute('id');

    var slot_temp1 = '#' + temp2;
    var slot_temp2 = '#' + ev.target.getAttribute('id');

    //swap object values
    var temp_obj_val;

    temp_obj_val = obj[temp2].slot_number;
    obj[temp2].slot_number = obj[ev.target.getAttribute('id')].slot_number;
    obj[ev.target.getAttribute('id')].slot_number = temp_obj_val;

    temp_obj_val = obj[temp2].item_class;
    obj[temp2].item_class = obj[ev.target.getAttribute('id')].item_class;
    obj[ev.target.getAttribute('id')].item_class = temp_obj_val;

    temp_obj_val = obj[temp2].item_desc;
    obj[temp2].item_desc = obj[ev.target.getAttribute('id')].item_desc;
    obj[ev.target.getAttribute('id')].item_desc = temp_obj_val;

    temp_obj_val = obj[temp2].enhance_rank;
    obj[temp2].enhance_rank = obj[ev.target.getAttribute('id')].enhance_rank;
    obj[ev.target.getAttribute('id')].enhance_rank = temp_obj_val;

    temp_obj_val = obj[temp2].enhancement_success_count;
    obj[temp2].enhancement_success_count = obj[ev.target.getAttribute('id')].enhancement_success_count;
    obj[ev.target.getAttribute('id')].enhancement_success_count = temp_obj_val;

    temp_obj_val = obj[temp2].enhancement_fail_count;
    obj[temp2].enhancement_fail_count = obj[ev.target.getAttribute('id')].enhancement_fail_count;
    obj[ev.target.getAttribute('id')].enhancement_fail_count = temp_obj_val;

    temp_obj_val = obj[temp2].total_enhancement_attempts;
    obj[temp2].total_enhancement_attempts = obj[ev.target.getAttribute('id')].total_enhancement_attempts;
    obj[ev.target.getAttribute('id')].total_enhancement_attempts = temp_obj_val;

    //swap table elements
    if (check_div1 == 2 && check_div2 == 2)
    {
      $(slot_num1).find('div').remove();
      $(slot_num2).find('div').remove();

      $(slot_temp1).remove();
      $(slot_num2).append(div1);
      $(slot_num2).append(img1);
      $(slot_temp1).attr("id", ev.target.getAttribute('id'));

      $(slot_temp2).remove();
      $(slot_num1).append(div2);
      $(slot_num1).append(img2);
      $(slot_num1).children('img').attr("id", temp2);
    }
    //not destination
    else if (check_div1 == 2)
    {
      $(slot_num1).find('div').remove();

      $(slot_temp1).remove();
      $(slot_num2).append(div1);
      $(slot_num2).append(img1);
      $(slot_temp1).attr("id", ev.target.getAttribute('id'));

      $(slot_temp2).remove();
      $(slot_num1).append(img2);
      $(slot_num1).children('img').attr("id", temp2);
    }
    //destination
    else if (check_div2 == 2)
    {
      $(slot_num2).find('div').remove();

      $(slot_temp1).remove();
      $(slot_num2).append(img1);
      $(slot_temp1).attr("id", ev.target.getAttribute('id'));

      $(slot_temp2).remove();
      $(slot_num1).append(div2);
      $(slot_num1).append(img2);
      $(slot_num1).children('img').attr("id", temp2);
    }
    else
    {
      $(slot_temp1).remove();
      $(slot_num2).append(img1);
      $(slot_temp1).attr("id", ev.target.getAttribute('id'));

      $(slot_temp2).remove();
      $(slot_num1).append(img2);
      $(slot_num1).children('img').attr("id", temp2);
    }
  }
}
