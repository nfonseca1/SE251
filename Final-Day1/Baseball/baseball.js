var table = document.querySelector(".table");

var html = '<thead><th>Team</th><th>Wins</th><th>Losses</th><th>W/L</th></thead>';
html += '<tbody>';
standings.forEach(function(standing){
	var newClass = '';
	if(standing.percentage > .5){
		newClass = 'winning';
	} else {
		newClass = 'losing';
	}
	html += '<tr class="' + newClass + '">';
	html += '<td>' + standing.team + '</td>';
	html += '<td>' + standing.wins + '</td>';
	html += '<td>' + standing.losses + '</td>';
	html += '<td>' + standing.percentage + '</td>';
	html += '</tr>';
})
html += '</tbody>';
table.innerHTML = html;

var winning = document.querySelectorAll(".winning");
var losing = document.querySelectorAll(".losing");

winning.forEach(function(win){
	win.style.color = "blue";
})
losing.forEach(function(loss){
	loss.style.color = "red";
})