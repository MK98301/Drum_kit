var button_length = document.querySelectorAll(".drum").length;

for(var i=0; i<button_length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

     var button_inner_text = this.innerHTML;
    make_sound(button_inner_text);
    button_animation(button_inner_text);
    });
}

// function handleclick()
// {
//     var button_inner_text = this.innerHTML;
    
//     switch(button_inner_text)
//     {
//         case "w":
//             var crash = new Audio("./sounds/crash.mp3");
//             crash.play();
//             break;
//         case "a":
//             var kick = new Audio("./sounds/kick-bass.mp3");
//             kick.play();
//             break;
//         case "s":
//             var snare = new Audio("./sounds/snare.mp3");
//             snare.play();
//             break;
//         case "d":
//             var tom1 = new Audio("./sounds/tom-1.mp3");
//             tom1.play();
//             break;
//         case "j":
//             var tom2 = new Audio("./sounds/tom-2.mp3");
//             tom2.play();
//             break;
//         case "k":
//             var tom3 = new Audio("./sounds/tom-3.mp3");
//             tom3.play();
//             break;
//         case "l":
//             var tom4 = new Audio("./sounds/tom-4.mp3");
//             tom4.play();
//             break;
//         default:
//             alert("Wrong Input");
//     }
    
// }

document.addEventListener("keypress",function(event){
    make_sound(event.key);
    button_animation(event.key);
})
function make_sound(key)
{
     switch(key)
    {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            alert("Wrong Input");
    }
}
function button_animation(currentkey)
{
    var active_button = document.querySelector("." + currentkey);
    
    active_button.classList.add("pressed");

    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100);
}