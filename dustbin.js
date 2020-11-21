class Dustbin{
    constructor(x,y){
        var options={
        'isStatic': true,
    }

    World.add(world,this.dustbin);
    this.body=Bodies.rectangle(x,y,width,height,options);

}

    display(){
        this.pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.height,this.width);
    }

}