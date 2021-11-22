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

        $.post("validation_reg.php",
            {name:$('#name').val(), surname: $('#surname').val(),
                password:$('#password').val(), email:$('#email').val()})

    })

});



