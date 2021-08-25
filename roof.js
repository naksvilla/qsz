class roof{
	constructor(x,y){
	this.x=x
	this.y=y
	var options={isStatic:true}
	this.body= Bodies.rectangle(x,y,140,40,options)
	World.add(world,this.body)
	}
	display(){
	var Pos= this.body.position    
	rectMode(CENTER)
	fill("red")
	rect(Pos.x,Pos.y,300,20)
	}
	
	
	
	}