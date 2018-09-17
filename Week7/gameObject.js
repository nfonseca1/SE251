class GameObject {

	constructor() {
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		this.w = 100;
		this.h = 100;
		this.vx = 0;
		this.vy = 0;
		this.color = "gold";
	}

	drawRect(){
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.restore();
	}

	move(){
		this.x += this.vx;
		this.y += this.vy;
	}
}