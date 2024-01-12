function Async1() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("20 Deg");
        }, 1000);
    });

    let mpWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 Deg");
        }, 5000);
    });

    delhiWeather.then((data) => {
        document.body.innerHTML += "<h1>" + data + "</h1>"; // Corrected line to display data
        alert("Delhi Weather: " + data);
    });

    mpWeather.then((data) => {
        alert("MP Weather: " + data);
    });
}

console.log("Weather control room");
Async1();
