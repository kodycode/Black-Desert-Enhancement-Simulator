var failStackCount = 0;

$("#mute_input").click(function() {
    if (this.checked) {
      successSound.volume = 0;
      failureSound.volume = 0;
    }
    else {
      successSound.volume = 0.2;
      failureSound.volume = 0.3;
    }
});

$("#enhance_button").on("click", function(){
  //checks if item is in enhancement window
  if  ($('#temp_container').length)
  {
    Math.seedrandom();
    var weaponId = $('.item_temp').attr('id');
    var slotNum = '#slot_' + weaponId;
    var existingDiv = $(slotNum).children('div');
    var randomNum = Math.random();

    var designLeft = $("#design_slot").position().left;
    var designWidth = $("#design_slot").width();
    var designRight = (designLeft + designWidth);

    //checks if theres a weapon in enhancement window
    if (($('.item_temp').length))
    {
      enhanceItem(obj, weaponId, slotNum, randomNum, existingDiv);
    }

    //temp fix
    if (obj[weaponId].enhanceRank != 0 && obj[weaponId] != "undefined")
    {
      document.getElementById('temp_container').style.top = (8) + 'px';
    }
  }
});

function transitionItemRclick(img, e) {
  if (e.which === 3)
  {
    transitionItem(img);
  }
}

function transitionItem(img) {
  var blackStoneWeaponPath = $('#black_stone_weapon').children()[0].src;
  var blackStoneArmorPath = $('#black_stone_armor').children()[0].src;
  var tooltipDisplay = $(img).closest('td').children('img').attr('onmouseover');
  var tooltipDisplayOff = $(img).closest('td').children('img').attr('onmouseout');
  var weaponId = $(img).attr('id');
  var weaponDesc = obj[weaponId].itemDesc;
  var weaponEnhanceRank = obj[weaponId].enhanceRank;

  var checkDiv = $(img).closest('td').children().length;

  $('#' + img.id).css('opacity', 0.2);
  selectedItemSlot = weaponId;

  //checks if there is an existing item in enhancement window
  //if so, remove it
  if  ($('.item_temp').length)
  {
    var IdPath;
    IdPath = $('.item_temp').attr('id');
    $('.item_temp').remove();
    $('#' + IdPath).css('opacity', 1);
  }

  //checks if there is an existing item in enhancement window
  if  ($('#temp_enhancement_rank').length)
  {
    $('#temp_enhancement_rank').remove();
  }

  if  ($('#black_stone_weapon_temp').length)
  {
    $('#black_stone_weapon_temp').remove();
  }

  if  ($('#black_stone_armor_temp').length)
  {
    $('#black_stone_armor_temp').remove();
  }

  if  ($('#acc_temp').length)
  {
    $('#acc_temp').remove();
  }

  if  ($('#temp_container').length)
  {
    $('#temp_container').remove();
  }

  //checks if there's a div enhancement rank
  if (checkDiv < 2)
  {
    var designLeft = $("#design_slot").position().left;
    var designWidth = $("#design_slot").width();
    var designRight = (designLeft + designWidth);

    //if img is first element
    //place image in enhancement window
    //weapon_item
    $('#design_slot').prepend('<div id="temp_container">' +
                              '<img class="item_temp"' +
                              ' id="' + img.id + '"' +
                              ' src="' + img.src + '"' +
                              ' ondragstart="return drag(event,' + "'" + weaponDesc + "'" + ')"' +
                              ' ondragover="return allowDrop(event)"' +
                              ' onmouseover="' + tooltipDisplay + '"' +
                              ' onmouseout="' + tooltipDisplayOff + '"/>' +
                              '</div>');
    document.getElementById('temp_container').style.top = (35) + 'px';
    document.getElementById('temp_container').style.left = (designRight-108) + 'px';

    //could come up with a better name for top tier ring class
    if (img.className === 'top_tier')
    {
      //temporarily hardcoding img paths
      switch (obj[weaponId].itemDesc)
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
      document.getElementById('acc_temp').style.left = (designLeft+53) + 'px';
    }
    else
    {
      //black stone weapon positioning
      if (img.className != "boss_armor")
      {
        $('#design_slot').prepend('<img id="black_stone_weapon_temp" src="' + blackStoneWeaponPath + '">');
        document.getElementById('black_stone_weapon_temp').style.top = (35) + 'px';
        document.getElementById('black_stone_weapon_temp').style.left = (designLeft+53) + 'px';
      }
      //black stone armor positioning
      else
      {
        $('#design_slot').prepend('<img id="black_stone_armor_temp" src="' + blackStoneArmorPath + '">');
        document.getElementById('black_stone_armor_temp').style.top = (35) + 'px';
        document.getElementById('black_stone_armor_temp').style.left = (designLeft+53) + 'px';
      }
    }
  }
  //place enhanced image in enhancement window
  else
  {
    var designLeft = $("#design_slot").position().left;
    var designWidth = $("#design_slot").width();
    var designRight = (designLeft + designWidth);

    //if img is first element
    //place image in enhancement window
    //weapon_item
    $('#design_slot').prepend('<div id="temp_container">' +
                              '<img class="item_temp"' +
                              ' id="' + img.id + '"' +
                              ' src="' + img.src + '"' +
                              ' ondragstart="return drag(event,' + "'" + weaponDesc + "'" + ')"' +
                              ' ondragover="return allowDrop(event)"' +
                              ' onmouseover="' + tooltipDisplay + '"' +
                              ' onmouseout="' + tooltipDisplayOff + '"/>' +
                              '</div>');

    if (weaponEnhanceRank <= 15)
    {
      $('#temp_container').prepend('<div id="temp_enhancement_rank">+' + weaponEnhanceRank + '</div>');
    }
    else if (weaponEnhanceRank === 16)
    {
      $('#temp_container').prepend('<div id="temp_enhancement_rank">I</div>');
    }
    else if (weaponEnhanceRank === 17)
    {
      $('#temp_container').prepend('<div id="temp_enhancement_rank">II</div>');
    }
    else if (weaponEnhanceRank === 18)
    {
      $('#temp_container').prepend('<div id="temp_enhancement_rank">III</div>');
    }
    else if (weaponEnhanceRank === 19)
    {
      $('#temp_container').prepend('<div id="temp_enhancement_rank">IV</div>');
    }
    else if (weaponEnhanceRank === 20)
    {
      $('#temp_container').prepend('<div id="temp_enhancement_rank">V</div>');
    }

    document.getElementById('temp_container').style.top = (8) + 'px';
    document.getElementById('temp_container').style.left = (designRight-108) + 'px';

    //black stone weapon positioning
    if (img.className === 'top_tier')
    {
      //temporarily hardcoding acc img paths
      switch (obj[weaponId].itemDesc)
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
      document.getElementById('acc_temp').style.left = (designLeft+53) + 'px';
    }
    else
    {
      if (img.className != "boss_armor")
      {
        if (weaponEnhanceRank >= 15)
        {
          $('#design_slot').prepend('<img id="black_stone_weapon_temp" src="img/black_stone/concentrated_magical_black_stone_weapon.png"/>');
          document.getElementById('black_stone_weapon_temp').style.top = (35) + 'px';
          document.getElementById('black_stone_weapon_temp').style.left = (designLeft+53) + 'px';
        }
        else
        {
          $('#design_slot').prepend('<img id="black_stone_weapon_temp" src="' + blackStoneWeaponPath + '"/>');
          document.getElementById('black_stone_weapon_temp').style.top = (35) + 'px';
          document.getElementById('black_stone_weapon_temp').style.left = (designLeft+53) + 'px';
        }
      }
      //black stone armor positioning
      else
      {
        $('#design_slot').prepend('<img id="black_stone_armor_temp" src="' + blackStoneArmorPath + '"/>');
        document.getElementById('black_stone_armor_temp').style.top = (35) + 'px';
        document.getElementById('black_stone_armor_temp').style.left = (designLeft+53) + 'px';
      }
    }
  }
}

