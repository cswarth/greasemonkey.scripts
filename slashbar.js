
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
// ==UserScript==
// @name         Slashbar
// @namespace    http://github.com/cswarth
// @version      0.3
// @description  remove sidebars from slashdot.org
// @author       Chris Warth
// @include http://*slashdot.org/*
// @include https://*slashdot.org/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js 
// @run-at document-start
// ==/UserScript==

$(function () {
    "use strict";

    var main = $(".has-rail-right");
    if (main) {
        main.removeClass("has-rail-right");
    }
    $("#slashboxes").remove();
});
