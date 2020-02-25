let btn = document.querySelector(".button");
btn.addEventListener("click", function(){
    changeColor();
    document.querySelector(".hex-box").innerText = document.querySelector(".hex-box").style.backgroundColor;

});

function getRandomNumber(){
    let randomNumber = Math.random()*16;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

function getRandomArray(){
   let randomHexValue = [getRandomNumber(),getRandomNumber(),getRandomNumber(),getRandomNumber(),getRandomNumber(),getRandomNumber()];
    // let randomHexValue = [];
    // for(var i = 0; i < 6;i++){
    //     randomHexValue[i] = getRandomNumber()
    // }

    return randomHexValue;  
}

function getCorrectHexArray(array){
    let hexString = "#";
    for(var i = 0; i < 6; i++){
        if(array[i] <= 9){
            hexString = hexString + array[i];
        } else if(array[i] === 10){
            hexString = hexString + "a";
        }
        else if(array[i] === 11){
            hexString = hexString + "b";
        }
        else if(array[i] === 12){
            hexString = hexString + "c";
        }
        else if(array[i] === 13){
            hexString = hexString + "d";
        }
        else if(array[i] === 14){
            hexString = hexString + "e";
        }
        else if(array[i] === 15){
            hexString = hexString + "f";
        }
    }
    return hexString;

}

function changeColor(){
    let hexBox = document.querySelector(".hex-box");
    hexBox.style.backgroundColor = getCorrectHexArray(getRandomArray());
}