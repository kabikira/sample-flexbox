$(document).ready(function() {
    $("#formBtn").hide();
    updateButtonVisibility();

    $(window).scroll(function() {
        updateButtonVisibility();
    });

    function updateButtonVisibility() {
        var btnBlockTop = $("#btnBlock").offset().top;
        var btnBlockBottom = btnBlockTop + $("#btnBlock").outerHeight();
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (btnBlockBottom < scrollTop || btnBlockTop > scrollTop + windowHeight) {
            // #btnBlockが画面上に見えていない場合
            $("#formBtn").fadeIn();
        } else {
            // #btnBlockが画面上に見えている場合
            $("#formBtn").fadeOut();
        }
    }
});
