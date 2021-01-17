class Plinkos{
    constructor(x,y,r){

        var options={
            isStatic:true
        }
        this.r=r;

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){

       
        fill (255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
 


    }
}