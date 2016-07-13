var points = document.querySelector("#points");

function sum(){
	var inputs = points.querySelectorAll(".jury");
	console.log(inputs);
	var sum = 0;
	Array.prototype.forEach.call(inputs, function(input){
		sum += parseInt(input.value);
		input.value = "";
	});

	return sum;
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
