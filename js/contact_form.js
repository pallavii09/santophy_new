$(document).ready(function() {
    $('#contactForm').submit(function(e) { // catch the form's submit event
        e.preventDefault();
        $("#btnSubmit").attr("disabled", true);
        $.ajax({
            data: $(this).serialize(), // get the form data
            type: $(this).attr('method'), // GET or POST
            url: $(this).attr('action'), // the file to call
            success: function (data) {
                if (data.success) {
                    // $("#successMsg").html(data.message);
                    toastr.success(data.message)
                }else{
                    // $("#errorMsg").html(data.message);
                    toastr.error(data.message)
                }
                $("#btnSubmit").attr("disabled", false);
            },
            error: function(data) {
                toastr.error(data.message);
                $("#btnSubmit").attr("disabled", false);
            }
        });
        return false;
    });
});
