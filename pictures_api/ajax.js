//pictures API
$(function () {
  $('#search-form').submit(function (e) {
    e.preventDefault();
    var searchTerm = $('#search-input').val();
    getRequest(searchTerm);
  });

  function getRequest(input) {
    var cities = $('#cities_val').val();
    var url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY';
    var rules = {
      apiKey: 'AIzaSyBhhnezrT_baZJF8cvYWsOaFo3SRr3M-68',
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
});