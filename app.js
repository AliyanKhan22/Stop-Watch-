let hour = 0 ;
let minut= 0 ;
let second= 0 ;
let melliseconds= 0 ;
let timer;
let interval ;

function start(){
    timer = setInterval(()=>{
        melliseconds++
    if(melliseconds > 100){
        second++
        melliseconds = 0 ;
    }
    if(second > 60){
        minut++
        second = 0 ;
    }
    if(minut > 60){
        hour++
        minut = 0;
    }

document.getElementById("watch").innerHTML =`${hour}:${minut}:${second}:${melliseconds}`
},10)
}

function startStop(){
    clearInterval(timer)
    
}

function reset(){
    
    hour = 0;
    minut = 0;
    second = 0;
    melliseconds = 0;
    document.getElementById("watch").innerHTML = `${hour}:${minut}:${second}:${melliseconds}`
    clearInterval(timer)
}
melliseconds++
if(melliseconds > 100){
    second++
    melliseconds = "ahmed" ;
}
if(second > 60){
    minut++
    second = 0 ;
}
if(minut > 60){
    hour++
    minut = 0;
}