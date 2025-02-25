$(document).ready(function () {
    $(".simple dt").on("click", function() {
        let nextSibling = $(this).next("dd");

        if (nextSibling.is(":visible")) {
            nextSibling.slideUp(500);
        } else {
            nextSibling.slideDown(500)
                .siblings("dd").slideUp(500);
        }
    });
});



