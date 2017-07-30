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
