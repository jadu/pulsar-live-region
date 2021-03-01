import $ from 'jquery';
import LiveRegion from './src/LiveRegion';

$(function () {
    const liveRegion = new LiveRegion($('html'));

    liveRegion.init({
        assertiveContainer: '.js-live-region-assertive',
        politeContainer: '.js-live-region-polite'
    });

    $('.js-trigger-polite').on('click', () => liveRegion.polite('this is a polite annoucement'));
    $('.js-trigger-assertive').on('click', () => liveRegion.assertive('this is an assertive annoucement'));
});
