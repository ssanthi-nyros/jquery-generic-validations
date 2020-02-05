//--------GENERIC VALIDATIONS USING JQUERY_------------------
$(document).ready(function() {

    // ...............textbox validation--------------------

    $('input[type = "text"]').focus(function() {

        if (this.value.length == 0) {
            $(this).siblings("span").hide();

            $(this).after("<span class = 'validatemsg'  style='color:red'>This is the required field</span>");
        }
    });


    $('input[type = "text"]').on('keyup', function() {

        var minLength = 2

        var texlen = (this).value.length;

        var texval = (this).value;

        var texreg = /^[a-z\.\s-]{2,}$/;

        if (texlen == 0) {

            $(this).siblings("span").hide();

            $(this).after("<span class = 'validatemsg'  style='color:red'>This is the required field</span>");
            return false;
        } else if (texlen <= minLength) {

            $(this).siblings("span").hide();

            $(this).after("<span class = 'validatemsg'  style='color:red'>minimum 2 characters</span>");
            return false;
        } else if (texreg.test(texval) == false && texlen >= minLength) {

            $(this).siblings("span").hide();

            $(this).after("<span class = 'validatemsg'  style='color:red'>only characters are allowed </span>");
            return false;
        } else if (texreg.test(texval) == true && texlen >= minLength) {

            $(this).siblings("span").hide();

            $(this).after("<span></span>");
            return true;
        }

    });


    //----------end of textbox validation--------------------



    ///------email validation----------------


    $('input[type = "email"]').focus(function() {


        if (this.value.length == 0) {
            $(this).siblings("span").hide();

            $(this).after("<span class = 'validatemsg'  style='color:red'>This is the required field</span>");
        }
    });



    $('input[type = "email"]').on('keyup', function() {


        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emaillen = this.value.length;
        var emailval = (this).value;


        if (emaillen == 0) {

            $(this).siblings("span").hide();

            $(this).after("<span class = 'validatemsg'  style='color:red'>This is the required field</span>");
            return false;
        } else if (emaillen > 0 && emailReg.test(emailval) != true) {
            $(this).siblings("span").hide();
            $(this).after("<span class = 'validatemsg'  style='color:red'>please enter valid email</span>");
            return false;
        } else if (emailReg.test(emailval) == true) {
            $(this).siblings("span").hide();
            $(this).after("<span > </span>");
            return true;
        }
    });



    //----------email validation end----------------------




    //-------- phone number validation------------

    $('input[type = "tel"]').focus(function() {

        input = $(this);
        if (this.value.length == 0) {
            $(this).siblings("span").hide();

            $(this).after("<span class = 'validatemsg'  style='color:red'>This is the required field</span>");
        }
    });




    $('input[type = "tel"]').on('keyup', function() {

        var mobilelen = (this).value.length;

        var mobileval = (this).value;

        var mobilereg = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;

        if (mobilelen == 0) {

            $(this).siblings("span").hide();

            $(this).after("<span class = 'validatemsg'  style='color:red'>This is the required field</span>");
            return false;
        } else if (mobilereg.test(mobileval) == false) {

            $(this).siblings("span").hide();

            $(this).after("<span  class = 'validatemsg'  style='color:red'>please enter a valid number </span>");
            return false;
        } else if (mobilereg.test(mobileval)) {

            $(this).siblings("span").hide();

            $(this).after("<span> </span>");
            return true;
        }
    });


    //-----------mobile number validation end----------------




    //-------------on click submit button --------------------



    $("form button").on('click', function() {

        var count = 1;

        $("input").each(function() {

            if (this.type == "text") {

                var texval = this.value;

                var texlen = texval.length;

                if (texlen == 0 || texlen <= 3) {

                    this.focus();
                    return false;
                }
            } else if (this.type == "email") {

                var emailval = this.value;


                if (emailval == 0) {

                    this.focus();


                    return false;
                }
            } else if (this.type == "tel") {

                var mobileval = this.value;


                if (mobileval == 0) {

                    this.focus();


                    return false;
                }
            }


        });
        if (count == 0)
            return false;

        else if (count == 1) {
            return true;
        }
    });

});