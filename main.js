var second = document.querySelector(".second")
var center = document.querySelector(".center")

function generate(key, value) {
    var container = document.createElement("div")
    container.classList.add("container")

    var keyDiv = document.createElement("div")
    keyDiv.classList.add("key")

    var valueDiv = document.createElement("div")
    valueDiv.classList.add("value")

    keyDiv.innerHTML = key

    if (key === "Flag") {
        let img = document.createElement("img")
        img.src = value
        valueDiv.appendChild(img)

    } else if (key === "Court of Arms") {
        let img = document.createElement("img")
        img.src = value
        valueDiv.appendChild(img)

    } else if (key === "Google Maps") {
        let a = document.createElement("a")
        a.href = value
        a.target = "_blank"
        a.innerHTML = "Click To Open Google Map"
        valueDiv.appendChild(a)

    } else
        valueDiv.innerHTML = value


    container.appendChild(keyDiv)
    container.appendChild(valueDiv)

    second.append(container)
}

function getAPIData() {
    let input = document.getElementById("country")
    let country = "Bharat"
    if (input.value !== "")
        country = input.value

    let request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/" + country)
    request.send()

    center.removeChild(second)
    second = document.createElement("second")
    second.classList.add("second")
    center.appendChild(second)


    request.addEventListener("load", () => {
        let data = JSON.parse(request.responseText)
        data.forEach(country => {
            generate("Name", country.name.official);
            generate("Flag", country.flags.png);
            generate("Court of Arms", country.coatOfArms.png);
            generate("Capital", country.capital);
            generate("Google Maps", country.maps.googleMaps);
            generate("Region", country.region);
            generate("Subregion", country.subregion);
            generate("Continents", country.continents);
            generate("Latitude, Longitude", country.latlng);
            generate("Borders", country.borders);
            generate("Land Locked", country.landlocked);
            generate("Population", country.population);
            generate("Area", country.area);
            generate("Independent", country.independent);
            generate("UN Member", country.unMember);
            generate("Postal Code", Object.values(country.postalCode));
            generate("Currencies", Object.values(Object.values(country.currencies)[0]));
            generate("Car", Object.values(country.car));
            generate("Time Zones", country.timezones);
            generate("Start Of Week", country.startOfWeek);
            generate("Languages", Object.values(country.languages));

            let gap = document.createElement("div")
            gap.classList.add("gap")
            second.appendChild(gap)


        });;
    })
}
getAPIData()