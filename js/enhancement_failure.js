var failure_sound = new Audio("wav/failure.wav");
failure_sound.volume = 0.3;

function play_enhancement_failure_sound() {
  failure_sound.currentTime = 0;
  failure_sound.play();
}

function derank_enhancement(obj, weapon_id, slot_num, existing_div) {
  if(existing_div.attr('id') === "enhancement_rank")
  {
    existing_div.remove();
  }

  //checks if there is an existing item in enhancement window
  if  ($('#temp_enhancement_rank').length)
  {
    $('#temp_enhancement_rank').remove();
  }

  prepend_enhancement_rank(obj, slot_num, weapon_id);
}

//remove accessories upon failure
function remove_acc(weapon_id) {
  var slot_num = '#slot_' + weapon_id;
  var slot_id = '#' + weapon_id;

  //checks if there is an existing item in enhancement window
  if  ($('#temp_enhancement_rank').length)
  {
    $('#temp_enhancement_rank').remove();
  }

  if ($('#acc_temp').length)
  {
    $('#acc_temp').remove();
  }

  if  ($('#temp_container').length)
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
