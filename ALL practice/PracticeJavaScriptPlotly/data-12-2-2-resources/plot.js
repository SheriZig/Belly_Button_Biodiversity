var sortedCities = cityGrowths.sort((a,b)=> 
    b.Increase_from_2016 - a.Increase_from_2016);

var topFiveCities = cityGrowths.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
//this is correct but if you look in the data the 'Increase_from_2016' is 
// expressed as a string instead of an int. To chart it we want it to be an int
var topFiveCityGrowths = topFiveCities.map(city => city.Increase_from_2016);

var topFiveCityGrowthsInt = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowthsInt,
    type: "bar"
};

var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title:'City'},
    yaxis: {title: 'Population Growth, 2016-2017'}
};

Plotly.newPlot("bar-plot", data,layout);

console.log(topFiveCities)
console.log(topFiveCityNames)
console.log(topFiveCityGrowths)
console.log(topFiveCityGrowthsInt)
