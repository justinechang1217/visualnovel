// DOM MANIPULATION Visual Novel Game

// Create a new event
// Select the button you want to edit
// Run a function when it is clicked
document.querySelector(".button1").addEventListener("click", function(){
    beginSound.play();
    // 1. Story 1 text
    document.querySelector(".story-window").innerHTML = '<p>Your family is running out of money, so your mother wants you to go to the market to sell the cow. You meet an old man on the way. He offers to trade with you a "magic bean" or money. You will choose: <img src="images/oldman.jpg"></img>';
    // 2. Erase old button     add dot                     no dot
    document.querySelector(".button1").classList.add("invisible");
    // 3. Show next button
    document.querySelector(".button2").classList.remove("invisible");
    document.querySelector(".button3").classList.remove("invisible");
} )

document.querySelector(".button2").addEventListener("click", function(){
    magicSound.play();
    document.querySelector(".story-window").innerHTML = '<p>Your brought the magic bean home. Your mother is angry, so she throws the the bean out of the window. It grows into a huge bean stalk overnight! You will: <img src="images/beanstalk.jpg"></img>';
    document.querySelector(".button2").classList.add("invisible");
    document.querySelector(".button3").classList.add("invisible");
    document.querySelector(".button4").classList.remove("invisible");
    document.querySelector(".button5").classList.remove("invisible");
} )

document.querySelector(".button3").addEventListener("click", function(){
    moneySound.play();
    document.querySelector(".story-window").innerHTML = '<p>You are a good kid, so the old man rewards you with the magic bean along with the money. After you get home, You give your mother the money and plant the bean in your yard. It grows into a huge bean stalk overnight! You will: <img src="images/beanstalk.jpg"></img>';
    document.querySelector(".button2").classList.add("invisible");
    document.querySelector(".button3").classList.add("invisible");
    document.querySelector(".button4").classList.remove("invisible");
    document.querySelector(".button5").classList.remove("invisible");
} )

document.querySelector(".button4").addEventListener("click", function(){
    climbSound.play();
    document.querySelector(".story-window").innerHTML = '<p>You climb up the bean stalk and enter a huge castle. It belongs to a giant! You will: <img src="images/castle.jpg"></img>';
    document.querySelector(".button4").classList.add("invisible");
    document.querySelector(".button5").classList.add("invisible");
    document.querySelector(".button6").classList.remove("invisible");
    document.querySelector(".button7").classList.remove("invisible");
} )

document.querySelector(".button5").addEventListener("click", function(){
    loseSound.play();
    document.querySelector(".story-window").innerHTML = '<p>OH NO! You cut the bean stalk, and it falls on you. <br><h1>GAME OVER :(</h1><img src="images/cut.jpg"></img>';
    document.querySelector(".button4").classList.add("invisible");
    document.querySelector(".button5").classList.add("invisible");
    document.querySelector(".reset").classList.remove("invisible");
} )

document.querySelector(".reset").addEventListener("click", function(){
    document.querySelector(".story-window").innerHTML = '<h1>The Magic Bean Stalk</h1><p>A Visual Novel</p><p>Developed By: Justine</p><p><p1>*Turn up the sound!*</p1></p><img src="images/coverimg.gif"></img>'
    document.querySelector(".reset").classList.add("invisible");
    document.querySelector(".button1").classList.remove("invisible");
} )


document.querySelector(".button6").addEventListener("click", function(){
    suspenseSound.play();
    document.querySelector(".story-window").innerHTML = "<p>You tell the giant about how you ended up in his castle because your family is too poor and needs to sell the cow. He sympathizes with your situation and offers to give you his daughter's brand new doll house for your family to live in. You will: <img src='images/giant.jpg'></img>";
    document.querySelector(".button6").classList.add("invisible");
    document.querySelector(".button7").classList.add("invisible");
    document.querySelector(".button8").classList.remove("invisible");
    document.querySelector(".button9").classList.remove("invisible");
} )

document.querySelector(".button7").addEventListener("click", function(){
    suspenseSound.play();
    document.querySelector(".story-window").innerHTML = "<p>The giant finds you anyway. You tell the giant about how your family is too poor and needs to sell the cow. He sympathizes with your situation and offers to give you his daughter's brand new doll house for your family to live in. You will: <img src='images/giant.jpg'></img>";
    document.querySelector(".button6").classList.add("invisible");
    document.querySelector(".button7").classList.add("invisible");
    document.querySelector(".button8").classList.remove("invisible");
    document.querySelector(".button9").classList.remove("invisible");
} )

document.querySelector(".button8").addEventListener("click", function(){
    cheeringSound.play();
    document.querySelector(".story-window").innerHTML = "<p>You and your family climb up the bean stalk and live happily ever after with the nice giant. <br><h1>THE END :)</h1><img src='images/theend.gif'></img>";
    document.querySelector(".button8").classList.add("invisible");
    document.querySelector(".button9").classList.add("invisible");
} )

document.querySelector(".button9").addEventListener("click", function(){
    cheeringSound.play();
    document.querySelector(".story-window").innerHTML = "<p>The giant insisted, so you and your family climb up the bean stalk and live happily ever after with the nice giant. <br><h1>THE END :)</h1><img src='images/theend.gif'></img>";
    document.querySelector(".button8").classList.add("invisible");
    document.querySelector(".button9").classList.add("invisible");
} )

// Audio
var beginSound = new Audio('sounds/begin.mp3')
var magicSound = new Audio('sounds/magic.mp3')
var moneySound = new Audio('sounds/money.mp3')
var climbSound = new Audio('sounds/climb.mp3')
var loseSound = new Audio('sounds/lose.mp3')
var suspenseSound = new Audio('sounds/suspense.mp3')
var cheeringSound = new Audio ('sounds/cheering.mp3')
