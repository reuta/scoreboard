var playerTable = document.querySelector("#players");
var playerInput = document.querySelector("#player-name");
var addButton = document.querySelector("#add-player");

// table methods

function addPlayer(){
	var playerName = playerInput.value;
	playerInput.value = "";
	playerTable.innerHTML += "<tr class='player'><th id='player-name'>" + playerName + "</th><th id='player-points' contenteditable></th></tr>";
	sort();
}

function getPlayers(){
	return playerTable.querySelectorAll(".player");
}

function sort(){
	var players = getPlayers();
	var points = Array.prototype.map.call(players, function(el){
		return {
			element: el.cloneNode(true),
			points: parseInt(el.querySelector("#player-points").innerHTML)
		}
	});
	
	points.sort(function(a, b){
		return b.points - a.points;
	});
	
	Array.prototype.forEach.call(players, function(player, i){
		var parentNode = player.parentNode;
		parentNode.removeChild(player);
		parentNode.appendChild(points[i].element);
		console.log(player);
		console.log(parentNode);
	});
	

}


// event binding
addButton.addEventListener("click", addPlayer);

