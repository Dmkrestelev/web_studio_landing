function button_submite() {
    $('.b-popup').show();
    $('.b-popup').off('click').on('click', function () {
        $(this).hide();
    });
}