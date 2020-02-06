// main.js


/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Design Patterns for Web Programming (DPW)
   • Week 4 
   • Assignment 5 - Factory
   
   */

/*
2. store and hold individual trips
3. submit all trips with button
*/


window.addEventListener("load", function() {
    console.log("page loaded");
    const singleton = FactoryAssignment.getInstance();
});

// use of Singleton design pattern
class FactoryAssignment {
    constructor() {

        document.getElementById('bttnAdd').addEventListener("click", e => {

            e.preventDefault();
            validateRequired();

            function validateRequired() {

                const continent = document.getElementById('continent').value;
                const place = document.getElementById('place').value;
                const date = document.getElementById('date').value;
                const km = parseFloat(document.getElementById('km').value);

                console.log(km);

                if (place != "" && date != "" && km != "" && !isNaN(km)) {
                    let newContinent = ContinentFactory.createContinent(continent);

                    newContinent.place = place;
                    newContinent.date = date.value;
                    newContinent.km = km.value;

                    const obj = {
                        continent: continent,
                        place: place,
                        date: date,
                        km: km
                    };

                    displayInfo(obj);

                    console.log(obj);

                } else {
                    alert("Complete form with appropriate values to submit.");
                }
            }

            // method that prints form information to the web page
            function displayInfo(obj) {

                console.log(obj);

                const tableBody = document.getElementById("tableBody");

                const row = document.createElement("tr");

                // Continent Column
                var cell = document.createElement("td");
                var cellText = document.createTextNode(obj.continent);
                cell.appendChild(cellText);
                row.appendChild(cell);
                console.log("Continent", cellText);

                // Place Column
                var cell = document.createElement("td");
                var cellText = document.createTextNode(obj.place);
                cell.appendChild(cellText);
                row.appendChild(cell);
                console.log("Place", cellText);

                // Date Column
                var cell = document.createElement("td");
                var cellText = document.createTextNode(obj.date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                console.log("Date", cellText);

                // KM Column
                var cell = document.createElement("td");
                var cellText = document.createTextNode(obj.km);
                cell.appendChild(cellText);
                row.appendChild(cell);
                console.log("KM", cellText);

                tableBody.appendChild(row);

            }
        });
    }

    // method that allows only one instance of the AssignPrototype Singleton class to be called
    static getInstance() {
        if (!FactoryAssignment._instance) {
            FactoryAssignment._instance = new FactoryAssignment();
            return FactoryAssignment._instance;
        } else {
            throw "Only one Singleton can be created, ya heard?";
        }
    }
}