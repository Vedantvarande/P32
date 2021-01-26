class table2
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic:true
        			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
       // this.image = loadImage("table2.jpg");
 		World.add(world, this.body);

	}
	display()
	{
			var tablePos=this.body.position;		
			push()
			translate(tablePos.x, tablePos.y);
            rectMode(CENTER);
            //image(this.image,0,0,340,300);
			fill(128,128,128)
			rect(0,0,330, 310);
			pop()
			
	}

}