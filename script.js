let colors = ['green', 'yellow', 'red'];
let i = 0;
function color(){
    const trafficLightEl = document.querySelector('#trafficLight');
    trafficLightEl.style.background = (colors[i]);
    i++;
    if(i == 3){
        i = 0;
    }
}
