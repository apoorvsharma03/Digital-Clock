setInterval(gettime, 1000);
function gettime(){
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var ses = "AM";

    if(h > 12){
        h -= 12;
        ses = "PM";
    }

    if(h < 10){
        h = '0' + h;
    }
    if(m < 10){
        m = '0' + m;
    }
    if(s < 10){
        s = '0' + s;
    }

    document.getElementById('hours').innerHTML = h 
    document.getElementById('minutes').innerHTML = m 
    document.getElementById('seconds').innerHTML = s;
    document.getElementById('session').innerHTML = ses;
}