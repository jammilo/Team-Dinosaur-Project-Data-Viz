$(document).ready(function() {

    $("#decade").change(function() {
        doWork(false);
    })
    doWork(true);
});

function doWork() {
    d3.csv("static/data/kaggle.csv").then(function(data) {
        console.log(data);
        buildMap(data);
        makeStackedAreaChart(data);
        // if (isInit)
        //     makeFilters(data);
        var filteredData = filterBarChart(data);
        makePlot(filteredData);
    });
}