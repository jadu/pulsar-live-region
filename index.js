const $ = require('jquery');
const LiveRegion = require('./src/LiveRegion');

$(function () {
    const liveRegion = new LiveRegion($('html'));

    liveRegion.init({
        assertiveContainer: '.js-live-region-assertive',
        politeContainer: '.js-live-region-polite'
    });

    $('.js-trigger-polite').on('click', function () {
        liveRegion.polite('this is a polite annoucement');
    });

    $('.js-trigger-assertive').on('click', function () {
        liveRegion.assertive('this is an assertive annoucement');
    });

});