function prependEnhancementRank(obj, slotNum, weaponId) {
  switch (obj[weaponId].enhanceRank)
  {
    case (16):
      $(slotNum).prepend('<div id="enhancement_rank">I</div>');
      $('#temp_container').prepend('<div id="temp_enhancement_rank">I</div>');
      break;
    case (17):
      $(slotNum).prepend('<div id="enhancement_rank">II</div>');
      $('#temp_container').prepend('<div id="temp_enhancement_rank">II</div>');
      break;
    case (18):
      $(slotNum).prepend('<div id="enhancement_rank">III</div>');
      $('#temp_container').prepend('<div id="temp_enhancement_rank">III</div>');
      break;
    case (19):
      $(slotNum).prepend('<div id="enhancement_rank">IV</div>');
      $('#temp_container').prepend('<div id="temp_enhancement_rank">IV</div>');
      break;
    case (20):
      $(slotNum).prepend('<div id="enhancement_rank">V</div>');
      $('#temp_container').prepend('<div id="temp_enhancement_rank">V</div>');
      break;
    default:
      $(slotNum).prepend('<div id="enhancement_rank">+' + obj[weaponId].enhanceRank + '</div>');
      $('#temp_container').prepend('<div id="temp_enhancement_rank">+' + obj[weaponId].enhanceRank + '</div>');
      break;
  }
}
