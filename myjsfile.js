//function showThePic() {
  //  show('.spoiler-box') ;
//}


// const is a keyword used to signify a variable that wont change (that // name cant be reassigned to another value), it is shorthand for "constant"
// const chosenElement = document.getElementById('chosenElementID');

// add the event listener for a "click" event
//chosenElement.addEventListener('click', clickHandlerFunction)


//function clickHandlerFunction() {
//    chosenElement. // here is where you would call some DOM manipulating method which could enlarge the element, change its color, whatever you want to do
//}


function on() {
    document.getElementById("spoiler-box").style.display = "block";
}

function off() {
    document.getElementById("spoiler-box").style.display = "none";
}
