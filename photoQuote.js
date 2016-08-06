
$(document).ready(function () {
    getQuote();
});


/* This function retrieves a quote from the Forismatic API and applies it to the appropriate divs */

function getQuote() {
    var request = $.ajax({
        url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
        dataType: "jsonp"
    });

    request.done(function (data) {
        $("#log").html(data);
        $("#quoteText").text(data.quoteText);
        $("#quoteAuthor").text(data.quoteAuthor);
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    })
};

/* This function changes the background image by calculating a random number and accessing the photo at that number */

function randomImg() {

    var photos = ['backImg-1.jpg', 'backImg-2.jpg', 'backImg-3.jpg', 'backImg-4.jpg', 'backImg-5.jpg', 'backImg-6.jpg', 'backImg-7.jpg', 'backImg-8.jpg', 'backImg-9.jpg', 'backImg-10.jpg', 'backImg-11.jpg', 'backImg-12.jpg', 'backImg-13.jpg', 'backImg-14.jpg', 'backImg-15.jpg', 'backImg-16.jpg', 'backImg-17.jpg', 'backImg-18.jpg', 'backImg-19.jpg', 'backImg-20.jpg', 'backImg-21.jpg', 'backImg-22.jpg', 'backImg-23.jpg', 'backImg-24.jpg', 'backImg-25.jpg'];

    $('html').css({ 'background': 'url(photos/' + photos[Math.floor(Math.random() * photos.length)] + ')' });
    $('html').css({ 'background-size': 'cover' });
};