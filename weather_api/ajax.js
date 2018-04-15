
//weather API
$(function () {
    $('#search_form').submit(function (e) {
        e.preventDefault();
        var searchTerm = $('#cities_val').val();
        getRequest(searchTerm);
        changeMap(searchTerm);
    });

    function getRequest(input) {
        var cities = $('#cities_val').val();
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cities + '&units=metric';
        var rules = {
            apiKey: '1be6f30a077fbfcaf70e0150e6057800',
            s: input,
            r: 'json'
        };

        $.ajax({
            url: url,
            type: 'GET',
            data: rules,
            dataType: 'json'
        })
            .done(function (done) {
                showResults(done);
            })
            .fail(function (fail) {

            });
    }
    function showResults(data) {
        // console.log(data);

        $('.temp').text(data.main.temp + 'C');
        $('.wind').text(data.wind.speed + 'm/s');
        $('.humidity').text(data.main.humidity +'%');

    }

    function changeMap(location) {
        console.log(location);
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: location
        });
    }

    $(function () {
        $('#btn1').on('click', function () {
            $('.temp').slideToggle(50);
        });
        $('#btn1').on('click', function () {
            $('.wind').slideToggle(50);
        });
        $('#btn1').on('click', function () {
            $('.humidity').slideToggle(50);
        });
    });
});

