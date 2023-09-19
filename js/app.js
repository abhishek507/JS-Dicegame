function roll(){
    let audio = document.getElementById('audio');
    audio.play();

    document.getElementById('diceValue').innerHTML = '';
    document.getElementById('dice').classList.add('dice-animation')

   setTimeout(()=>{
    let diceNumber = Math.floor(Math.random()*6);
    if(diceNumber == 0){
        diceNumber = 1;
    }
    let diceValue = document.getElementById('diceValue');
    diceValue.innerHTML = diceNumber;
   },2000) 



    setTimeout(()=>{
        document.getElementById('dice').classList.remove('dice-animation');
    },2000)
}