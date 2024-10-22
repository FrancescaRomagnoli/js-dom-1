// # light bulb node

const lightBulbContainer = document.getElementById("light-bulb-container");

const offLightBulb = document.getElementById("light-bulb-img");

// # on light bulb
const onLightBulb = document.createElement("img");

onLightBulb.src = "./img/yellow_lamp.png";
onLightBulb.classList.add("h-flip");

lightBulbContainer.append(onLightBulb);
