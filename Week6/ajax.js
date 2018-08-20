//--Global Query Selector Variables
var titleSections = document.querySelectorAll(".title");
var firstNames = document.querySelectorAll(".first");
var lastNames = document.querySelectorAll(".last");
var salaries = document.querySelectorAll(".highest");
var averages = document.querySelectorAll(".average");
var fNameInput = document.querySelector("#first-name");
var lNameInput = document.querySelector("#last-name");
var searchBtn = document.querySelector("#search-submit");
var clearBtn = document.querySelector("#search-clear");
var searchArea = document.querySelector("#search-area");
var analystsBtn = document.querySelector("#list-database-analyst");
var webDevsBtn = document.querySelector("#list-web-developer");
var softwareDevsBtn = document.querySelector("#list-software-engineer");
var listArea = document.querySelector("#list-area");
var outputs = document.querySelectorAll(".output");
//--Global Arrays
var softwareDevs = [];
var webDevs = [];
var analysts = [];
var allTitles = [];

//--Event Listeners
analystsBtn.addEventListener("click", function(e){
	listTitles(e, analysts);
});
webDevsBtn.addEventListener("click", function(e){
	listTitles(e, webDevs);
});
softwareDevsBtn.addEventListener("click", function(e){
	listTitles(e, softwareDevs);
});
searchBtn.addEventListener("click", searchTitle);
clearBtn.addEventListener("click", function(){
	searchArea.querySelector("h2").textContent = "Search Output";
	outputs[0].innerHTML = '';
})

//--AJAX Request
fetch('http://ict.neit.edu/evanrense/salaries.php')
	.then(function(res){
		return res.json();
	})
	.then(function(json){
		console.log(json);
		manageData(json);
	})

//--Functions

function manageData(json){
	json.forEach(function(obj){
		if(obj.jobTitle == 'Software Developer'){
			softwareDevs.push(obj);
		} else if (obj.jobTitle == 'Web Developer'){
			webDevs.push(obj);
		} else {
			analysts.push(obj);
		}
	})
	allTitles.push(analysts, webDevs, softwareDevs);

	for(var t = 0; t < titleSections.length; t++){
		var highestFirstName = '';
		var highestLastName = '';
		var highestSalary = 0;
		var highestAverage = 0;

		for(var x = 0; x < allTitles[t].length; x++){
			if(x == 0){
				highestFirstName = allTitles[t][x].name.first;
				highestLastName = allTitles[t][x].name.last;
				highestSalary = allTitles[t][x].salary;
			} else 
			if(allTitles[t][x].salary > highestSalary){
				highestFirstName = allTitles[t][x].name.first;
				highestLastName = allTitles[t][x].name.last;
				highestSalary = allTitles[t][x].salary;
			}
			highestAverage += parseFloat(allTitles[t][x].salary);
		}
		highestAverage = highestAverage / allTitles[t].length;
		firstNames[t].textContent = highestFirstName;
		lastNames[t].textContent = highestLastName;
		salaries[t].textContent = '$' + highestSalary;
		averages[t].textContent = '$' + Math.floor(highestAverage * 100) / 100;
	}
}

function searchTitle(){
	var results = [];
	var firstExpr = new RegExp(fNameInput.value, 'i');
	var lastExpr = new RegExp(lNameInput.value, 'i');
	allTitles.forEach(function(title){
		title.forEach(function(obj){
			if(firstExpr.test(obj.name.first) && lastExpr.test(obj.name.last)){
				results.push(obj);
			}
		})
	})
	console.log(results);
	var html = '';
	html += '<table class="table table-striped"><thead>';
	html += '<th>First Name</th><th>Last Name</th><th>Salary</th><th>Title</td>';
	html += '</thead><tbody>';
	results.forEach(function(result){
		html += '<tr><td>' + result.name.first + '</td>';
		html += '<td>' + result.name.last + '</td>';
		html += '<td>$' + result.salary + '</td>';
		html += '<td>' + result.jobTitle + '</td></tr>';
	})
	searchArea.querySelector("h2").textContent = "Searching '" + 
		fNameInput.value + " " + lNameInput.value + "'";
	html += '</tbody></table>';
	outputs[0].innerHTML = html;
}

function listTitles(e, title){
	var html = '';
	html += '<table class="table table-striped"><thead>';
	html += '<th>First Name</th><th>Last Name</th><th>Salary</th>';
	html += '</thead><tbody>';

	title.forEach(function(person){
		html += '<tr><td>' + person.name.first + '</td>';
		html += '<td>' + person.name.last + '</td>';
		html += '<td>$' + person.salary + '</td></tr>';
	})
	listArea.querySelector("h2").textContent = 'All ' + e.target.textContent;
	html += '</tbody></table>';
	outputs[1].innerHTML = html;
}