let userchoice = 0;
let computerchoice = 0;
let a = 0;
let choices = document.querySelectorAll(".choice");
let pr = document.querySelector("#msg");
let u = document.querySelector("#user-score");
let c = document.querySelector("#comp-score");


let computer = ()=>{
    let arr = ["rock","paper","scissor"];
    let i = Math.floor(Math.random()*3);
    return arr[i];
}
let update = (a,user,comp)=>{
    if(a>0){
        pr.innerText = `You won! ${user} beats ${comp}`;
        pr.style.backgroundColor = "green";
        userchoice++;
        u.innerText = userchoice;
    }
    else if(a<0){
        pr.innerText = `You lost! ${comp} beats ${user}`;
        pr.style.backgroundColor = "red";
        computerchoice++;
        c.innerText = computerchoice;
    }
}
let playgame = (user)=>{
    comp = computer();
    if(user===comp){
        pr.innerText="It's a tie!";
        pr.style.backgroundColor = "black";
    }
    else{
        if(user==="rock"){
            // scissor paper
            if(comp === "paper") a=-1;
            else a = 1;
        }
        else if(user==="scissor"){
            // rock paper
            if(comp === "paper") a=1;
            else a = -1;
        }
        if(user==="paper"){
            // scissor rock
            if(comp === "scissor") a=-1;
            else a = 1;
        }
        update(a,user,comp);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const user = choice.getAttribute("id");
        playgame(user);
    });
})