function printCurrentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// Esegue la funzione printCurrentTime ogni 1000 millisecondi (1 secondo)
setInterval(printCurrentTime, 1000);