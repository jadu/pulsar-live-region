<h1>Live Region</h1>

Simple methods for updating a live region to communicate state changes to assistive technologies.

<h2>Example implementation</h2>

The Live Region component needs two containers to be placed in the DOM on page load, these are then populated by the methods detailed below.

```
<div role="region" class="js-live-region-polite hide" aria-live="polite"></div>
<div role="region" class="js-live-region-assertive hide" aria-live="assertive"></div>
```

<h3>Styles</h3>

This example uses Pulsar's `.hide` class, which is a screenreader-friendly hiding method which allows the region changes to still be announced.

<h3>JavaScript</h3>

The component should be initialised with references to the required containers.

```
liveRegion.init({
    assertiveContainer: '.js-live-region-assertive',
    politeContainer: '.js-live-region-polite'
});
```

<h2>Usage</h2>

There are two methods `polite()` and `assertive()`.

```
$('.example-polite-trigger').on('click', function () {
    liveRegion.polite('this is a polite annoucement');
});

$('.example-assertive-trigger').on('click', function () {
    liveRegion.assertive('this is an assertive annoucement');
});
```

<h2>Tests</h2>

Run the test suite to check expected functionality.

```
npm test
```

Generate a code coverage report, which can be viewed by opening `/coverage/lcov-report/index.html`

```
npm run coverage
```
