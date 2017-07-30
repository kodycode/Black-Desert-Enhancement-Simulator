$("#back_arrow").hide();
var character_slot = 1;
var max_character_slots = 12;
var failstack_instance = [];


$("#back_arrow").on("click", function(){
  //checks if there is an existing item in enhancement window
  failstack_instance[character_slot] = failstack_count;
  character_slot--;
  $(this).parent().children('p').text('Character ' + character_slot);

  if (character_slot <= max_character_slots && character_slot != 1)
  {
    $("#forward_arrow").show();
  }

  if (character_slot === 1)
  {
    $("#back_arrow").hide();
  }

  failstack_count = failstack_instance[character_slot];
  $('#counter').text('+' + failstack_count);
});

$("#forward_arrow").on("click", function(){
  failstack_instance[character_slot] = failstack_count;
  character_slot++;
  $("#back_arrow").show();
  $(this).parent().children('p').text('Character ' + character_slot);

  if (character_slot <= max_character_slots && character_slot != 1)
  {
    $("#forward_arrow").show();
  }

  if (character_slot === max_character_slots)
  {
    $("#forward_arrow").hide();
  }

  //save current inv count set next one to 0
  if (failstack_instance[character_slot] === undefined)
  {
    failstack_instance[character_slot] = failstack_count;
    failstack_count = 0;
  }
  else
  {
    failstack_count = failstack_instance[character_slot];
  }
  $('#counter').text('+' + failstack_count);
});
