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