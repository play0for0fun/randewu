$(document).ready(function() {
    //aftermodal
    //$('<link rel=stylesheet type=text/css href=css/style.css><link rel="stylesheet" type="text/css" href="css/component.css" /><link rel="stylesheet" type="text/css" href="css/fxfullwidth.css" /><link rel="stylesheet" type="text/css" href="css/fxsmall.css" /><link rel="stylesheet" type="text/css" href="css/jquery.fancybox.min.css" />').appendTo('head');

    $('<script src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=0oO-C20hLSw9RHHiAwCdmxjpjYnTHDdQ&height=700" type="text/javascript" charset="utf-8"></script>').appendTo('#m6');

    $('input[name="phone"]').mask("(999) 999-99-99");
    $('input[name="phone"]').blur(function() {
        if ($(this).val().length != 15) {
            $(this).addClass('error13');
        }
    });
    $('input[name="phone"]').focus(function() {
        $(this).removeClass('error13');
    });
    $('input[name="name"]').blur(function() {
        if ($(this).val().length <= 2) {
            $(this).addClass('error13');
        }
    });
    $('input[name="name"]').focus(function() {
        $(this).removeClass('error13');
    });
    $('.mena,.s1go').click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 2000);
    });
    $('.s10btnps').click(function() {
        $('.md-overlay').trigger('click');
    });
    $('.s10btn').click(function(event) {
        if (!$(this).hasClass('s10btnps')) {
            if ($(this).parent().children('input[name="phone"]').val().length == 15 && $(this).parent().children('input[name="name"]').val().length > 2) {
                var $phone = $(this).parent().children('input[name="phone"]').val();
                var $name = $(this).parent().children('input[name="name"]').val();
                var $email = $(this).parent().children('input[name="email"]').val();
                $.ajax({
                    type: "post",
                    url: 'ajax/mail.php',
                    data: {
                        phone: $phone,
                        name: $name,
                        email: $email,
                    },
                    success: function() {
                        $('.md-overlay').trigger('click');
                        $('#hidden-btn').trigger('click');
                    }
                });
            } else {
                if ($(this).parent().children('input[name="phone"]').val().length != 15) {
                    $(this).parent().children('input[name="phone"]').addClass('error13');
                }
                if ($(this).parent().children('input[name="name"]').val().length <= 2) {
                    $(this).parent().children('input[name="name"]').addClass('error13');
                }
            }
        }
    });
    //aftercar
    $('.fancy').fancybox({
        maxWidth: '90%',
        maxHeight: '90%',
        padding: 1,
        helpers: {
            overlay: {
                locked: false
            }
        },
        afterShow: function() {
            $('.fancybox-wrap').swipe({
                swipe: function(event, direction) {
                    if (direction === 'left' || direction === 'up') {
                        $.fancybox.prev(direction);
                    } else {
                        $.fancybox.next(direction);
                    }
                }
            });

        },
    });
    $("#component2,#component3,#component4,#component5,#component6,#component7").swipe({
        //Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            event.preventDefault()
            if (direction == 'right') {
                if ($(this).hasClass('fxCoverflow')) {
                    $(this).find('nav .prev').trigger('click');
                } else {
                    $(this).find('nav .next').trigger('click');
                }
            }
            if (direction == 'left') {
                if ($(this).hasClass('fxCoverflow')) {
                    $(this).find('nav .next').trigger('click');
                } else {
                    $(this).find('nav .prev').trigger('click');
                }
            }
        },
        excludedElements: [],
        allowPageScroll: "vertical"
    });
});
