# [actual](../../)

#### Determine actual `@media` breakpoints for [CSS <b>range</b> features](http://dev.w3.org/csswg/mediaqueries4/#media-descriptor-table)

- <b>actual</b> calculates responsive breakpoints that <em>accurately</em> match CSS media queries
- <b>actual</b> is based on [this gist](https://gist.github.com/ryanve/7924792)

## API ([0.1](../../releases))

### actual(feature, unit?, init?, step?)

- <var>feature</var>: [CSS range feature name](http://dev.w3.org/csswg/mediaqueries4/#media-descriptor-table)
- <var>unit</var>: applicable CSS unit (default: unitless)
- <var>init</var>: initial guess (default: `1`)
- <var>step</var>: step size (default: varies by unit)

```js
actual('width', 'em') // => 87.40625
actual('device-width', 'px') // => 1440
actual('resolution', 'dpi') // => 96
actual('color') // => 10
```

## Compatibility

- Works in Chrome 9+, FF6+, IE9+, Opera 12.1, Safari 5.1 or elsewhere via [`matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window.matchMedia#Browser_compatibility) or `msMatchMedia`
- Results depend on browser `@media` support for the feature in question

## Contribute

Contribute by making edits in [`/src`](./src) or reporting [issues](../../issues).

```sh
$ npm install
$ grunt jshint:src
```

## Fund

<b>[Tip the developer](https://www.gittip.com/ryanve/)</b> =)

## License

[MIT](LICENSE.md)