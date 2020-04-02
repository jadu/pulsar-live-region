'use strict';

import $ from 'jquery';
import LiveRegion from '../../src/LiveRegion';

describe('LiveRegion', () => {
    let $html,
        $body,
        liveRegion,
        liveRegionWithoutHTML;

    beforeEach(() => {
        $html = $('<div></div>');
        $body = $(`<body>
        <div role="region" class="js-live-region-polite" aria-live="polite">wut</div>
        <div role="region" class="js-live-region-assertive" aria-live="assertive"></div>
        </body>`).appendTo($html);

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
    });

});
