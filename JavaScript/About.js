$(document).ready(function() {
    $("#text1").hide(); /*hiding at first the contact text */
    $("#btn1").on("click", function() { /*with click on btn contact text will show up*/
        $("#text1").toggle(); /*toggle make working back all, with click showing will hidding */
    })
});
$(document).ready(function() {
    $("#text2").hide();
    $("#btn2").on("click", function() {
        $("#text2").toggle();
    })
});
$(document).ready(function() {
    $("#text3").hide();
    $("#btn3").on("click", function() {
        $("#text3").toggle();
    })
});
$(document).ready(function() {
    $("#text4").hide();
    $("#btn4").on("click", function() {
        $("#text4").toggle();
    })
});