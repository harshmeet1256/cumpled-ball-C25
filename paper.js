class Paper{
  constructor(x,y,r){

    var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}
		this.x=x;
		this.y=y;
		this.r=r;
		//this.paperWidth=200;
		//this.paperHeight=213;
        this.body=Bodies.circle(x,y,r,options);
		this.image=loadImage("paper.png");
		World.add(world,this.body);		
  }
  display(){
	var pos=this.body.position;
	push(); 
    imageMode(CENTER); 
	image(this.image,pos.x,pos.y);
    translate(pos.x,pos.y); 
	pop() 
  }  
}