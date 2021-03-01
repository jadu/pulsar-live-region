export default class LiveRegion {
    /**
     * @constructor
     * @param {jQuery} $html jQuery wrapper of the html node
     *
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
     * These elements must use the `role` and `aria-live` attributes seen below.
     *
     * Example HTML:
     *  <div role="status" class="hide js-live-region-polite" aria-live="polite"></div>
     *  <div role="alert" class="hide js-live-region-assertive" aria-live="assertive"></div>
     *
     * Note - these elements should be hidden in a screen reader friendly manner.
     * Classes or inline style with display: none should not be used to avoid breaking
     * live regions in certain screen readers
     *
     * @example
     *  liveRegion.init({
     *      assertiveContainer: '.js-live-region-assertive',
     *      politeContainer: '.js-live-region-polite'
     * })
     * @param {Object} options
     */
    init (options = {}) {
        if (typeof this.$html === 'undefined' || !this.$html.length) {
            throw new Error('$html must be passed to LiveRegion');
        }

        if (typeof options.assertiveContainer === 'undefined') {
            throw new Error('LiveRegion must be supplied with an assertive container');
        } else {
            this.assertiveContainer = options.assertiveContainer;
        }

        if (typeof options.politeContainer === 'undefined') {
            throw new Error('LiveRegion must be supplied wtih a polite container');
        } else {
            this.politeContainer = options.politeContainer;
        }
    }

    /**
     * Populate the assertive container with a message
     *
     * @param {string} content
     */
    assertive (content) {
        const $assertiveContainer = this.$html.find(this.assertiveContainer);
        $assertiveContainer.text(content);

        // Clear the text shortly after updating to make screen readers re-announce
        // if the same text is added again
        // Note: 150 seems to be the sweet spot, any lower and it doesn't work in VO
        setTimeout(() => {
            $assertiveContainer.text('');
        }, 150);
    }

    /**
     * Populate the polite container with a message
     *
     * @param {string} content
     */
    polite (content) {
        const $politeContainer = this.$html.find(this.politeContainer);
        $politeContainer.text(content);

        setTimeout(() => {
            $politeContainer.text('');
        }, 150);
    }
}
