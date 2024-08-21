var missing = Math.floor(Math.random() * 101); 
var tries=document.querySelector('#num_guesses');
var guessed_numbers = document.querySelector('#guessed_numbers');
console.log(output); 
console.log(missing);
console.log(output);
var arr=[20];
var output = document.querySelector('#output');

console.log(output)
var attempts=0;
function checking()
{
    arr[attempts] = output.value;
    if(output.value !== missing){
        attempts++;
        tries.innerHTML=`no of guesses are: ${attempts}`;
        guessed_numbers.innerHTML=`guessed numbers are: ${arr}`;
     }
     console.log(attempts);
    if(output.value == missing){
        alert(`congratulations you got the mystery number with a total of ${attempts-1} attempts`);
        choice=window.prompt("do you want to reset the game? enter 'y' for yes and 'n ' for no" );
        choice= choice.String("y");
        if(choice.value ==='y'){
            attempts=0;
            arr[20]=0;
            tries.innerHTML=`no of guesses are: ${attempts}`;
            guessed_numbers.innerHTML=`guessed numbers are: ${arr}`;
        }
        }
    if(output.value > missing){ 
        alert("number is too high,try again");
        }
    if(output.value < missing){ 
        alert("number is too low,try again");     
        }
    output.value = '';
}