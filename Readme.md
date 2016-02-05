First Fashion
=============

User Stories
------------

As a User I can view the products and their category, price and availability
information.

1. As a User I can add a product to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping
cart.
4. As a User I can apply a voucher to my shopping cart.
5. As a User I can view the total price for the products in my shopping cart
with discounts applied.
6. As a User I am alerted when I apply an invalid voucher to my shopping
cart.
7. As a User I am unable to Out of Stock products to the shopping cart.

My Approach
-----------

I decided to use AngularJS as it's a front end case study. I developed a one page application with two controllers, one for the page and one for the shopping basket. I created a service for the basket functions and a factory for the http request to the .json files in assets/resources. I used partials to build the different elements of the page. For the product images I just referenced a url for images found on the internet. To view the products click on a gender and then click on a category. The page is fully responsive to the media size.

To Do
-----

Finish setting up and add feature tests.

Installation
------------

Navigate to root directory of the project:

```sh
$ bower install 
$ npm install
```
To run locally:

```sh
$ node server.js
```
or visit live site hosted on heroku - [**First Fashion**](https://polar-plains-66246.herokuapp.com/).

Testing
-------

To run unit tests (44 tests):

```sh
$ karma start tests/unit/karma.conf.js
```


To run feature tests ( tests): - not finished yet

In one terminal run:
```sh
$ webdriver-manager update
$ webdriver-manager start
```
In another terminal, run:
```sh
$ node server.js
```
In a third terminal run:
```sh
$ protractor tests/e2e/conf.js
```