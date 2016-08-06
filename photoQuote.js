
$( document ).ready(function() {  
    getQuote();
});


/* This function retrieves a quote from the Forismatic API and applies it to the appropriate divs */

function getQuote() {    
    var request = $.ajax({
        url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
        dataType: "jsonp"                
    });

    request.done(function(data) {
        $("#log").html(data);
        $("#quoteText").text(data.quoteText);
        $("#quoteAuthor").text(data.quoteAuthor);
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    })
};

/* This function changes the background image */

function randomImg(){

    var photos = ['backImg-1.jpg', 'backImg-2.jpg', 'backImg-3.jpg', 'backImg-4.jpg', 'backImg-5.jpg', 'backImg-6.jpg'];

    $('#html').css({'background': 'url(photos/' + photos[Math.floor(Math.random() * photos.length)] + ')'});

};