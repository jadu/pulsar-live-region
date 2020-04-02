/**
 * Pulsar Live Region Service
 */

'use strict';

import $ from 'jquery';

class LiveRegion {

    /**
     * @constructor
     * @param {jQuery} $html jQuery wrapper of the html node
     */
    constructor ($html) {
        this.$html = $html;
        this.assertiveContainer;
        this.politeContainer;
    }

    /**
     * Initalise the Live Region component
     * 
     * A polite container and an assertive container must be present in the DOM on load.
     * 
     * Example HTML:
     *  <div role="region" class="js-live-region-polite" aria-live="polite" style="display: none;"></div>
     *  <div role="region" class="js-live-region-assertive" aria-live="assertive" style="display: none;"></div>
     * 
     * Example usage: 
     *  liveRegion.init({
     *      assertiveContainer: '.js-aria-live-assertive',
     *      politeContainer: '.js-aria-live-polite'
     * })
     */
    init (options = {}) {
        let _self = this;

        if (typeof _self.$html === 'undefined' || !_self.$html.length) {
            throw new Error('$html must be passed to LiveRegion');
        }

        if (typeof options.assertiveContainer === undefined) {
            throw new Error('LiveRegion must be supplied with an assertive container');
        } else {
            _self.assertiveContainer = options.assertiveContainer;
        }

        if (typeof options.politeContainer === undefined) {
            throw new Error('LiveRegion must be supplied wtih a polite container');
        } else {
            _self.politeContainer = options.politeContainer;
        }
    }

    /**
     * Populate the assertive container with a message
     * 
     * @param {string} content 
     */
    assertive (content) {
        this.$html.find(this.assertiveContainer).text(content);
    }

    /**
     * Populate the polite container with a message
     * 
     * @param {string} content 
     */
    polite (content) {
        this.$html.find(this.politeContainer).text(content);
    }

}

module.exports = LiveRegion;
