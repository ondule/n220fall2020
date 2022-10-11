let runnerUps = ""

let bestTimes = [7000 + " secs", 8050 + " secs", 9001 + " secs"];
for (let i = 0; i < 2; i++) {
    runnerUps += bestTimes[i] + "<br>";
}
document.getElementById("myDiv").innerHTML = bestTimes[2];
document.getElementById("myDiv2").innerHTML = runnerUps;


