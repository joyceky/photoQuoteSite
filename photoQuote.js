//"use strict";
var photos = null;

$(document).ready(function () {
    preCachePhotos();
    
    randomImg();
       
    getQuote();
});

/*
 * This function retrieves a quote from the Forismatic API and applies it to the appropriate divs
 */
function getQuote() {
    var request = $.ajax({
        url: "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
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

/*
 * This function changes the background image by calculating a random number and accessing the photo at that number
 */
// pull two images at first rather than one
// put in object, one key value pair (current image), another key value pair (next image)
function randomImg() {

    photos = ['landscape1.jpg', 'landscape2.jpg', 'landscape3.jpg', 'landscape4.jpg', 'landscape5.jpg', 'landscape6.jpg', 'landscape7.jpg', 'landscape8.jpg', 'landscape9.jpg', 'landscape10.jpg', 'landscape11.jpg', 'landscape12.jpg', 'landscape13.jpg', 'landscape14.jpg', 'landscape15.jpg', 'landscape16.jpg', 'landscape17.jpg', 'landscape18.jpg', 'landscape19.jpg', 'landscape20.jpg', 'landscape21.jpg', 'landscape22.jpg', 'landscape23.jpg', 'landscape24.jpg', 'landscape25.jpg', 'landscape26.jpg', 'landscape27.jpg', 'landscape28.jpg', 'landscape29.jpg', 'landscape30.jpg', 'landscape31.jpg', 'landscape32.jpg', 'landscape33.jpg', 'landscape34.jpg', 'landscape35.jpg', 'landscape36.jpg', 'landscape37.jpg']

    $('#bgPic1').css({ 'background': 'url(photos/' + photos[Math.floor(Math.random() * photos.length)] + ')' });
};

/*
 * Begin loading image array when window loads
 */
function preCachePhotos(){    
    $.each(photos, function(){
        var img = new Image();
        img.src = this;
    });
};
 
//$(window).load(function(){
//    preCachePhotos();
//});