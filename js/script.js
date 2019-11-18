$(".line").on("click", function () {
    $(".line").toggleClass("show");
    $(".list-items").toggleClass("show-menu");
});
$(".list-items a").on("click", function () {
    $(".list-items").removeClass("show-menu");
    $(".line").removeClass("show");
});
