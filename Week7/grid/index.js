var input = document.querySelector("#input");
var btn = document.querySelector("#btn");
var gridArea = document.querySelector("#grid-area");
var average = document.querySelector("#average");
var nums = [];

btn.addEventListener("click", function(){
	var html = "<table>";
	for(let i = 0; i < input.value; i++){
		html += "<tr>";
		for(let x = 0; x < input.value; x++){
			var rand = randomNumber(1, 100);
			nums.push(rand);
			var color = "white";

			if(rand % 3 == 0){
				color = "red";
			} else if (rand % 2 == 0){
				color = "blue";
			}

			var size = 100 / rand;
			html += "<td style='background-color: " + color + 
			";'>" + rand + "</td>";
		}
	}
	gridArea.innerHTML = html;
	var avg = 0;
	for(let i = 0; i < nums.length; i++){
		avg += nums[i];
	}
	avg = avg / nums.length;
	average.textContent = Math.round(avg * 100) / 100;
})

function randomNumber (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}