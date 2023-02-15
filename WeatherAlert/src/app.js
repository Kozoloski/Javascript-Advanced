console.log("test")

let statistics = document.getElementById("statistics");
let hourly = document.getElementById("hourly");
let about = document.getElementById("about");

let weatherPage = document.getElementById("weatherPage");
let hourlyPage = document.getElementById("hourlyPage");
let aboutPage = document.getElementById("aboutPage");

let inputText = document.getElementById("enterCity");
let button = document.getElementById("buttonSearch")
let cityInfo = document.getElementById("cityInfo")

statistics.addEventListener("click", function(e) {
    e.preventDefault()
    weatherPage.classList.add("active");
    hourlyPage.classList.remove("active")
    aboutPage.classList.remove("active")

    weatherPage.style.display = "block"
    hourlyPage.style.display = "none"
    aboutPage.style.display = "none"

})

hourly.addEventListener("click", function(e) {
    e.preventDefault()
    weatherPage.classList.remove("active");
    hourlyPage.classList.add("active")
    aboutPage.classList.remove("active")

    weatherPage.style.display = "none"
    hourlyPage.style.display = "block"
    aboutPage.style.display = "none"

})

about.addEventListener("click", function(e) {
    e.preventDefault()
    weatherPage.classList.add("active");
    hourlyPage.classList.remove("active")
    aboutPage.classList.remove("active")

    weatherPage.style.display = "none"
    hourlyPage.style.display = "none"
    aboutPage.style.display = "block"

})

let baseUrl = "https://api.openweathermap.org/data/2.5/weather"
let apiKey = "8aa9807f3c7e45273046679858502eee"
let url = `${baseUrl}?q=${inputText.value}&APPID=${apiKey}`

// "https://api.openweathermap.org/data/2.5/forecast?q=Skopje&APPID=8aa9807f3c7e45273046679858502eee"
button.addEventListener("click", function() {
 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputText.value}&APPID=8aa9807f3c7e45273046679858502eee`)
  .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log("Data:", data)
                
        let tableData = "";
        data.list.map((values) => {
            tableData += `<tr>
            <td>${values.weather[0].description}</td>
            <td>${values.dt_txt}</td>
            <td>${values.main.temp}</td>
            <td>${values.main.humidity}</td>
            <td>${values.wind.speed}</td>
        </tr>`
        })
        document.getElementById("tableData").innerHTML = tableData;

    })
    .catch(function(err) {
        console.log("Error:",err)
    })

})

