$('#lost-button').on('click', function() {
    $('#lost').html("");
    $.getJSON("/profile/lost", function() {
        console.log("request sent");
    })
    .done( function(results) {
        const markerArray = [];
        for (var key in results) {
            markerArray.push(`<div class="flexbox"><form class="delete-button" action="/delete?id=${results[key]._id}" method="POST"><input type="hidden" name="_method" value="DELETE"><button type="submit" class="btn btn-danger btn-sm">delete</button></form><form class="details-button" action="/markers/details" method="GET"><input type="hidden" name="id" value="${results[key]._id}"><button type="submit" class="btn btn-info btn-sm">details</button></form><p class="marker-item">item description: ${results[key].desc}</p></div>`);
        }
        const markers = markerArray.join("");
        console.log(results);
        $('#lost').append(markers);
    });
});

$('#found-button').on('click', function() {
    $('#found').html("");
    $.getJSON("/profile/found", function() {
        console.log("request sent");
    })
    .done( function(results) {
        const markerArray = [];
        for (var key in results) {
            markerArray.push(`<div class="flexbox"><form class="delete-button" action="/delete?id=${results[key]._id}" method="POST"><input type="hidden" name="_method" value="DELETE"><button type="submit" class="btn btn-danger btn-sm">delete</button></form><form class="details-button" action="/markers/details" method="GET"><input type="hidden" name="id" value="${results[key]._id}"><button type="submit" class="btn btn-info btn-sm">details</button></form><p class="marker-item">item description: ${results[key].desc}</p></div>`);
        }
        const markers = markerArray.join("");
        console.log(results);
        $('#found').append(markers);
    });
});

