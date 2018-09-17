var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = setInterval(main, 1000/60);

var s = [];
for(var i = 0; i < 50; i++){
	s[i] = new GameObject();
	s[i].x = Math.random() * canvas.width;
	s[i].y = Math.random() * canvas.height;
	s[i].vy = Math.random()*10+5;
	s[i].w = s[i].vy;
	s[i].h = s[i].vy;
}

function main(){
	ctx.clearRect(0,0,canvas.width, canvas.height);

	for(var i = 0; i < s.length; i++){
		s[i].drawRect();
		s[i].move();
		if(s[i].y > canvas.height){
			s[i].y = 0;
			s[i].x = Math.random()*canvas.width;
		}
	}
}