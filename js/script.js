// # light bulb node

const lightBulbContainer = document.getElementById("light-bulb-container");

const offLightBulb = document.getElementById("light-bulb-img");

// # on light bulb
const onLightBulb = document.createElement("img");

onLightBulb.src = "./img/yellow_lamp.png";
onLightBulb.classList.add("h-flip", "d-none");

// # light bulb switch

const lightSwitch = document.getElementById("light-bulb-switch");
lightSwitch.innerHTML = "ON";

lightSwitch.addEventListener("click", () => {
  lightBulbContainer.append(onLightBulb);
  offLightBulb.classList.toggle("d-none");
  onLightBulb.classList.toggle("d-none");

  //   if (lightSwitch.innerHTML.includes("ON")) {
  //     lightSwitch.innerHTML = "OFF";
  //   } else {
  //     lightSwitch.innerHTML = "ON";
  //   }

  lightSwitch.innerHTML.includes("ON")
    ? (lightSwitch.innerHTML = "OFF")
    : (lightSwitch.innerHTML = "ON");
});
