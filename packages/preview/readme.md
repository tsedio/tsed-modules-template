<div style="text-align: center;" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a><br />
</div>

<h1 class="text-align: center;" align="center">Ts.ED package example</h1>

[![Build & Release](https://github.com/tsedio/tsed-modules-template/actions/workflows/build.yml/badge.svg)](https://github.com/tsedio/tsed-modules-template/actions/workflows/build.yml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![backers](https://opencollective.com/tsed/tiers/badge.svg)](https://opencollective.com/tsed)

<p style="text-align: center" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

Fake package to test deploy on Github package.

## Install a package from Github

Ask Ts.ED team on slack to get an uniq personal GH_TOKEN.

Then add on your project (or on profile level) a `.npmrc` file with the following content:

```
@tsed-modules-template:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=GH_TOKEN
```

Replace the `GH_TOKEN` by your token or by `${GH_TOKEN}` if you want to use env variable.

If you use yarn (v1), you can also add a `.yarnrc` with the following content:

```
"@tsedio:registry" "https://npm.pkg.github.com/tsedio"
```

Then add the package to you package.json:

```
{
  "name": "@project/server",
  "version": "1.0.0",
  "description": "A Server based on Ts.ED",
  "main": "index.js",
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@tsedio/preview": "1.0.8"
  }
}
```

## Contributors
Please read [contributing guidelines here](https://tsed.io/CONTRIBUTING.html)

<a href="https://github.com/tsedio/ts-express-decorators/graphs/contributors"><img src="https://opencollective.com/tsed/contributors.svg?width=890" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/tsed#backer)]

<a href="https://opencollective.com/tsed#backers" target="_blank"><img src="https://opencollective.com/tsed/tiers/backer.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/tsed#sponsor)]

## License

The MIT License (MIT)

Copyright (c) 2016 - 2021 Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
