/*
id selector
$("#main-content").css({border: "5px solid green"});

class selector
$(".main-content").css({border: "5px solid green"});
*/

/* 
Filters
they always start with :

e.g
first and last
$("header nav li:first").css({border: "2px solid red"})
$("header nav li:last").css({border: "2px solid red"})

first child and last child
$("header nav ul:first").css({border: "2px sold red"})
$("header nav ul:last").css({border: "2px sold red"})

even and odd elements

not
$("section:not('#contact')").css({border: "2px sold red"})

less than and great than
$("'social-nav li: lt(3)").css({border: "2px sold red"})
$("'social-nav li: gt(2)").css({border: "2px sold red"})

attribute filters
$("div[class]".css({border: "2px sold red"})) - it takes all the fivs with class
# any attribute can be used but it must be inside [] and attribute can be specified by [class=quote]
*/

/*
Traverse the DOM with jQuery

next
$("#contact-methods").next().css({border: "4px solid red"});

prev
$("#social-nav").prev().css({border: "3px solid red"})

parent
$(".banner-title").parent().css({border: "3px solid green"})

Children
$("#contact-methods").children().css({border: "3px solid green"})

find
$("#contact").find("img").css({border: "3px solid green"})

closest
# closest goes up the dom
$("#social-nav").closest(".wrapper").css({border: "3px solid green"})

*/

/*
jQuery Chaining
to chain two or more commands together
$("#contact-methods").css({border: "2px solid green"}).next().css({border: "2px solid black"})
*/

/*
Adding content to the DOM

var tweet = "<h1>Hello world!</h1>"

$("#tweets div").append(tweet) - add at the bottom of variable
$("#tweets div").prepend(tweet) - add at the top of variable
$("#tweets div").before(tweet) - add before variable
$("#tweets div").after(tweet) - add after variable
$("#tweets div").html(tweet) - will remove all the content and replace with variable content
*/


/*
Wrap and unwrap elements

wrap() - wraps all matched elements individually
upwrap() - unwrap all matched elements
wrapAll() - wraps all elements combined with 1 single elements

$("section").wrap("<div>");

*/

/*
removing content from dom

.empty() - empties the inner HTML of an element
.remove() - removes the element completely

$(".button").empty()
$(".button").remove()
*/


/*
changing attributes

.removeAttr() removes an attribute completely
.attr() can read or set any attribute

$("#contact img").removeAttr("alt");
$("#contact img").attr("alt", "location");

*/

/*
controling CSS with Jquery

$(".button").css({"top": "-400px", "left": "150px", "opacity": ".5", "border-top": "5px solid green"})

*/

/*

Adding & removing classes

removeClass() - removes the class
addClass() - adds a new class
toggleClass - **toggles the class on and off**

$(".wrapper").removeClass();

*/

/*
Event binding

on() - binds an event to matched element
off() - unbinds event

var mylist = $("#points-of-sale li");

mylist.on("click", function(){
    
    $(this).css({"background": "red" })

    mylist.off("click")
})

*/

/*
event helpers

$("#lead-banner").click(function(){
    alert("Clicked me");
})

*/

/*
document ready vs window load

$(document).on("ready", function(){
    **write function here**
})

above command can be writte as 
$(function(){})

$(window).on("load", function(){
    **once the window is loaded inc all images**
})

*/

/*
Event object in jQuery

$(document).ready(function(){
    
    $("*").on("click", function(e){
        console.log("the event type is " + e.type);
        console.log("X coodinate on the page is " + e.pageX);
        console.log("Y coodinate on the page is " + e.pageY);
    })
})

*/

/*
Animations in jQuery

$(document).ready(function(){
    $("section > h2").on("click", function(){
        $(this).animate({"height":"100px", "width":"200px"}, 1000)
    })
})
*/

/*
Fading elements IN & OUT

$(document).ready(function(){
    $("section > h2").on("click", function(){
        $(this).fadeOut(2000).fadeIn(500);
    })
})

$(document).ready(function(){
    $("section > h2").on("click", function(){
        $(this).fadeTo(1000, 0.2)
    })
})
*/

/*
Hide, show and toggle

$(document).ready(function(){
    $("section > h2").on("click", function(){
        $(this).hide(1000).show(1000);
    })
})

$(document).ready(function(){
    $("section > h2").on("click", function(){
        $(this).toggle(1000).toggle(1000);
    })
})
*/

/*
Sliding elements

$(document).ready(function(){
    $(".slide-up-btn").on("click", function(){
        $("#lead-banner").slideUp();
    })

    $(".slide-up-btn").on("click", function(){
        $("#lead-banner").slideDown();
    })
})
*/

/*
fading animation exmaple

$(document).ready(function(){
    var allQuotes = $("blockquote");
    var currentQuote = 0;

    function changeQuote(){
        $(allQuotes[currentQuote]).fadeOut(200, function(){
            if(currentQuote == allQuotes.length - 1){
                currentQuote = 0;
            } else {
                currentQuote++;
            }
            $(allQuotes[currentQuote]).fadeIn(200);
        });
    }
    var setTimer = setInterval(changeQuote, 2000);
})

*/

/*
Sliding animation exmaple

$(document).ready(function(){

    var items = $("#points-of-sale li");

    items.on("click", function(){
        $(this).find("p").slideToggle(500)
    });
})


*/

/*
jQuery Plugins

*/

/*

*/
$(document).ready(function(){
    $(".rslides").responsiveSlides();
})