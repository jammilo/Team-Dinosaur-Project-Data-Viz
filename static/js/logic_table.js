$(document).ready(function() {
    console.log("page loaded");
    buildTable();

    $("#filter-btn").on("click", function(e) {
        e.preventDefault();
        buildTable();
    });

    $("#form").on("submit", function(e) {
        e.preventDefault();
        buildTable();
    });
});

function buildTable() {
    var nameInput = $("#nameInput").val();
    var dietInput = $("#diet").val();
    var countryInput = $("#country").val();
    var GTPInput = $("#GTP").val();


    d3.csv("static/data/kaggle.csv").then(function(data) {
        console.log(data);
        // var unq_countries = [...new Set(data.map(x => x.Country))];
        // console.log(unq_countries)
        // unq_countries.forEach(function(val) {
        //     var newOption = `<option value="">${val}</option>`;
        //     $("#country").append(newOption);
        // });

        // if (nameInput === "") {
        //     buildTableString(data);
        // } else {
        //     var filteredData = data.filter(row => row["Accepted Name"].includes(nameInput));
        //     if (filteredData.length === 0) {
        //         alert("There is no data from chosen name")
        //     };
        //     buildTableString(filteredData);
        // }


        var filteredData = data;
        if (nameInput) {
            filteredData = filteredData.filter(row => row["Accepted Name"].includes(nameInput));
        }
        if (dietInput) {
            filteredData = filteredData.filter(row => row.Diet === dietInput);
        }
        if (countryInput) {
            filteredData = filteredData.filter(row => row.Country === countryInput);
        }
        if (GTPInput) {
            filteredData = filteredData.filter(row => row["Geological Time Period"] === GTPInput);
        }

        // see if we have any data left
        if (filteredData.length === 0) {
            alert("No Data Found!");
        }
        buildTableString(filteredData);
    });

}




function buildTableString(data) {
    var tbody = $("#ufo-table>tbody");
    tbody.empty();
    data.forEach(function(row) {
        var newRow = "<tr>";
        Object.entries(row).forEach(function([key, value]) {
            newRow += `<td>${value}</td>`
        });
        newRow += "</tr>";
        tbody.append(newRow);
    });
}