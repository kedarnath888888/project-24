class Ball{ 
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.5
        }
       this.body=Bodies.circle(x,y,50,options);
       this.radius=50;
       World.add(world,this.body); 
    }
 display(){
    var  pos =this.body.position;
   
    
  
    translate(pos.x, pos.y); 
  
     fill(255,0,0);

      ellipse (pos.x, pos.y, this.radius); 
      
 }
};