$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function() {
    $(".toggle").click(function(e) {
        e.preventDefault();
        $(".toggle").toggleClass("active");
        $(".pre-hide").toggleClass("active");
        $(".post-hide").toggleClass("active");
        $(".sub").toggleClass("active");
    });
    $(".mobile-menu, .menu-close, .menu-bg-close").click(function(e) {
        e.preventDefault();
        $(".mobile-menu").toggleClass("active");
        $(".menu-close").toggleClass("active");
        $(".menu-bg-close").toggleClass("active");
        $(".menu-bg").toggleClass("active");
        $(".menu-list").toggleClass("active");
        $("body").toggleClass("freeze");
    });
    $(".menu-close, .menu-bg-close").click(function(e) {
        e.preventDefault();
        $(".toggle-mobile").removeClass("active");
        $(".pre-mob").removeClass("active");
        $(".post-mob").removeClass("active");
        $("li.sub").removeClass("active");
    });
    $(".toggle-mobile").click(function(e) {
        e.preventDefault();
        $(".toggle-mobile").toggleClass("active");
        $(".pre-mob").toggleClass("active");
        $(".post-mob").toggleClass("active");
        $("li.sub").toggleClass("active");
    });
});

$(window).on("scroll", function() {
    if ($('.footer').isInViewport()) {
        $(".social").addClass("non-sticky");
    } else {
        $(".social").removeClass("non-sticky");
    };

});

$.fn.visible = function(partial) {

    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

(jQuery);

$(window).scroll(function(event) {

    $(".load").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("loaded");
            el.removeClass("load");
        }
    });

});