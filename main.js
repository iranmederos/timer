let min = 0;
let sec = 0;
let msec = 0;
let b_start = document.querySelector('.b_start');
let b_stop = document.querySelector('.b_stop');
let b_reset = document.querySelector('.b_reset');
let clock = document.querySelector('.clock');
let interval;

b_start?.addEventListener('click', ()=>{
    clearInterval(interval);
    interval= setInterval(start_timer,10);
});

b_reset?.addEventListener('click',()=>{
    clearInterval(interval);
    min=0;
    sec=0;
    msec=0;
    clock.innerHTML = `00:00:00`
});

b_stop?.addEventListener('click', ()=>{clearInterval(interval)});

function start_timer() {

    msec++;

    if (msec > 99) {
        sec++;
        msec = 0;
    }
    if (sec > 59) {
        min++;
        sec = 0;
    }

    if(msec <= 9 && sec <=9 && min<=9){
       clock.innerHTML = `0${min}:0${sec}:0${msec}`;
    }
    if(msec > 9 && sec<=9 && min <=9){
       clock.innerHTML = `0${min}:0${sec}:${msec}`;
    }
    if(msec > 9 && sec > 9 && min <= 9){
       clock.innerHTML = `0${min}:${sec}:${msec}`;
    }
    if(msec > 9 && sec > 9 && min > 9){
       clock.innerHTML  `${min}:${sec}:${msec}`;
    }
}

