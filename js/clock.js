const clock=document.querySelector('#myClock')

function showTime(){
    let date=new Date();
    let hour=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    if(minutes<10){
        minutes="0"+minutes
    }
    if(seconds<10){
        seconds="0"+seconds
    }

    let time=`${hour}: ${minutes}: ${seconds} `

    
    clock.innerHTML=time
    setTimeout(showTime,1000)
    
}

clock.addEventListener("onload",showTime())