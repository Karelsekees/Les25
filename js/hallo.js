
$("#knop").click(function() {
var naam = $("#idTekstveld").val();
window.alert("Dag " + naam);
});

$("#verberg").click(function() {
    $("#t_v").hide();
    });
    $("#toon").click(function() {
    $("#t_v").show();
    });

$(function() {
    $("#accordion").accordion();
    });