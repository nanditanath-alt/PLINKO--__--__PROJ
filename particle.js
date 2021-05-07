class Particles{
    constructor(x,y){
        var parameters={
            isStatic: false,
            restitution: 0.4,
            friction: 0.1,
            density: 1.2
        }
        this.r = 5
        this.body = Bodies.circle(x,y,this.r,parameters);
        this.color = color(random(0,255), random(0,255), random(0,255));
        

        World.add(world, this.body);
    }

    display(){
        
        var post = [this.body.position.x, this.body.position.y]
        var ang = this.body.angle;

      push();
      translate(post[0], post[1]);
      rotate(ang);
      imageMode(CENTER);
      noStroke();
      ellipseMode(RADIUS);
      fill(this.color);
     ellipse(0,0,this.r,this.r);
      pop();

        


        
    }
}