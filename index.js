const tempLoad = () =>{
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    

setTimeout(() =>{
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "#e2aa01";
}, 1000);
setTimeout(() =>{
    temp.innerHTML = "&#xf2c9";
}, 2000);
setTimeout(() =>{
    temp.innerHTML = "&#xf2c8";
   
}, 3000);
setTimeout(() =>{
    temp.innerHTML = "&#xf2c7";
    temp.style.color = "#c51111";
}, 4000);

}

tempLoad();

setInterval(tempLoad, 5000);
