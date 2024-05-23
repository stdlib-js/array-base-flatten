<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# flatten

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Flatten an n-dimensional nested array.

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-flatten
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var flatten = require( '@stdlib/array-base-flatten' );
```

#### flatten( x, shape, colexicographic )

Flattens an n-dimensional nested array.

```javascript
var x = [ [ 1, 2 ], [ 3, 4 ] ];

var out = flatten( x, [ 2, 2 ], false );
// returns [ 1, 2, 3, 4 ]
```

To flatten in colexicographic order, provide a third argument equal to `true`.

```javascript
var x = [ [ 1, 2 ], [ 3, 4 ] ];

var out = flatten( x, [ 2, 2 ], true );
// returns [ 1, 3, 2, 4 ]
```

#### flatten.assign( x, shape, colexicographic, out, stride, offset )

Flattens an n-dimensional nested array and assigns elements to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = [ [ 1, 2 ], [ 3, 4 ] ];
var out = new Float64Array( 4 );

var y = flatten.assign( x, [ 2, 2 ], false, out, 1, 0 );
// returns <Float64Array>[ 1, 2, 3, 4 ]

var bool = ( y === out );
// returns true

y = flatten.assign( x, [ 2, 2 ], true, out, 1, 0 );
// returns <Float64Array>[ 1, 3, 2, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both functions assume that all nested arrays have the same length (i.e., the input array is **not** a ragged array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var flatten = require( '@stdlib/array-base-flatten' );

// Define a 2x2x1x2x2 array:
var x = [
    [
        [
            [
                [ 1, 2 ], [ 3, 4 ]
            ]
        ],
        [
            [
                [ 5, 6 ], [ 7, 8 ]
            ]
        ]
    ],
    [
        [
            [
                [ 9, 10 ], [ 11, 12 ]
            ]
        ],
        [
            [
                [ 13, 14 ], [ 15, 16 ]
            ]
        ]
    ]
];

var out = flatten( x, [ 0, 0, 0, 0, 0 ], false );
// returns []

out = flatten( x, [ 0, 0, 0, 0, 0 ], true );
// returns []

out = flatten( x, [ 1, 1, 1, 1, 1 ], false );
// returns [ 1 ]

out = flatten( x, [ 1, 1, 1, 1, 1 ], true );
// returns [ 1 ]

out = flatten( x, [ 1, 2, 1, 2, 2 ], false );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8 ]

out = flatten( x, [ 1, 2, 1, 2, 2 ], true );
// returns [ 1, 5, 3, 7, 2, 6, 4, 8 ]

out = flatten( x, [ 2, 2, 1, 2, 2 ], false );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

out = flatten( x, [ 2, 2, 1, 2, 2 ], true );
// returns [ 1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-base/flatten-by`][@stdlib/array/base/flatten-by]</span><span class="delimiter">: </span><span class="description">flatten an n-dimensional nested array according to a callback function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-flatten.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-flatten

[test-image]: https://github.com/stdlib-js/array-base-flatten/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-flatten/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-flatten/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-flatten?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-flatten.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-flatten/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-flatten/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-flatten/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-flatten/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-flatten/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-flatten/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-flatten/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-flatten/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-flatten/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/base/flatten-by]: https://github.com/stdlib-js/array-base-flatten-by

<!-- </related-links> -->

</section>

<!-- /.links -->
