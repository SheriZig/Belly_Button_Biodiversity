//function to create plot
// init represents what the user will see when they initially open browser
// simple line chart
function init() {
    data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]

    }];
    Plotly.newPlot("plot",data);
};
// function 'updatePlotly' will update the chart based on 'change' when user
// selects an option from the dropdown
d3.selectAll("#dropdownMenu").on("change",updatePlotly);
function updatePlotly( ) {
   //dropdown menu from HTML doc
    var dropdownMenu = d3.select("#dropdownMenu");
    //value of the drodown menu selected (dataset1 or dataset2) from html
    var dataset = dropdownMenu.property("value");

    var xData = [1, 2, 3, 4, 5];
    var yData = [];

    if (dataset === 'dataset1') {
        yData = [1, 2, 4, 8, 16];

    };

    if (dataset === 'dataset2') {
        yData = [1, 10, 100, 1000, 10000];
    };


    var trace = {
        x: [xData],
        y: [yData],
    };

    Plotly.restyle("plot",trace);
};
init ();