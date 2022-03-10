function instruction(){
alert("Instructions\n"+"1. Click the plus icon to add a task\n"+"2. After typing task in input box, press enter\n"+"3. To delete a task click the minus icon which appears on hover\n"+"4. If the task is completed click on the task\n"+"5. To reassign priority of task, drag and drop");
}
$("input[type='text'").keypress(function (e) { 
    if (event.which===13) {
        var addTask=$(this).val();
        $('ul').append('<li><span><i class="fas fa-minus-circle"></i></span> '+addTask+'<i class="fas fa-bars"></li>');
        $('input[name=add]').val('');
    }
});
$('ul').on('click','li', function () {
    $(this).toggleClass('completed');
});
$('ul').on('click','span',function () { 
    $(this).parent().fadeOut(function()
    {
        $(this).remove();
    });        
});
$('.fa-plus').click(function (e) { 
    
    $("input[type='text'").fadeToggle(); 
});
const dragArea=document.querySelector(".drag");
new Sortable(dragArea,{
    animation: 350
});