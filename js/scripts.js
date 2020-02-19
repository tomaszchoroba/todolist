// Chech Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabing new todo text from input
        var todoText = $(this).val();
        //clear input
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

//plus sign
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});