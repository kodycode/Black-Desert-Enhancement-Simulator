$(document).ready(function() {
  $("#armor").hide();
  $("#accessories").hide();
  var inventoryLeft = $("#inventory_window").position().left;
  var inventoryHeight = $("#inventory_window").height();

  document.getElementById('character_window').style.top = (inventoryHeight/3) + "px";

  //disables context menu upon right click
  //and adds img to enhancement window
  //(probably not the best place to put this code in)
  //credits to codexworld
  $("#container").on("contextmenu",function(e){
        return false;
    });
});
