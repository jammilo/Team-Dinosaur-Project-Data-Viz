function makeStackedAreaChart(data) {

    //Step 0: apply filter
    var filter = $("#decade").val();
    if (filter != "All") {
        if (filter == "2010") {
            data = data.filter(x => (x["Ref Pubyr"] >= 2010) & (x["Ref Pubyr"] < 2020))
        } else if (filter == "2000") {
            data = data.filter(x => (x["Ref Pubyr"] >= 2000) & (x["Ref Pubyr"] < 2010))
        } else if (filter == "1990") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1990) & (x["Ref Pubyr"] < 2000))
        } else if (filter == "1980") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1980) & (x["Ref Pubyr"] < 1990))
        } else if (filter == "1970") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1970) & (x["Ref Pubyr"] < 1980))
        } else if (filter == "1960") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1960) & (x["Ref Pubyr"] < 1970))
        } else if (filter == "1950") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1950) & (x["Ref Pubyr"] < 1960))
        } else if (filter == "1940") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1940) & (x["Ref Pubyr"] < 1950))
        } else if (filter == "1930") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1930) & (x["Ref Pubyr"] < 1940))
        } else if (filter == "1920") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1920) & (x["Ref Pubyr"] < 1930))
        } else if (filter == "1910") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1910) & (x["Ref Pubyr"] < 1920))
        } else if (filter == "1900") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1900) & (x["Ref Pubyr"] < 1910))
        } else if (filter == "1890") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1890) & (x["Ref Pubyr"] < 1900))
        } else if (filter == "1880") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1880) & (x["Ref Pubyr"] < 1890))
        } else if (filter == "1870") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1870) & (x["Ref Pubyr"] < 1880))
        } else if (filter == "1860") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1860) & (x["Ref Pubyr"] < 1870))
        } else if (filter == "1850") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1850) & (x["Ref Pubyr"] < 1860))
        } else if (filter == "1840") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1840) & (x["Ref Pubyr"] < 1850))
        } else if (filter == "1830") {
            data = data.filter(x => (x["Ref Pubyr"] >= 1830) & (x["Ref Pubyr"] < 1840))
        }
    }

    // STEP 1: SET UP THE CANVAS
    $("#chart").empty();

    // var svgWidth = 960;
    var svgWidth = window.innerWidth / 2;
    var svgHeight = 425;

    var margin = {
        top: 20,
        right: 40,
        bottom: 60,
        left: 50
    };

    var chart_width = svgWidth - margin.left - margin.right;
    var chart_height = svgHeight - margin.top - margin.bottom;

    // STEP 2: CREATE THE SVG (if it doesn't exist already)
    // Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
    var svg = d3.select("#chart")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .classed("chart", true);

    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // STEP 3: PREPARE THE DATA
    var parseTime = d3.timeParse("%Y");
    data.forEach(function(row) {
        row["Ref Pubyr"] = parseTime(row["Ref Pubyr"]);

    });

    data = data.sort((a, b) => b["Ref Pubyr"] - a["Ref Pubyr"]);

    var keys = Array.from(d3.group(data, d => d["Geological Time Period"]).keys());
    var valueTemp = Array.from(d3.rollup(data, (d) => d.length, d => d["Ref Pubyr"], d => d["Geological Time Period"]));

    valueTemp.map(function(obj) {
        var tempKeys = Array.from(obj[1].keys());
        if (tempKeys.length === 1) {
            if (tempKeys[0] == "Jurassic") {
                obj[1].set("Triassic", 0);
                obj[1].set("Cretaceous", 0);
            } else if (tempKeys[0] == "Cretaceous") {
                obj[1].set("Triassic", 0);
                obj[1].set("Jurassic", 0);
            } else if (tempKeys[0] == "Triassic") {
                obj[1].set("Cretaceous", 0);
                obj[1].set("Jurassic", 0);
            }
        } else if (tempKeys.length === 2) {
            if ((tempKeys[0] == "Jurassic") & (tempKeys[1] == "Cretaceous")) {
                obj[1].set("Triassic", 0);
            } else if ((tempKeys[0] == "Jurassic") & (tempKeys[1] == "Triassic")) {
                obj[1].set("Cretaceous", 0);
            } else if ((tempKeys[0] == "Cretaceous") & (tempKeys[1] == "Jurassic")) {
                obj[1].set("Triassic", 0);
            } else if ((tempKeys[0] == "Cretaceous") & (tempKeys[1] == "Triassic")) {
                obj[1].set("Jurassic", 0);
            } else if ((tempKeys[0] == "Triassic") & (tempKeys[1] == "Jurassic")) {
                obj[1].set("Cretaceous", 0);
            } else if ((tempKeys[0] == "Triassic") & (tempKeys[1] == "Cretaceous")) {
                obj[1].set("Jurassic", 0);
            }
        }
        return obj;
    });
    console.log(valueTemp);
    var values = Array.from(valueTemp);

    var order = d3.stackOrderNone;
    var series = d3.stack()
        .keys(keys)
        .value(([, values], key) => values.get(key))
        .order(order)
        (values);

    console.log(values);
    console.log(series);


    // Step 4: Create scaling functions
    var xTimeScale = d3.scaleTime()
        .domain(d3.extent(data, d => d["Ref Pubyr"]))
        .range([0, chart_width]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(series, d => d3.max(d, d => d[1]))]).nice()
        .range([chart_height, 0]);

    var colorScale = d3.scaleOrdinal()
        .domain(keys)
        .range(d3.schemeCategory10);

    var area = d3.area()
        .x(d => xTimeScale(d.data[0]))
        .y0(d => yScale(d[0]))
        .y1(d => yScale(d[1]));


    // STEP 5: CREATE THE AXES
    var leftAxis = d3.axisLeft(yScale);
    var bottomAxis = d3.axisBottom(xTimeScale);

    chartGroup.append("g")
        .attr("transform", `translate(0, ${chart_height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .call(leftAxis);



    // STEP 6: CREATE THE GRAPH
    chartGroup.append("g")
        .selectAll("path")
        .data(series)
        .join("path")
        .attr("fill", ({ key }) => colorScale(key))
        .attr("d", area)
        .append("title")
        .text(({ key }) => key);

    // STEP 7: Add Axes Labels
    // Create axes labels
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 0)
        .attr("x", 0 - (chart_height / 2))
        .attr("dy", "1em")
        .attr("class", "axisText")
        .text("# of Dinos");

    chartGroup.append("text")
        .attr("transform", `translate(${chart_width / 2}, ${chart_height + margin.top + 30})`)
        .attr("class", "axisText")
        .text("Year of Discovery");

    // STEP 8: Add the legend

    var legend = d3.legendColor()
        .scale(colorScale);

    chartGroup.append("g")
        .attr("transform", `translate(${chart_width -100},0)`)
        .call(legend);
}