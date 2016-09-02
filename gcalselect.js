// ==UserScript==
// @name         Gcalselect
// @namespace    http://github.com/cswarth
// @version      0.3
// @description  make text in some google calendar pages selectable.
// @author       Chris Warth
// @include https://calendar.google.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// @run-at document-start
// ==/UserScript==

$(function () {
    "use strict";
    waitForKeyElements ("#gridcontainer", actionFunction);
    function actionFunction (jNode) {
        jNode.css ("-webkit-user-select", "text"); 
    }
});
