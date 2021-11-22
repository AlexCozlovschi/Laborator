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
            url: "http://localhost/php/validation_log.php",
            dataType: 'json',
            async: false
        });

    })
});