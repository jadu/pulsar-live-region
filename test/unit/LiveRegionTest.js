'use strict';

import $ from 'jquery';
import LiveRegion from '../../src/LiveRegion';

describe('LiveRegion', () => {
    let $html,
        $body,
        liveRegion,
        liveRegionWithoutHTML,
        clock;

    beforeEach(() => {
        $html = $('<div></div>');
        $body = $(`<body>
        <div role="status" class="js-live-region-polite" aria-live="polite">wut</div>
        <div role="alert" class="js-live-region-assertive" aria-live="assertive"></div>
        </body>`).appendTo($html);

        clock = sinon.useFakeTimers();

        liveRegion = new LiveRegion($html);
    });

    afterEach(() => {
        $body.empty();
    });

    describe('init()', () => {
        it('should throw an error if $html isn’t passed to the component', () => {
            liveRegionWithoutHTML = new LiveRegion();

            expect(() => {
                liveRegionWithoutHTML.init();
            }).to.throw('$html must be passed to LiveRegion');
        });

        it('should throw an error if an assertiveContainer is not passed to init()', () => {
            expect(() => {
                liveRegion.init({
                    something: '.js-live-region-assertiveXXX',
                    politeContainer: '.js-live-region-polite'
                });
            }).to.throw('LiveRegion must be supplied with an assertive container');
        });

        it('should throw an error if an politeContainer isn’t passed to init()', () => {
            expect(() => {
                liveRegion.init({
                    assertiveContainer: '.js-live-region-assertive',
                    something: '.js-live-region-polite'
                });
            }).to.throw('LiveRegion must be supplied wtih a polite container');
        });
    });

    describe('The polite method', () => {
        beforeEach(() => {
            liveRegion.init({
                assertiveContainer: '.js-live-region-assertive',
                politeContainer: '.js-live-region-polite'
            });

            liveRegion.polite('foo');
        });

        it('should populate the polite container', () => {
            expect($html.find('.js-live-region-polite').text()).to.equal('foo');
        });

        it('should not remove the text from the polite container before 150ms', () => {
            clock.tick(149);

            expect($html.find('.js-live-region-polite').text()).to.equal('foo');
        });

        it('should remove the text from the polite container after 150ms', () => {
            clock.tick(150);

            expect($html.find('.js-live-region-polite').text()).to.equal('');
        });
    });

    describe('The assertive method', () => {
        beforeEach(() => {
            liveRegion.init({
                assertiveContainer: '.js-live-region-assertive',
                politeContainer: '.js-live-region-polite'
            });

            liveRegion.assertive('bar');
        });

        it('should populate the assertive container', () => {
            expect($html.find('.js-live-region-assertive').text()).to.equal('bar');
        });

        it('should not remove the text from the assertive container before 150ms', () => {
            clock.tick(149);

            expect($html.find('.js-live-region-assertive').text()).to.equal('bar');
        });

        it('should remove the text from the assertive container after 150ms', () => {
            clock.tick(150);

            expect($html.find('.js-live-region-assertive').text()).to.equal('');
        });
    });
});
