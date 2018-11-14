function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Fade in Heading Links //
$(document).ready(function() {

    $("#about").on("click", function() {
        $(".about-section").show();
        $(".portfolio-section").hide();
        $(".contact-section").hide();
    })

    $("#portfolio").on("click", function() {
        $(".portfolio-section").show();
        $(".about-section").hide();
        $(".contact-section").hide();
    })

    $("#contact").on("click", function() {
        $(".contact-section").show();
        $(".about-section").hide();
        $(".portfolio-section").hide();
    })

});

