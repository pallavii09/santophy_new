$("#btn_contact_submit").click(function(){

    $('#contact-form').validate({ // initialize the plugin
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true
            },
            mobile: {
                required: true,
                digits: true,
                minlength : 4,
                maxlength : 14
            },
            message: {
                required: true,
                minlength : 50
            }
        },
        submitHandler: function (form) {

        $('#btn_contact_submit').attr('disabled', 'disabled').html('Please Wait ...');
            $.ajax({
               type: "POST",
               url: "/contact_us/",
               data: $("#contact-form").serialize(), // serializes the form's elements.
               success: function(data)
               {


                   if (data == 1)
                   {
                      $('.alert-info').show();
                       $('.alert-warning').hide();
                       $('.form-control').val("");

                   }
                   //if (data == 2)
                   else
                   {
                       $('.alert-warning').show();
                       $('.alert-info').hide();

                   }
                   $('#btn_contact_submit').removeAttr('disabled').html('Send Message');

               }
             });
        }
    });



});