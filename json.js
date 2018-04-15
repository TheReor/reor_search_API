$(function () {
    $('#currency').submit(function (e) {
        e.preventDefault();
        var amount = $('#get_exchange').val();
        var currencySelectFrom = $('#currency_list_from1').val();
        console.log(currencySelectFrom);
        var currencySelectTo = $('#currency_list_to1').val();
        console.log(amount, currencySelectFrom, currencySelectTo)
        getExchangeRate(amount, currencySelectFrom, currencySelectTo);
    });

    function getExchangeRate(input, currencyFrom, currencyTo) {
        var url = 'https://forex.1forge.com/1.0.3/convert?';
        var rules = {
            api_key: 'QWszgQoBFgqZDd1bvziECwD7ebVpU2Pb',
            from: currencyFrom,
            to: currencyTo,
            quantity: input
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
        //console.log(data);
        $('#search_results').text(data.text);
        console.log(data);
        console.log('test');
    }
});

