let today = Date.now()
let localToday = Date()
let hoursToday = new Date()



document.getElementById("timestamp").innerHTML = today;
document.getElementById("localDate").innerHTML = hoursToday.toLocaleString();
document.getElementById("localTime").innerHTML =  hoursToday.toLocaleTimeString();

console.log(localToday);
let heure = new Date()
let newDate = new Date();
newDate.setHours(heure.getHours() +54);
console.log(newDate);


if ( newDate > heure) {
   let result = document.createElement("div");
    document.body.appendChild(result);
    let interval = newDate.getTime() - heure.getTime()
    console.log(interval)
    let days = Math.floor(interval / 1000 / 60 / 60 / 24);
    let hours = Math.floor(interval / 1000 / 60 / 60);
    let minutes = Math.floor(interval / 1000 / 60);
    let seconds = Math.floor(interval / 1000);
    result.innerHTML += "temps entre ces 2 dates = " + hours + " heures "
}

