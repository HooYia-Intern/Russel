// const min = 1;
// const max = 100;
// const answer = Math.floor(Math.random() * (max - min)+1);

output = document.getElementById("display").ariaValueMax;
errorMessage = document.querySelector(".error");
successMessage= document.querySelector(".success");
let attempts = 0;
let guess;
let running=true;
function check(){
    while(running){
        guess = window.prompt(`enter a number between ${min} - ${max}`);
        guess= Number(guess);
        if(isNaN(guess)){
            window.alert('please enter a valid number');
        }
        else if (guess < min , guess >max){
            window.alert('please enter a valid number');
        }
        else{
            attempts++;
            if(guess < answer){
                window.alert('too low try again');
            }
            else if(guess > answer){
                window.alert('too high try again');
            }
            else{
                window.alert(`correct the answer was ${answer} u had ${attempts} incorrect attempts`);
                running = false;
            }
        }
    }
}
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min)+1);

output = document.querySelector("#display");
tries = document.querySelector(".history");

attempts=0;
arr=[];
function check2(){
    if(output.value !== answer){
        if(output.value !== answer && output.value !==""){
            attempts++;
        }
        arr[attempts] = output.value;
        if(output.value==""){
            errorMessage.innerHTML="please enter a number";
            errorMessage.style.display= "block";
        }
        else if(output.value > answer){
            errorMessage.innerHTML=`your number is too high attempts: ${attempts} `;
            tries.innerHTML=`History: ${arr}`;
            tries.style.display="block";
            errorMessage.style.display= "block";
            output.value="";
        }
        else if(output.value < answer){
            errorMessage.innerHTML=`your number is too low attempts: ${attempts} `;
            tries.innerHTML=` History: ${arr}`;
            tries.style.display="block";
            errorMessage.style.display= "block";
            output.value="";
            }
    }
    if(output.value == answer){
        successMessage.innerHTML=`congratulations you got the number after ${attempts -1} attempts`;
        successMessage.style.display= "block";
        errorMessage.style.display= "none";

    }
}
function replay(){
    const answer = Math.floor(Math.random() * (max - min)+1);
    check2();
   var attempts="";
    var arr=[];
    output.value=""; errorMessage.innerHTML=`your number is too low attempts: ${attempts} `;
    tries.innerHTML=` History: ${arr}`;
    tries.style.display="none";
    errorMessage.style.display= "none";
    successMessage.style.display= "none";
}