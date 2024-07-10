/*
Name: 			Analytics
Written by: 	Okler Themes - (http://www.okler.net)
*/

(function($) {

	'use strict';

	// Home Overview
	$('#homeOverview a').on('mousedown', function() {
		ga('send', 'event', 'overview', 'click', $(this).attr('href').replace(/.html/g, ""));
	});

	// Home Overview
	$('#mainNav > li:first a').on('mousedown', function() {
		ga('send', 'event', 'nav', 'click', $(this).attr('href').replace(/.html/g, ""));
	});

}).apply(this, [jQuery]);