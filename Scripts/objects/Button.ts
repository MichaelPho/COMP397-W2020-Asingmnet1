module objects{
    export class Button extends createjs.Bitmap{
       
        
        //constructor
        constructor(public imgPath:string,x:number, y:number, isCentered:boolean)
        {
            super(imgPath);


            //load image
            this.image.addEventListener("load", () =>{

                if(isCentered){
                this.regX = this.getBounds().width *0.5;
                this.regY = this.getBounds().height*0.5;
                }
                this.x=x;
                this.y=y

            })
            this.on("mouseover", this.mouseOver);
            
            this.on("mouseout", this.mouseOut);

        }


        //methods
        mouseOver():void {
            this.alpha =0.5;    
        }
        mouseOut():void {
            this.alpha= 1.0;
        }

    }
}