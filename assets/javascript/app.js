function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Fade in Heading Links //
$(document).ready(function() {

    // Displays About section on click //
    $("#about").on("click", function() {
        $(".about-section").show();
        $(".portfolio-section").hide();
        $(".contact-section").hide();
    })

    // Displays Portfolio section on click //
    $("#portfolio").on("click", function() {
        $(".portfolio-section").show();
        $(".about-section").hide();
        $(".contact-section").hide();
    })

    // Displays Contact section on click //
    $("#contact").on("click", function() {
        $(".contact-section").show();
        $(".about-section").hide();
        $(".portfolio-section").hide();
    })

});

