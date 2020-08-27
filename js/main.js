
function getData() {
    $(".inner").empty();
    var input = $('#search').val();
    $.get('http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=1fpncJ1MOuYTjuS9lm0GCxSLOqvLitWw&limit=30', function (response) {
        for (i = 0; response.data.length; i++) {
            $('.inner').append("<div class='flex-child'><img src='" + response.data[i].images.original.url + "'></div>")
        }
    })
}
