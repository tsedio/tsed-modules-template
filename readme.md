<div style="text-align: center;" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a><br />
</div>

<h1 class="text-align: center;" align="center">Ts.ED Workspaces example</h1>

[![Build & Release](https://github.com/tsedio/tsed-modules-template/actions/workflows/build.yml/badge.svg)](https://github.com/tsedio/tsed-modules-template/actions/workflows/build.yml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![backers](https://opencollective.com/tsed/tiers/badge.svg)](https://opencollective.com/tsed)

Welcome on Ts.ED modules template. 

Use this template to bootstrap a repository configured with GithubAction to deploy NPM modules on Github packages and/or NPM
registry. 

This template use [Ts.ED MonoRepoUtils](https://github.com/tsedio/tsed-monorepo-utils) to package modules inside the `packages` directory.

## Configuration
### Repository

Replace the follow `tsed-preview` text by your repository name.

### Create package

You have a simple package example in `packages/preview`. Rename it or copy this package example.

Then edit the `package.json` and replace the package name by your desired package name.

### Registries configuration

Inside the root `package.json` change the registries:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "monorepo": {
    "productionBranch": "production",
    "developBranch": "production",
    "registries": [
      "https://registry.npmjs.org/"
    ]
  }
}
```

To deploy on NPM, configure the `NPM_TOKEN` env variable in your Github secret:

See GitHub Action configuration [here](https://github.com/tsedio/tsed-modules-template/blob/production/.github/workflows/build.yml#L75):

```yaml
  - name: Release packages
    env:
      CI: true
      GH_TOKEN: ${{ secrets.GH_TOKEN }}
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```



## Install a package from GitHub

Ask Ts.ED team on slack to get an uniq personal GH_TOKEN.

Then add on your project (or on profile level) a `.npmrc` file with the following content:

```
@tsedio:registry=https://npm.pkg.github.com
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
    "@tsedio/preview": "1.0.4"
  }
}
```

## Contributors
Please read [contributing guidelines here](./CONTRIBUTING.md).

<a href="https://github.com/tsedio/tsed/graphs/contributors"><img src="https://opencollective.com/tsed/contributors.svg?width=890" /></a>


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

