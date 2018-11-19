$('form').submit(function(e) {
    var form = this;
    e.preventDefault();
    setTimeout(function() {
        form.submit();
    }, 10000); // in milliseconds
    $("<p>thank you for your submittion</p>").appendTo("body");
});