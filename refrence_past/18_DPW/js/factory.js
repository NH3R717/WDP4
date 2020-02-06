// factory.js


/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Design Patterns for Web Programming (DPW)
   • Week 4 
   • Assignment 5 - Factory
   
   */


class ContinentFactory {
    constructor() {

    }

    static createContinent(continent) {

        // let continent = null;

        if (continent == "Africa") {
            console.log(continent);
            return new Africa();

        } else if (continent === "Antarctica") {
            continent = new Antarctica();

        } else if (continent === "Asia") {
            return new Asia();

        } else if (continent === "Europe") {
            return new Europe();

        } else if (continent === "North America") {
            return new NorthAmerica();

        } else if (continent === "South America") {
            return new SouthAmerica();

        } else if (continent === "Oceania") {
            return new Oceania();
        } else {

            alert("NAC = Not a continent. Chose a continent from the list.");


            return;
        }
    }
}