
jQuery(function($) {
    $('.ddlc').mouseover(function() {
        if ($(this).is(':animated')) {return;}
            $(this).animate({ bottom: "+=60" }, {duration: 120, easing: "easeOutQuart"})
            .animate({ bottom: "-=60" }, {duration: 150, easing: "easeInSine"});
            console.log(`h`)
        });
    });
