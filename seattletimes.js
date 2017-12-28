// ==UserScript==
// @name         seattletimes
// @include http://*seattletimes.com/*
// @include https://*seattletimes.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js
// @run-at document-end
// ==/UserScript==

$(function () {
    "use strict";

    SEATIMESCO.ads.disabled = true;
    SEATIMESCO.browser.adBlock.detectionEnabled = false;
    SEATIMESCO.userMessaging = {};
});
