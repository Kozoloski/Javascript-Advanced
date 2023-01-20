let button = document.getElementById("button");
button.addEventListener("click", function() {
    let personName = document.createElement("h1")
    let container = document.getElementById("container")
    container.appendChild(personName)

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById("myTable").appendChild(table);


    fetch("https://swapi.dev/api/people/1")
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log("Data:", data)
        personName.innerText = data.name

        let row1 = document.createElement("tr");
        let heading1 = document.createElement("th");
        heading1.innerText = "Height";
        let heading2 = document.createElement("th");
        heading2.innerText = "Birth Year";
        let heading3 = document.createElement("th");
        heading3.innerText = "Eye Color";
        let heading4 = document.createElement("th");
        heading4.innerText = "Hair Color";
        
        row1.appendChild(heading1);
        row1.appendChild(heading2);
        row1.appendChild(heading3);
        row1.appendChild(heading4);
        thead.appendChild(row1);

        let row2 = document.createElement("tr");
        let personHeight = document.createElement("td");
        personHeight.innerText = data.height;
        let personBirth = document.createElement("td");
        personBirth.innerText = data.birth_year;
        let personEye = document.createElement("td");
        personEye.innerText = data.eye_color;
        let personHair = document.createElement("td");
        personHair.innerText = data.hair_color;

        row2.appendChild(personHeight);
        row2.appendChild(personBirth);
        row2.appendChild(personEye);
        row2.appendChild(personHair);
        tbody.appendChild(row2);

    })
    .catch(function(err) {
        console.log("Error:",err)
    })
})