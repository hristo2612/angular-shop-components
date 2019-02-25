# Angular Shop Components
[![Build Status](https://travis-ci.org/hristo2612/angular-shop-components.svg?branch=master)](https://travis-ci.org/hristo2612/angular-shop-components)
[![codecov](https://codecov.io/gh/hristo2612/angular-shop-components/branch/master/graph/badge.svg)](https://codecov.io/gh/hristo2612/angular-shop-components)
[![npm version](https://badge.fury.io/js/angular-confirmation-popover.svg)](http://badge.fury.io/js/angular-confirmation-popover)
[![GitHub issues](https://img.shields.io/github/issues/hristo2612/angular-shop-components.svg)](https://github.com/hristo2612/angular-shop-components/issues)
[![GitHub stars](https://img.shields.io/github/stars/hristo2612/angular-shop-components.svg)](https://github.com/hristo2612/angular-shop-components/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hristo2612/angular-shop-components/master/LICENSE)

## Demo
https://hristo2612.github.io/angular-shop-components/demo

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

Npm package containing all necessary components for creating a reusable online shop


## Installation

Install through npm:
```
npm install --save angular-shop-components
```

Then use it in your app on a component:

```typescript
 // include bootstrap - both v3 and v4 are supported
 // if not using bootstrap you could implement the popover styles yourself
import 'bootstrap/dist/css/bootstrap.css';
import { NgModule, Component } from '@angular/core';
import { ConfirmationPopoverModule } from 'angular-shop-components';

// first add it to your apps module
@NgModule({
  declarations: [MyComponent],
  imports: [
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  bootstrap: [MyComponent]
})
class MyModule {}

// now use it within your component
@Component({
  selector: 'my-component',
  template: `
    <button
      class="btn btn-default"
      mwlConfirmationPopover
      [popoverTitle]="popoverTitle"
      [popoverMessage]="popoverMessage"
      placement="left"
      (confirm)="confirmClicked = true"
      (cancel)="cancelClicked = true">
      Click me!
    </button>
  `
})
class MyComponent {
  public popoverTitle: string = 'Popover title';
  public popoverMessage: string = 'Popover description';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
}

```

You may also find it useful to view the [demo source](https://github.com/hristo2612/angular-shop-components/blob/master/demo/demo.component.ts).

## Documentation
All documentation is auto-generated from the source via compodoc and can be viewed here:
https://hristo2612.github.io/angular-shop-components/docs/

The main `mwlConfirmationPopover` directive options can be viewed [here](https://hristo2612.github.io/angular-shop-components/docs/directives/ConfirmationPopover.html).

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
```bash
npm run release
```

## License

MIT
