class Paper {
    constructor(x,y,radius) {
    
    var option = {
    isStatic: false,
    restitution: 0.3,
    density: 10,
    friction: 9
    }

    this.body = Bodies.circle(x,y,radius,option);
    this.x = x;
    this.y = y;
    this.radius = radius;
    World.add(world,this.body);    
}

    display() {
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("white");
    ellipse(pos.x,pos.y,this.radius,this.radius)
    }

}