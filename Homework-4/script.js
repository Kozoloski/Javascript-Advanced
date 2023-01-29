let button = document.getElementById("button");

button.addEventListener("click", ()=> {
 button.style.display = "none"
 fetch("https://swapi.dev/api/planets/?page=1")
  .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log("Data:", data)
        
        let tableData = "";
        data.results.map((values) => {
            tableData += `<tr>
            <td>${values.name}</td>
            <td>${values.population}</td>
            <td>${values.climate}</td>
            <td>${values.gravity}</td>
        </tr>`
        })
        document.getElementById("tableData").innerHTML = tableData;
    })
    .catch(function(err) {
        console.log("Error:",err)
    })

    let newButton = document.createElement("button");
    let container = document.getElementById("newButton");
    container.appendChild(newButton);
    newButton.innerText = "NEXT 10"
    newButton.style.backgroundColor = "#d1e7dd"
    
    let a = "Next"
    newButton.addEventListener("click", ()=> {
         
    if(a==="Next") {
    
        fetch("https://swapi.dev/api/planets/?page=2")
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log("Data:", data)
    
            let tableData = "";
            data.results.map((values) => {
                tableData += `<tr>
                <td>${values.name}</td>
                <td>${values.population}</td>
                <td>${values.climate}</td>
                <td>${values.gravity}</td>
            </tr>`
            })
            document.getElementById("tableData").innerHTML = tableData;
        })
        .catch(function(err) {
            console.log("Error:",err)
        })
        newButton.innerText = "PREVIOUS 10"
        a = "Previous"
    }
    else if(a==="Previous") {
        
        fetch("https://swapi.dev/api/planets/?page=1")
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log("Data:", data)
                
            let tableData = "";
            data.results.map((values) => {
                tableData += `<tr>
                <td>${values.name}</td>
                <td>${values.population}</td>
                <td>${values.climate}</td>
                <td>${values.gravity}</td>
            </tr>`
            })
            document.getElementById("tableData").innerHTML = tableData;
        })
        .catch(function(err) {
            console.log("Error:",err)
        })
        newButton.innerText = "NEXT 10"
        a = "Next"
    }
    })

})