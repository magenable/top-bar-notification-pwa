# Top Bar Notification

**Top Bar Notification** is a Magento PWA Studio extension that allow to display simple notice at the top of the page.

## Installation

**Prerequisite:** In Magento 2 instance should be installed next module: https://packagist.org/packages/magenable/module-top-bar-notification 

1. Add dependency to PWA Studio project

```
yarn add @magenable/top-bar-notification
```

2. Wrap the module in your local-intercept.js file

```
const { Targetables } = require('@magento/pwa-buildpack');
const targetables = Targetables.using(targets);
const topBarNotification = require('@magenable/top-bar-notification/src/targets');
topBarNotification(targetables);
```

3. Re-build your PWA project

## Upgrade

```
yarn upgrade @magenable/top-bar-notification
```

## Configuration

For more information about configuration see readme in the next module https://packagist.org/packages/magenable/module-top-bar-notification.

## Storefront view:

![top-bar-notification-example-1](https://user-images.githubusercontent.com/34573954/142558932-73c7493d-60d8-4fef-a627-eaba7fa231a2.png)

![top-bar-notification-example-2](https://user-images.githubusercontent.com/34573954/142558938-c46f78bf-4d5c-4b3c-bbb4-4523e1a11792.png)
