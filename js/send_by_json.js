$(document).ready(function() {
    $("#formR").validate({
        rules: {
            name : {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            }

        },
        messages:{
            name: {
                required:"this field is requer",
                minlength: "min leg 3"
            },
            email: {
                required: "Email is missing",
                email: "Enter correct email_JQ"
            }
        }
    });
    $('#reg_submit').click(function (){

        $.post("../php/validation_reg.php",
            {name:$('#name').val(), surname: $('#surname').val(),
                password:$('#password').val(), email:$('#email').val()})

    })

});



$(document).ready(function (){
    $('#reg_submit').click(function (e) {
        e.preventDefault()
        if ($('#reg_submit').valid()) {
            send(e);
        }
    });
});

function send() {
    $.ajax({
        url: "http://localhost/php/validation_reg.php",
        dataType: 'json',
        type: 'POST',
        data: {
            name: $('#name').val(),
            surname: $('#surname').val(),
            password: $('#password').val(),
            email: $('#email').val()
        }
        ,
        success(data){
            window.location.replace("../html/welcome.html")}


    });
}

