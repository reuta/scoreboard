var pointsInput = document.querySelector("#points");

function sum(){
	var inputs = pointsInput.querySelectorAll(".jury");
	var points = Array.prototype.map.call(inputs, function(input){
		return parseFloat(input.value);
	});
	
	points.sort(function(a, b){return b-a});

	points.pop();
	points.shift();

	var sum = 0;
	points.forEach(function(point){
		sum += point;
	});

	return sum.toFixed(1);
}

function fillNum(playerName, num){
	var players = document.querySelectorAll(".player");
	Array.prototype.forEach.call(players, function(player){
		var nameInner = player.querySelector("#player-name").innerHTML;
		var points = player.querySelector("#player-points");
		if(nameInner == playerName){
			points.innerHTML = num;
		}
	});	
}

var pointsButton = points.querySelector("#add-points");

pointsButton.addEventListener("click", function(){
	var playerName = points.querySelector("#player-name").innerHTML;
	fillNum(playerName, sum());
	sort();
	toggle();
});
