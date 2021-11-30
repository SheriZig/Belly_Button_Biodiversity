const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

//first record by index
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

//full_name property 
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

//latitude from first record by index
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

