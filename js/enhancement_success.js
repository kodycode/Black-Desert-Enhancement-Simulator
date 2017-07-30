var success_sound = new Audio("wav/success.wav");
success_sound.volume = 0.2;


function play_enhancement_success_sound() {
  success_sound.currentTime = 0;
  success_sound.play();
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

  if (obj[weapon_id].enhance_rank > 7) {
    failstack_count = 0;
  }

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
