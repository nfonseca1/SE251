var body = document.querySelector("body");
var str = "";
//Use this Array of objects to complete the assignment.
var people =[
	{first:"Jason", last:"Vorhees", credit:"Friday the 13th"},
	{first:"Freddy", last:"Krueger", credit:"A Nightmare on Elm Street" },
	{first:"Roger", last:"Rabbit", credit:"Who Framed Roger Rabbit" },
	{first:"Kevin", last:"McCallister", credit:"Home Alone" },
	{first:"Godzilla", last:"King of The Monsters", credit:"Godzilla" },
	{first:"Buzz", last:"Lightyear", credit:"Toy Story" },
	{first:"Marion", last:"Cobretti", credit:"Cobra" }
];

for(var i = 0; i < people.length; i++){
	str += "<div class='border' id = '" + i + "'>";
	for(property in people[i]){
		str += "<p>";
		str += people[i][property];
		str += "</p>";
	}
	str += "</div>";
	body.innerHTML = str;
}