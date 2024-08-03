
let hour = document.getElementById('hours')
let minute = document.getElementById('minutes')
let second = document.getElementById('seconds')
let time = document.getElementById('time')

function WorkingClock() {
    ///getting date///

    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()


    ///calculation///

    let HRotation = 30 * hh + mm / 2
    let MRotation = 6 * mm
    let SRotation = 6 * ss




    //Rotation deg//
    hour.style.transform = `rotate(${HRotation}deg)`
    minute.style.transform = `rotate(${MRotation}deg)`
    second.style.transform = `rotate(${SRotation}deg)`


}



setInterval(WorkingClock, 1000)

//date///

document.addEventListener('DOMContentLoaded', function () {
    let newday = document.getElementById('day');

    function clockdate() {
        let now = new Date();
        let daysname = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let day = daysname[now.getDay()];
        let month = monthNames[now.getMonth()];
        let date = now.getDate();
        return `${day}-${month}-${date}`;
    }

    newday.textContent = clockdate();
});

//time//
function clocktime (){
    let CTime = new Date ()
    time.textContent = CTime.toLocaleTimeString()
}
setInterval(clocktime,1000)