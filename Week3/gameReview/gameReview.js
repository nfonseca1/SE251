var tableBody = document.querySelector("#reviewsBody");

var table = "";
for(element in reviews) {
	table += "<tr>";
	table += "<td><span class='review' data-img='" + reviews[element].imageName + "'>"
	table += reviews[element].gameTitle + "</span></td>";
	table += "<td>" + reviews[element].consoles + "</td>";
	table += "<td>" + reviews[element].rating + "</td>";
	table += "<td>" + reviews[element].score + "</td>";
	table += "</tr>";
}

tableBody.innerHTML += table;

var links = document.querySelectorAll(".review");
var gameTitle = document.querySelector("#gameTitle");
var gameImage = document.querySelector("#gameImage");

links.forEach(function(link){
	link.addEventListener("click", selectReview);
});

function selectReview(){
		gameImage.src = "images/" + this.dataset.img;
		gameTitle.innerText = this.innerText;
	}