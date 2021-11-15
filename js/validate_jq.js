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
});