$("#back_arrow").hide();
var characterSlot = 1;
var maxCharacterSlots = 12;
var failstackInstsance = [];


$("#back_arrow").on("click", function(){
  //checks if there is an existing item in enhancement window
  failstackInstsance[characterSlot] = failstackCount;
  characterSlot--;
  $(this).parent().children('p').text('Character ' + characterSlot);

  if (characterSlot <= maxCharacterSlots && characterSlot != 1)
  {
    $("#forward_arrow").show();
  }

  if (characterSlot === 1)
  {
    $("#back_arrow").hide();
  }

  failstackCount = failstackInstsance[characterSlot];
  $('#counter').text('+' + failstackCount);
});

$("#forward_arrow").on("click", function(){
  failstackInstsance[characterSlot] = failstackCount;
  characterSlot++;
  $("#back_arrow").show();
  $(this).parent().children('p').text('Character ' + characterSlot);

  if (characterSlot <= maxCharacterSlots && characterSlot != 1)
  {
    $("#forward_arrow").show();
  }

  if (characterSlot === maxCharacterSlots)
  {
    $("#forward_arrow").hide();
  }

  //save current inv count set next one to 0
  if (failstackInstsance[characterSlot] === undefined)
  {
    failstackInstsance[characterSlot] = failstackCount;
    failstackCount = 0;
  }
  else
  {
    failstackCount = failstackInstsance[characterSlot];
  }
  $('#counter').text('+' + failstackCount);
});
