(function(){
    "use strict";

    var planets = ["Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune"];
    var planetsArray;

    
    
    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var planetsAsString = planets.join("|");
    console.log(planetsAsString);
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var planetsArray = planetsAsString.split("|");
    console.log(planetsAsArray);

})();