class ground
{
    constructor()
    {
        var ground_opt={isStatic:true}

        this.body=Bodies.rectangle(200,390,400,10,ground_opt)
        World.add(world,this.body)
    }

    display()
    {
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,400,10)
    }
}