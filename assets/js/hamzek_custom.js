$(window).bind('scroll', function() {
    // var navHeight = $( window ).height() - 70;
    if ($(window).scrollTop()) {
        $('.nav-fix').addClass('fixed');
        $("#home_logo_white").css("display", "block");
        $("#home_logo_hash").css("display", "none");
    } else {
        $("#home_logo_white").css("display", "none");
        $("#home_logo_hash").css("display", "block");
        $('.nav-fix').removeClass('fixed');
    }
});

function openNav() {
    // document.getElementById("mySidenav").style.transform = "translateX(0%)";
    $("#mySidenav").css("transform", "translateX(0%)");
    $('body').css({ overflow: "hidden", opacity: "0.8" });
}

function closeNav() {
    $("#mySidenav").css("transform", "translateX(-100%)");
    $('body').css({ overflow: "auto", opacity: "9" });
}

$(document).ready(function() {

    // anchor click smooth scrolling
    $("a").on('click', function(event) {
        $("#mySidenav").css("transform", "translateX(-100%)");
        $('body').css({ overflow: "auto", opacity: "9" });
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });

    $(".navbar-header a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });
    
    // $(".dot-text-inactive").on('click', function() {
    //     console.log("class toggle,", this)
    // });

    $('.product-arc span').on('click', function(e){
        console.log($(this).hasClass("dot-two"))
        $('.product-arc span.dot-text-active').removeClass('dot-text-active');
        $(this).addClass('dot-text-active');
        if ($(this).hasClass("dot-two")) {
            $("#truaglo_product").css("display", "block");
        }else{
            $("#truaglo_product").css("display", "none");
        }

        if ($(this).hasClass("dot-one")) {
            $("#trutalks_product").css("display", "block")
        }else{
            $("#trutalks_product").css("display", "none")
        }

        if ($(this).hasClass("dot-three")) {
            $("#stuzee_procuct").css("display", "block");            
        }else{
            $("#stuzee_procuct").css("display", "none");
        }
    });

    $('input[name="emails"]').keyup(function() {
        validateEmailEmpty();
        validateEmail($mailval);
    });

    $('input[name="names"]').keyup(function() {
        validateNameEmpty();
        validateName($nameval);
    });

    $('input[name="numbers"]').keyup(function() {
    validateNumEmpty();
    validateNumber($numval);        
    });

    $('input[name="company"]').keyup(function() {
        validateCompanyEmpty();
        validateCompanyname($companyval);
    });

    $('textarea[name="comments"]').keyup(function() {
        validateCommentEmpty();
    });
});
function validateForm() {
    console.log("onclicked")
    var nameval = $('#nameval').val();
    var companyval = $('#companyeval').val();
    var emailval = $('#emailval').val();
    var numval = $('#numval').val();
    $commentval = $("#commentval").val();

    if (nameval == "" || nameval == null) {
        validateNameEmpty();
        $(window).scrollTop(0);
        return false;
    }
    if (companyval === "" || companyval === null) {
        validateCompanyEmpty();
        $(window).scrollTop(0);
        return false;
    }
    if (emailval === "" || emailval === null) {
        validateEmailEmpty();
        $(window).scrollTop(0);
        return false;
    }
    if (numval === "" || numval === null) {
        validateNumEmpty();
        $(window).scrollTop(0);

        return false;
    }
    if ($commentval.length === 0 || $commentval === "" || $commentval === null) {
        validateCommentEmpty();
        $(window).scrollTop(0);
        return false;
    }

    return $(".form-success").show();
}

function validateEmail($email) {
    console.log("validating");
        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (emailReg.test($mailval)) {
            $("#email-valid-error").hide();
        } else {
            $("#email-error").hide();
            $("#email-valid-error").show();
        }
    }

    function validateName($nameval) {
        var alphaExp = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        if (!$nameval.match(alphaExp)) {
            $("#name-error").hide();
            $("#name-characters-error").show();

        } else {
            $("#name-characters-error").hide();
        }
    }

    function validateNumber($numval) {
        var regx = /^[0-9+()\s]*$/;

        if ($numval.match(regx)) {
            $('#number-numberonly-error').hide();
        } else {
            $('#number-numberonly-error').show();
            $("#number-error").hide();
        }
    }
    function validateCompanyname($companyval) {
        var regx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

        if ($companyval.match(regx)) {
            $('#company-name-specialchar-error').hide();
        } else {
            $('#company-name-specialchar-error').show();
            $('#company-name-error').hide();
        }
    }

    function validateEmailEmpty(){

        $mailval = $('#emailval').val();
        if ($mailval == "" || $mailval == null) {
            $('#email-error').show();
            console.log("empty");
        } else {
            $('#email-error').hide();
        }
    }

    function validateNameEmpty(){
        $nameval = $('#nameval').val();
        if ($nameval == "" || $nameval == null) {
            $('#name-error').show();
        } else {
            $('#name-error').hide();
        }
    }

    function validateNumEmpty(){
        $numval = $('#numval').val();
        if ($numval == "" || $numval == null) {
            $('#number-error').show();
        } else {
            $('#number-error').hide();
        }
    }

    function validateCompanyEmpty(){
        $companyval = $('#companyeval').val();

        if ($companyval == "" || $companyval == null) {
            $('#company-name-error').show();
        } else {
            $('#company-name-error').hide();
        }
    }

    function validateCommentEmpty(){
        $commentval = $('#commentval').val();

        if ($commentval == "" || $commentval == null) {
            $('#comment-error').show();
        } else {
            $('#comment-error').hide();
        }
    }