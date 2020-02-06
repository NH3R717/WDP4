//pre-game message
alert("You are about to play a text based RPG called \"Streets \'At\' Rage – East/West Gateway City of Money\". In this game you are a citizen of the SAR–EWGCOM and the way of life you know and love is being encroached on by people that don't share the same values as you do. You have options to counter this force, which one will you chose??"); 

//call – intro() 1_userIntro.js
intro();

//declares protesterType instance of choiceClass, protesterType instance inherits properties from – ChoiceClass choiceClass.js
var protesterChoice = new ChoiceClass("Protesting your government's policies is one way to make your voice felt, chose if you will be protesting and if so what type of protester you will be:\n\na. non forceful \nb. forceful \nc. not protesting", "Alright now, you have to enter some text to play this game, you didn't do that. Game over, you lose...", "You have made a valid choice.", "Skipping ahead are we, your choice will default to \"not protesting\'.", "You have not made a valid choice. Game over, you lose...");

//call protesterType instance of choiceClass, protesterType instance inherits properties from – ChoiceClass 2_choiceClass.js
protesterChoice.userChoiceFunct();

//save input variable as a new variable for use in nonforcefulPolice()
var forRandom = input;

//declare Location sub-class instance of choiceClass, Location sub-class class is an instance of polymorphism – ChoiceClass 2_choiceClass.js
class Location extends ChoiceClass {
    constructor() {
        super("Where will you be protesting at? These are the popular locations: Wan Chai, Tsuen Wan, any MRT station, any police station, Sham Shui Po.", "Alright now, you have to enter some text to play this game, you didn't do that. Game over, you lose...", "ohh that's a selection for the last prompt, you'll be directing protest via telegram from a cargo ship anchored in Victoria Harbour.", "You have made a valid choice.", "That's not on the list, you won't cause much effect by showing up there. Your game is over, you did not win.");    
    }
}

//declare protesterLocation instance of Location sub-class – Location class is an instance of polymorphism – ChoiceClass 2_choiceClass.js
var protestLocation = new Location();

//determine which stage of game play the user will be sent to depending on their prompt input made in protesterChoice.userChoiceFunct()
function protesterDirection(){
    //bypass equipment choices – random.js, call protestLocation.userChoiceFunct()
    if (input === 'a'){
        protestLocation.userChoiceFunct();
    //call for loop showing user their equipment choices – equipmentLook.js, call protestLocation.userChoiceFunct()
    }else if(input === 'b'){
        equipmentLoop();
        protestLocation.userChoiceFunct();
    //bypass equipment choices – random.js, bypass protestLocation.userChoiceFunct()
    }else{
        alert("Not protesting – choose another way to help your city's cause. Some examples are to learn a new skill or start a business.") + alert (endMessage); + Environment.Exit(0);
    }

};

//call protesterDirection()
protesterDirection();

//game play alert
alert("Protesting is risky business where you may be subject to police action. The likelihood of you being affected by police action depends on whether you chose to be a forceful or non forceful protester.");

//call – policeAffects() 4_random.js
policeAffects();

//end of game message.
alert(endMessage);

//working – 25 September 2019 @ 10:35:34 HKT