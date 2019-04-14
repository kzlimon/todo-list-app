// Checked off specific todos by clicking - means completed
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Click on Trash button to delete a todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// Creating todos by clicking on Enter key
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // new todo text from input
        var todoText = $(this).val();
        // delete typed text from input
        $(this).val("");
        //create a new li and add to ul
        $("ul").prepend("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

// Add edit icon toggle - hiding and showing input
$("#edit-icon").on("click", function () {
    $("input[type='text']").fadeToggle();
});