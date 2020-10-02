var cursor_timeout = 1100;
var cursor_timeout_before_adding_new_class = 400;
var first_text = '';

jQuery(document).ready(function () {
    if (jQuery('.hero-alternate').length > 0) {
        //var first_text = jQuery('.hero-alternate__text-wrapper').html();
        first_text = '<span class="hero-alternate__title">he Test Case <br/><br/></span><span class="hero-alternate__words">Rocket-strap your new venture 🚀 </span>';
        jQuery('.hero-alternate__text-wrapper').html('');
        /*
        var start_text = '<span class="hero-alternate__title"><span>A</span>';
        start_text += '<span class="typed-cursor typed-cursor--blink cursor-type-2" data-cursor-number="2">|</span>';
        start_text += '</span>'; 
        jQuery('.hero-alternate__text-wrapper').html(start_text);
        */
        var options = {
            strings: [],
            typeSpeed: 50,
            showCursor: true,
            cursorChar: "|",
            preStringTyped: function () {
                jQuery('.hero-alternate__text-wrapper').html('');
            },
            onComplete: function () {
                change_cursor();
            }
        };
        
        jQuery('span.typed-cursor').addClass('cursor-type-1');
        jQuery('span.typed-cursor').attr('data-cursor-number', 1);

        window.setTimeout(function () {
            change_cursor();
        }, 1);
        
        /*
        window.setTimeout(function () {
            
            jQuery('.second-cursor').remove();
            
           // var typed = new Typed(".hero-alternate__text-wrapper", options);
            jQuery('span.typed-cursor').addClass('cursor-type-2');
            jQuery('span.typed-cursor').attr('data-cursor-number', 1);

        }, 3000); */
    }
});

var run_typed = false;
var finished = false;

function change_cursor()
{
    var cursor = jQuery('span.typed-cursor');
    var number = Number(cursor.attr('data-cursor-number'));
    cursor.removeClass('cursor-type-' + number);
    number++;
    if (number > 4)
    {
        number = 1;
    }
    cursor.attr('data-cursor-number', number);

    window.setTimeout(function () {
        add_new_cursor_class();
    }, cursor_timeout_before_adding_new_class);
}

function add_new_cursor_class()
{
    var cursor = jQuery('span.typed-cursor');
    var number = Number(cursor.attr('data-cursor-number'));
    cursor.addClass('cursor-type-' + number);

    var run_timeout = true;
    //console.log(number);
    if (number == 2)
    {
        if (run_typed == false)
        {
            //Start typing
            window.setTimeout(function () {
                start_typing();
            }, 500);
            run_timeout = false;
            run_typed = true;
        }
    }
    if (run_timeout)
    {
        window.setTimeout(function () {
            change_cursor();
        }, cursor_timeout);
    }
}

//Runs once the typing has stopped
function change_cursor_initial()
{
    var cursor = jQuery('span.typed-cursor');
    var number = Number(cursor.attr('data-cursor-number'));
    cursor.removeClass('cursor-type-' + number);
    number++;
    if (number > 4) {
        number = 1;
    }
    cursor.attr('data-cursor-number', number);

    window.setTimeout(function () {
        add_new_cursor_class();
    }, cursor_timeout_before_adding_new_class);
}

function start_typing()
{
    jQuery('.second-cursor').remove();

    var options = {
        strings: [],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: "|",
        preStringTyped: function () {
            jQuery('.hero-alternate__text-wrapper').html('');
        },
        onComplete: function () {

            window.setTimeout(function () {
                change_cursor_initial();
            }, 500);
        }
    };

    options.strings = [first_text];

    var typed = new Typed(".hero-alternate__text-wrapper", options);
    jQuery('span.typed-cursor').addClass('cursor-type-2');
    jQuery('span.typed-cursor').attr('data-cursor-number', 2);
}