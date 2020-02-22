//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
let Game = (function(){
    let playerMoney = 1000;
let winnings = 0;
let jackpot = 5000;
let turn = 0;
let playerBet = 0;
let winNumber = 0;
let lossNumber = 0;
let spinResult;
let fruits = "";
let winRatio = 0;
let grapes = 0;
let bananas = 0;
let oranges = 0;
let cherries = 0;
let bars = 0;
let bells = 0;
let sevens = 0;
let blanks = 0;


//extension
let betterVersion:boolean;
let spinnerExtend:objects.image;
let spinnerExtend2:objects.image;
let change:objects.Button;


//cheating
let jackPotHack:boolean;
let jackPotHackButton:objects.Button;


//bet option
let bet1: objects.Buttonbet;
let bet2: objects.Buttonbet;
let bet3: objects.Buttonbet;
let bet4: objects.Buttonbet;




// prize list
let prize:objects.image;

//core
    let moneyBet =10;
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;
    let jackpotprize: objects.Label;
   
    let dy  = 2;
    let clickmebutton: objects.Button;


    // important GUI
    let background:createjs.Bitmap;
    let background2:createjs.Bitmap;
    let spiner:objects.image;
    let spiner2:objects.image;
    let result1:objects.image;
    let result2:objects.image;
    let result3:objects.image;
    let result4:objects.image;
    let result5:objects.image;
    let jackPotEvent:objects.image;
    let jackPotInfo:objects.image;
    let notification:objects.Label;
    let betMoney:objects.Label;
    let Money:objects.Label;
    let reset:objects.Button;
    let exit:objects.Button;
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start():void
    {
        console.log(`%c Game Started!`, "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(10);
        Main();
    }

    function CheckBounds():void
    {
        
    }

    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn 
     */
    function Update():void
    {
        
        stage.update();
        if(playerMoney<100)
        bet4.alpha=0;
        if(playerMoney<50)
        bet3.alpha=0;
        if(playerMoney<25)
        bet2.alpha=0;
        if (playerMoney<10)
        bet1.alpha=0;
       
    }
    /**
     * this is the main function of the game (where all the fun happens)
     * 
     */
    function Main():void
    {

        //background 1400x790
        background= new createjs.Bitmap('./Assets/image/background.jfif');
        stage.addChild(background);

        
        spiner= new objects.image('./Assets/image/spiner.png',250,110,true);
        stage.addChild(spiner);
        spiner2= new objects.image('./Assets/image/spiner2.png',250,110,true);
        spiner2.alpha=0;
        stage.addChild(spiner2);
        
      

        jackPotInfo =new objects.image('./Assets/image/jackpot.png',0,0,false);
        stage.addChild(jackPotInfo);

        
       //where the hack come from!!!!!!!!
        jackPotHackButton = new objects.Button("/Assets/image/cheat.jpg",0,740,false);
        stage.addChild(jackPotHackButton);
     


         //Extension to 5 slot
       
         spinnerExtend = new objects.image('./Assets/image/spinerExtend.png',260,110,true)
         spinnerExtend2 = new objects.image('./Assets/image/spinerExtend2.png',260,110,true)
         
       
            stage.addChild(spinnerExtend);
            stage.addChild(spinnerExtend2);

            spinnerExtend.alpha=0;
            
            spinnerExtend2.alpha=0;




        // prize
        prize =new objects.image("./Assets/image/prize.png",980,150);
        stage.addChild(prize);


        //instantiate a new Text object
      
        Money = new objects.Label("1000$", "25px", "Consolas", "#000000", 815, 210, true);
        stage.addChild(Money);

        jackpotprize = new objects.Label("5000$", "45px", "Helvetica", "#d10000", 110, 245, true);
        stage.addChild(jackpotprize);

       

        notification = new objects.Label("Game Start!!!", "30px", "Arial", "#FFDF00", 530, 220, true);
        stage.addChild(notification);
     
       

        //slot
                result1= new objects.image("./Assets/image/7.png",620,320);
                result2= new objects.image("./Assets/image/7.png",460,320);
                result3= new objects.image("./Assets/image/7.png",320,320);
                stage.addChild(result1);
                stage.addChild(result2);
                stage.addChild(result3);

                // extend slot
                result4= new objects.image("./Assets/image/7.png",780,320);
                result5= new objects.image("./Assets/image/7.png",920,320);
                result4.alpha=0;
                result5.alpha=0;
                stage.addChild(result4);
                stage.addChild(result5);


        
        //buttons
        clickmebutton = new objects.Button('./Assets/image/clickMeButton.png',820,570,true);
        stage.addChild(clickmebutton);
        reset= new objects.Button('./Assets/image/reset.png',820,515,true);
        stage.addChild(reset);
        change= new objects.Button('./Assets/image/change.png',1330,705,true);
        stage.addChild(change);
        exit = new objects.Button('./Assets/image/exit.png',1260,747,false);
        stage.addChild(exit);

        
        //bet button
        bet1 = new objects.Buttonbet('./Assets/image/bet1.png',520,630,true);
        bet1.alpha=0.2;
        stage.addChild(bet1);
        bet2 = new objects.Buttonbet('./Assets/image/bet2.png',720,630,true);
        stage.addChild(bet2);
        bet3 = new objects.Buttonbet('./Assets/image/bet3.png',520,740,true);
        stage.addChild(bet3);
        bet4 = new objects.Buttonbet('./Assets/image/bet4.png',720,740,true);
        stage.addChild(bet4);
        
       
        


       


        //JackPot
        jackPotEvent= new objects.image('./Assets/image/jackpotevent.png',220,-40,true);
        jackPotEvent.alpha=0;
        stage.addChild(jackPotEvent);











        //event
        exit.on("click", function(){
            stage.removeAllChildren();
            background2= new createjs.Bitmap('./Assets/image/backgroundEnd.jfif');
        stage.addChild(background2);


            
        });

        change.on("click", function(){
          if(!betterVersion)
          {
              betterVersion=true;
            spinnerExtend.alpha=1.0;
           
           Money.x=1150;
            clickmebutton.x=1150;
            reset.x=1150;
            prize.alpha=0;
            result4.alpha=1;
            result5.alpha=1;
          }
          else
          {
            betterVersion=false;
            spinnerExtend.alpha=0;
            Money.x=820;
            clickmebutton.x=820;
            reset.x=820;
            prize.alpha=1;
            result4.alpha=0;
            result5.alpha=0;
          }

            
        });




        jackPotHackButton.on("click", function(){
            jackPotHack=true;
            if(jackPotHack)
            alert("welcome to the cheat world!!! ho ho ho ");



            
        });
        
        reset.on("click",function(){
            resetAll();
            resetbet(); 
            notification.SetText("RESET!!!");
            Money.SetText(playerMoney.toString());
           
        });


        bet1.on("click", function(){
            moneyBet=10;
            
            resetbet();
            bet1.alpha=0.5;
            
        });

        bet2.on("click", function(){
            moneyBet=25;
            resetbet();
            bet2.alpha=0.5;
        });
        
        bet3.on("click", function(){
            moneyBet=50;
            resetbet();
            bet3.alpha=0.5;
        });
        
        bet4.on("click", function(){
            moneyBet=100;
            resetbet();
            bet4.alpha=0.5;
        });

       
        clickmebutton.on("click", function(){
            result5.alpha=0;
            result4.alpha=0;
        playerBet = moneyBet;
        if(betterVersion)
        spinnerExtend2.alpha=1;
       else
       spiner2.alpha=1;
        setTimeout( () => {  
            
            if(betterVersion)
             spinnerExtend2.alpha=0;
            else
            spiner2.alpha=0;
           
      
        }, 300 );
            if (playerMoney == 0)
            {
                if (confirm("You ran out of Money! \nDo you want to play again?")) {
                    resetAll();
                   
                }
            }
            else if (playerBet > playerMoney) {
                alert("You don't have enough Money to place that bet.");
            }
            else if (playerBet < 0) {
                alert("All bets must be a positive $ amount.");
            }
            else if (playerBet <= playerMoney) {
               
                spinResult = Reels();
                fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
                if(betterVersion)
                {
                     
                stage.removeChild(result4);
                stage.removeChild(result5);
                
                    result4= new objects.image("./Assets/image/"+spinResult[3]+".png",780,320);
                result5= new objects.image("./Assets/image/"+spinResult[4]+".png",920,320);
                stage.addChild(result4);
                stage.addChild(result5);
                }

                stage.removeChild(result1);
                stage.removeChild(result2);
                stage.removeChild(result3);
                
                result1= new objects.image("./Assets/image/"+spinResult[0]+".png",620,320);
                result2= new objects.image("./Assets/image/"+spinResult[1]+".png",460,320);
                result3= new objects.image("./Assets/image/"+spinResult[2]+".png",320,320);

                stage.addChild(result1);
                stage.addChild(result2);
                stage.addChild(result3);
                
                determineWinnings();
                turn++;
              
            }
            else {
                alert("Please enter a valid bet amount");
            }
           Money.SetText(playerMoney.toString()); 
          
        
        }); 
           
        
    }

    window.addEventListener('load', Start);




    function resetbet() {
    
        bet1.alpha=1.0;
        bet2.alpha=1.0;
    bet3.alpha=1.0;
    bet4.alpha=1.0;
    }

    // methods for the spinner
    function resetFruitTally() {
        grapes = 0;
        bananas = 0;
        oranges = 0;
        cherries = 0;
        bars = 0;
        bells = 0;
        sevens = 0;
        blanks = 0;
    }
    
    /* Utility function to reset the player stats */
    function resetAll() {
        bet1.alpha=0.5;
        playerMoney = 1000;
        winnings = 0;
        jackpot = 5000;
        turn = 0;
        playerBet = 0;
        winNumber = 0;
        lossNumber = 0;
        winRatio = 0;
    }
    
    
    /* Check to see if the player won the jackpot */
    function checkJackPot() {
        /* compare two random values */
        
        
        let jackPotTry =1;
        let jackPotWin =1 ;
        if(!jackPotHack){
             jackPotTry = Math.floor(Math.random() * 51 + 1);
             jackPotWin = Math.floor(Math.random() * 51 + 1);
        }

        if (jackPotTry == jackPotWin) {
            alert("You Won the $" + jackpot + " Jackpot!!");
            jackPotEvent.alpha=1;
            notification.SetText("You Won the $" + jackpot + " Jackpot!!");
            setTimeout( () => {  
                jackPotEvent.alpha=0;
            }, 2000 );
           
         
            playerMoney += jackpot;
            jackpot = 1000;
           
        }
    }
    
    /* Utility function to show a win message and increase player money */
    function showWinMessage() {
        playerMoney += winnings;
        notification.SetText("You Won: "+winnings)
      
        resetFruitTally();
        checkJackPot();
    }
    
    /* Utility function to show a loss message and reduce player money */
    function showLossMessage() {
        playerMoney -= playerBet;
        notification.SetText("You Lost!");
        resetFruitTally();
    }
    
    /* Utility function to check if a value falls within a range of bounds */
    function checkRange(value:number, lowerBounds:number, upperBounds:number) {
        if (value >= lowerBounds && value <= upperBounds)
        {
            return value;
        }
        else {
            return !value;
        }
    }
    
    /* When this function is called it determines the betLine results.
    e.g. Bar - Orange - Banana */
    function Reels() {
        let betLine = [" ", " ", " "," "," "];
        let outCome = [0, 0, 0,0,0];
    
        for (let spin = 0; spin < 5; spin++) {
            outCome[spin] = Math.floor((Math.random() * 65) + 1);
            switch (outCome[spin]) {
                case checkRange(outCome[spin], 1, 27):  // 41.5% probability
                    betLine[spin] = "blank";
                    blanks++;
                    break;
                case checkRange(outCome[spin], 28, 37): // 15.4% probability
                    betLine[spin] = "grape";
                    grapes++;
                    break;
                case checkRange(outCome[spin], 38, 46): // 13.8% probability
                    betLine[spin] = "banana";
                    bananas++;
                    break;
                case checkRange(outCome[spin], 47, 54): // 12.3% probability
                    betLine[spin] = "orange";
                    oranges++;
                    break;
                case checkRange(outCome[spin], 55, 59): //  7.7% probability
                    betLine[spin] = "cherry";
                    cherries++;
                    break;
                case checkRange(outCome[spin], 60, 62): //  4.6% probability
                    betLine[spin] = "bars";
                    bars++;
                    break;
                case checkRange(outCome[spin], 63, 64): //  3.1% probability
                    betLine[spin] = "bell";
                    bells++;
                    break;
                case checkRange(outCome[spin], 65, 65): //  1.5% probability
                    betLine[spin] = "7";
                    sevens++;
                    break;
            }
        }
        return betLine;
    }
    
    /* This function calculates the player's winnings, if any */
    function determineWinnings()
    {
        let numOfSlot=3;
        if(betterVersion){
            numOfSlot=5;
        }
        
        if (blanks == 0)
        {
            if (grapes == numOfSlot) {
                winnings = playerBet * 10;
            }
            else if(bananas == numOfSlot) {
                winnings = playerBet * 20;
            }
            else if (oranges == numOfSlot) {
                winnings = playerBet * 30;
            }
            else if (cherries == numOfSlot) {
                winnings = playerBet * 40;
            }
            else if (bars == numOfSlot) {
                winnings = playerBet * 50;
            }
            else if (bells == numOfSlot) {
                winnings = playerBet * 75;
            }
            else if (sevens == numOfSlot) {
                winnings = playerBet * 100;
            }
            else if (grapes == numOfSlot-1) {
                winnings = playerBet * 2;
            }
            else if (bananas == numOfSlot-1) {
                winnings = playerBet * 2;
            }
            else if (oranges == numOfSlot-1) {
                winnings = playerBet * 3;
            }
            else if (cherries == numOfSlot-1) {
                winnings = playerBet * 4;
            }
            else if (bars == numOfSlot-1) {
                winnings = playerBet * 5;
            }
            else if (bells == numOfSlot-1) {
                winnings = playerBet * 10;
            }
            else if (sevens == numOfSlot-1) {
                winnings = playerBet * 20;
            }
            else if (sevens == numOfSlot-1) {
                winnings = playerBet * 5;
            }
            else {
                winnings = playerBet * 1;
            }
            winNumber++;
            showWinMessage();
        }
        else
        {
            lossNumber++;
            showLossMessage();
        }
        
    }
    
    /* When the player clicks the spin button the game kicks off */
  


})();