// ==UserScript==
// @name         sfgate adblock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include https://*sfgate.com/*
// @include http://*sfgate.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    function remove (nodes) {
        nodes.each(function() {
            $(this).remove();
        });
    }
        $("#slashboxes").remove();

    waitForKeyElements ("div.asset-media", remove);
    waitForKeyElements ("div#subHead", remove);
    waitForKeyElements ("nav#siteNav", remove);
    waitForKeyElements ("div#ctpl-fullbanner1", remove);
    waitForKeyElements ("span#ctpl-fullbanner-spacer", remove);
    waitForKeyElements ("span#site-nav-spacer", remove);
    waitForKeyElements ("span#subHead-spacer", remove);


})();
