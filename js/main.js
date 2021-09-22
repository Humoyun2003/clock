const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    // document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    hr.style.transform = `rotateZ(${h}deg)`;
    mn.style.transform = `rotateZ(${m * deg}deg)`;
    sc.style.transform = `rotateZ(${s * deg}deg)`;
    var t = setTimeout(function () { startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}