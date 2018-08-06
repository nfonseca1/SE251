var body = document.querySelector("body");
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
	var tempDiv = document.createElement("div");
	for(property in people[i]){
		var tempP = document.createElement("p");
		var tempNode = document.createTextNode(people[i][property]);

		tempP.appendChild(tempNode);
		tempDiv.appendChild(tempP);
		tempDiv.setAttribute("id", String(i));
	}
	body.appendChild(tempDiv);
	tempDiv.className = "border";
}