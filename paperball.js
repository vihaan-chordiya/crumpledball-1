class Paperball{
constructor(x,y,radius){
    var options = { 
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:7
     }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius = radius;
     World.add(world,this.body)

    }

    display( ){
    var pos = this.body.position;
    ellipseMode(RADIUS)
    fill("purple");
    ellipse(pos.x,pos.y,this.radius,this.radius);
    }

    
} 