// check off specific todos by clicking - logic code
// $("li").on("click", function () {
//     //if color is gray
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         //turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     //else
//     else {
//         //turn it gray
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// });

// check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// click on X to delete a todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// creating todos by clicking on enter key
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // new todo text from input
        var todoText = $(this).val();
        // delete typed text from input
        $(this).val("");
        //create a new li and add to ul
        $("ul").prepend("<li><span>X</span> " + todoText + "</li>");


    }
});