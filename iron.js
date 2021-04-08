class iron{
	constructor(x,y,r)
	{
	// assign options to the iron ball
	var options={
		restitution:0.8,
		friction:3,
		density:30

	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("#ffffff");
			fill("#f0f0f0");
			//draw the ellipse here to display the stone ball
			//rectMode(CENTRE)
			rect(0,0,this.r,this.r)


			pop()
	}

}