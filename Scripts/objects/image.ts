module objects
{
    export class image extends createjs.Bitmap
    {
        // constructor
        constructor(

                public source:string="",
                public x: number = 0,
                public y: number = 0, 
                public isCentered:boolean = false)
            {
                super(source);
                
                
                this.on("load",() => {
                    this.regX= this.getBounds().width*0.5;
                    this.regY= this.getBounds().height*0.5;
                })
               
                
                this.x=x;
                this.y=y;
            }
        public setImg(sourceA:string):void{
            this.source=sourceA;
            this.on("load",() => {
                this.regX= this.getBounds().width*0.5;
                this.regY= this.getBounds().height*0.5;
            })
        }
        // methods

      
    }
}