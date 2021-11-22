$(document).ready(function (){
    $('#reg_submit').click(function (){
        $.ajax({
            type: 'POST',
            data: {
                name:$('#name').val(),
                surname: $('#surname').val(),
                password:$('#password').val(),
                email:$('#email').val()

            },
            url: "../php/validation_reg.php",
            dataType: 'json',
            async: false})

    })
});