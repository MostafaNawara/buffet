<div align="center">
  <a href="https://buffetjs.io">
    <img height="35" src="https://cldup.com/ViG2KxiXwc-3000x3000.png" />
  </a>

<br /><br />

<strong>React Components Library made with styled-components</strong>

  <p align="center">
    <a href="https://www.npmjs.org/package/buffetjs">
      <img src="https://img.shields.io/npm/dm/buffet.svg" alt="Monthly download on NPM" />
    </a>
    <a href="https://travis-ci.org/strapi/buffet">
      <img src="https://travis-ci.org/strapi/buffet.svg?branch=master" alt="Travis Build Status" />
    </a>
    <a href="http://slack.strapi.io">
      <img src="https://strapi-slack.herokuapp.com/badge.svg" alt="Strapi on Slack" />
    </a>
  </p>
</div>

## Getting Started

### Installation

Using yarn

```bash
yarn add buffetjs
```

or npm

```bash
npm install buffetjs
```

### Example

Import buffet.js into your project as follows:

```js
import React from 'react';
import {
  Enumeration,
} from 'buffetjs';

const Page = () => (
  <header>
    <p>Title</p>
  </header>
  <section>
    <Enumeration
      name="enumeration"
      value="milk"
      options={[
        {
          value: 'flour',
          label: 'Flour',
        },
        {
          value: 'milk',
          label: 'Milk',
        },
        {
          value: 'butter',
          label: 'Butter',
        },
      ]}
    />
  </section>
  <footer>
    Made with love by Strapi
  </footer>
);

export default Page;
```

## Documentation

<strong>See the documentation at [buffetjs.io/storybook](https://buffetjs.io/storybook) for more informations.</strong>
