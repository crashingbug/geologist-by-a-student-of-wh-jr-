class stone{
	constructor(x,y,r)
	{
	// assign options to the stone ball
	var options={
		restitution:0.8,
		friction:0.9,
		density:12

	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("#000000");
			fill("#0f0f0f");
			//draw the ellipse here to display the stone ball
			//rectMode(RADIUS)
			rect(0,0,this.r,this.r)


			pop()
	}

}