// Nav bar toggle //
function myFunction(x) {
        x.classList.toggle("change");
}

// Fade in Heading Links //
$(document).ready(function() {

    $("#about").on("click", function() {
        $(".about-section").show();
        $("#about").hide();
        $("#portfolio").hide();
        $("#contact").hide();
    })

    $("#portfolio").on("click", function() {
        $(".portfolio-section").show();
        $("#portfolio").hide();
        $("#about").hide();
        $("#contact").hide();
    })

    $("#contact").on("click", function() {
        $(".contact-section").show();
        $("#contact").hide();
        $("#portfolio").hide();
        $("#about").hide();
    })

});

