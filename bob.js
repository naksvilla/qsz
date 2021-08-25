class bob{
	constructor(x,y,r){
	this.x=x
	this.y=y
	this.r=30
	var options={density:1.2,restitution:1 }
	this.body= Bodies.circle(this.x,this.y,30,options)
	World.add(world,this.body)
	}
	display(){
		var paperPos=(this.body.position) 
		push()
		translate(paperPos.x,paperPos.y)
		ellipseMode(RADIUS)
		fill("green")
		strokeWeight(6)
		stroke("red")
		ellipse(0,0,this.r,this.r)
		pop()
	}
	
	
	
	
	
	}