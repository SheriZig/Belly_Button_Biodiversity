//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("plotArea", [{x:[5,10,15],y:[10,20,30]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"], 
    y: [10, 18, 5],
    type: "bar"
}

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}

};

Plotly.newPlot("plotArea", [trace], layout);