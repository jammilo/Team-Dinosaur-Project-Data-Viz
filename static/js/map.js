function buildMap(data) {
    //clear the map
    $("#mapcontainer").empty();
    $("#mapcontainer").append(`<div id="map"></div>`);

    //apply the filter
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
        };
    };

    // Adding tile layer to the map
    var satellite_mode = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/satellite-v9",
        accessToken: API_KEY
    });
    var light_mode = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/light-v10",
        accessToken: API_KEY
    });
    var outdoors_mode = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/outdoors-v11",
        accessToken: API_KEY
    });
    var dark_mode = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/dark-v10",
        accessToken: API_KEY
    });
    var vintage_mode = L.tileLayer("https://api.mapbox.com/styles/v1/jammi527/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "ckleqjhhx30a017mp1cd6awl2",
        accessToken: "pk.eyJ1IjoiamFtbWk1MjciLCJhIjoiY2trZzVzdnQ3MDR4bTJvcGszd29qNXRoYyJ9.99I55pDTWCxp2yqfeZDugQ"
    });

    var myMap = L.map("map", {
        center: [0, 0],
        zoom: 1,
        layers: [light_mode, satellite_mode, outdoors_mode, dark_mode, vintage_mode]
    });

    var marker_list = L.markerClusterGroup();
    data.forEach(function(x) {
        if (x.Lat && x.Lng) {
            var marker = L.marker([x.Lat, x.Lng], {
                draggable: false
            });
            var popupList = "<dl><dt>Accepted Name</dt>" +
                "<dd>" + x["Accepted Name"] + "</dd>" +
                "<dt>Year Fossil Discovered</dt>" +
                "<dd>" + x["Ref Pubyr"] + "</dd>" +
                "<dt>Fossil Discovered By</dt>" +
                "<dd>" + x["Ref Author"] + "</dd>" +
                "<dt>Geological Time Period</dt>" +
                "<dd>" + x["Geological Time Period"] + "</dd>" +
                "<dt>Diet</dt>" +
                "<dd>" + x["Diet"] + "</dd>";
            marker.bindPopup(popupList);
            marker_list.addLayer(marker)
        }

    });


    var marker_group = L.layerGroup(marker_list);
    marker_list.addTo(myMap);

    // Create Layer Legend
    var baseMaps = {
        "Satellite": satellite_mode,
        "Light Mode": light_mode,
        "Outdoors Mode": outdoors_mode,
        "Dark Mode": dark_mode,
        "Vintage Mode": vintage_mode,


    };


    // Slap Layer Legend onto the map
    L.control.layers(baseMaps).addTo(myMap);

}