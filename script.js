// ------------rock paper sis-----------

// to generate the computer choice
const getcomputerchoice = () => {
    let options = ["lock", "paper", "scissors"]
    // rock paper scissors
    let gennum = Math.floor(Math.random() * 3) //return a value 0,1,2
    return options[gennum];
}

let mag = document.querySelector("#msg")  // for chaning msg
let scc3 = document.querySelector("#msg")  // for changing background color
let sai5 = document.querySelector("#userscore")  // for changing score of user
let sai6 = document.querySelector("#compscore")  // for changing score of computer
let usel = document.querySelector("#userselection")  // to show the selected options by user
let csel = document.querySelector("#compselection")  // to show the selected options by computer
let userscore = 0;
let compscore = 0;


// when the round is draw
let draw = (() => {
    mag.innerText = "draw";
    scc3.style.backgroundColor = "blue";
    return console.log("game is draw")

})

// won adn lose functions
const showwinner = (userwin) => {
    if (userwin == true) {
        console.log("you won");
        userscore++;
        sai5.innerText = userscore;
        mag.innerText = "you won the match congratas let try again";
        scc3.style.backgroundColor = "green"
    } else if (userwin == false) {
        compscore++;
        sai6.innerText = compscore;
        console.log("you lost")
        scc3.style.backgroundColor = "red"
        mag.innerText = "you lost the match but dont worry try again"
    }
}

// get the user win true or not
const playgame = ((userchoiceid) => {
    // genrate computer choice
    let comopt = getcomputerchoice()
    console.log(userchoiceid, comopt)
    csel.innerText = comopt
    usel.innerText = userchoiceid
    if (comopt === userchoiceid) {
        draw()
    } else {
        let userwin = true;
        if (userchoiceid === "lock") {
            userwin = comopt === "paper" ? false : true;
        } else if (userchoiceid === "paper") {
            userwin = comopt === "scissors" ? false : true;

        } else if (userchoiceid === "scissors") {
            userwin = comopt === "lock" ? false : true;
        }
        showwinner(userwin)
    }
})

//to get all the elemt nodes
const choices = document.querySelectorAll(".choice")
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoiceid = choice.getAttribute("id")
        playgame(userchoiceid)
        csel.innerText = comopt
        usel.innerText = userchoiceid
    })
})
