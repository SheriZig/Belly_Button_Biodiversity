//return ALL data 
d3.json("samples.json").then(function(data){
    console.log(data);
});

// return ALL 'wfreq' values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

//Sort 'wfreq' values descending
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

//Filter out all null values 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

//Example forEach method to return trait and property from array
researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];

researcher1.forEach(element => console.log(element));

//Example data from json, object.entries, forEach
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});



