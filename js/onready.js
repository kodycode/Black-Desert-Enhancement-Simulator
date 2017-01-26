$(document).ready(function() {
	$("#armor").hide();
	var inventory_left = $("#inventory_window").position().left;
	var inventory_top = $("#inventory_window").position().top;
	var inventory_height = $("#inventory_window").height();
	var enhancement_left = $("#enhancement_window").position().left;
	var enhancement_top = $("#enhancement_window").position().top;
	var enhancement_height = $("#enhancement_window").height();
	
	document.getElementById('trash').style.top = (inventory_height-80) + "px";
	document.getElementById('trash').style.left = (inventory_left-60) + "px";
	
	document.getElementById('character_window').style.top = (inventory_height/3) + "px";
	
	//disables context menu upon right click 
	//and adds img to enhancement window
	//(probably not the best place to put this code in)
	//credits to codexworld
	$("#container").on("contextmenu",function(e){
        return false;
    });
});