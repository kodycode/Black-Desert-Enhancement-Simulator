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
