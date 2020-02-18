module objects{
    export class Buttonbet extends createjs.Bitmap{
       
        
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
           

        }


      

    }
}