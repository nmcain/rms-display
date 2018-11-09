  
function startTime() {
    var today = new Date();
    var h = today.getHours();
    if (h > 12) h -= 12;  
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}





function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    //document.getElementById("msg").innerHTML = "Enabling component jslinux-nocrostini_1.1"
  await sleep(100);
  
  
    document.getElementById("loadscreen").style.display = "none"
    document.getElementById("twitter").style.display = "block"
}
demo();