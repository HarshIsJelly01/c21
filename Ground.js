class Ground{

    constructor(x,y,w,h){
        let ball_opsitions = {
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,w,h,options);
        tthis.w=w;
        thin.h=h;
        World.add(world, this.body);

    }

    show(){
        var pos = this.body.position;
        Push();
        rectMode(CENTER);
        strock(255);
        Fill(127);
rect(pos.x,pos.y,this.w,this.h);
PopStateEvent();
    }
    
}