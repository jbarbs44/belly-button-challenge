// Set up the url variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Promise Pending
const dataPromise = d3.json(url);
// console.log("Data Promise: " + dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data){
    // console.log(data);
})

//   // Need to fetch JSON data again to add to dropdown menu
d3.json(url).then(function(data) {

    // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
    
    //Add ID names to dropdown menu
    data.names.forEach(function(name){
        dropdownMenu.append("option").text(name).property("value");
        // console.log(dropdownMenu);
    


    });
});




