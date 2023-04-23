const API_URL = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = `dde669c54dbec53c562abad52d716702`;

const inp = document.querySelector(".inp");
console.log(inp);
async function getData(city) {
  const data = await fetch(
    `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const response = await data.json();
  return response;
}

function prikaziGrad(data) {
  let grad = document.createElement("div");

  let ime = document.createElement("h2");
  ime.innerText = data.name;

  let drzava = document.createElement("p");
  drzava.innerText = data.sys.country;

  let vreme = document.createElement("p");
  vreme.innerText = "Now: " + data.weather[0].main;

  let detaljnoVreme = document.createElement("p");
  detaljnoVreme.innerText = "More precisely: " + data.weather[0].description;

  let Temperature = document.createElement("p");
  Temperature.innerText = "Temperature: " + data.main.temp + "°C";

  let maxTemp = document.createElement("p");
  maxTemp.innerText = "Maximal Temperature: " + data.main.temp_max + "°C";

  let minTemp = document.createElement("p");
  minTemp.innerText = "Minimal Temperature: " + data.main.temp_min + "°C";

  let vlaznost = document.createElement("p");
  vlaznost.innerText = "Humidity: " + data.main.humidity + "%";

  let pritisak = document.createElement("p");
  pritisak.innerText = "Pressure: " + data.main.pressure + " mb";

  let oseca_se_kao = document.createElement("p");
  oseca_se_kao.innerText = "Feels like: " + data.main.feels_like + "°C";
  weather = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  let vetar = document.createElement("p");
  vetar.innerText = "Wind: " + data.wind.speed + " m/s";

  let ikona = document.createElement("img");
  ikona.style.width = "100px";
  ikona.style.height = "100px";
  ikona.src = weather;

  grad.appendChild(ime);
  grad.appendChild(drzava);
  grad.appendChild(ikona);
  grad.appendChild(vreme);
  grad.appendChild(detaljnoVreme);
  grad.appendChild(Temperature);
  grad.appendChild(maxTemp);
  grad.appendChild(minTemp);
  grad.appendChild(oseca_se_kao);
  grad.appendChild(vetar);
  grad.appendChild(vlaznost);
  grad.appendChild(pritisak);

  const prikazDiv = document.querySelector(".prikaz");
  prikazDiv.innerHTML = "";
  prikazDiv.appendChild(grad);
}

btn.addEventListener("click", () => {
  const city = inp.value;
  if (!city) {
    alert("Enter a city name!");
    return;
  }
  getData(inp.value).then((res) => {
    if (res.cod === "404") {
      alert("City not found. Please enter a valid city name.");
      return;
    }
    console.log(res);
    prikaziGrad(res);
  });
});
