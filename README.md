# Product Calculator

##### Overview

Your objective is to build a product calculator which allows you to add and
remove products while calculating the cost of the products as you change them.

The component will need to have a button to add a new product, a table (or
table-like) display of current products, a button to remove a product, and
finally a total cost for all products. The cost is calculated differently based
on whether or not the product is considered `fixed` (details below). Lastly, the
component will need to load some initial products via a ajax request to the fake
api (again, details below).

There are 2 API ajax requests you'll need to make:

  1. *http://localhost:3030/api/all-products* Retrieves all the products available to the calculator.
  2. *http://localhost:3030/api/products* Retrieves products that are to be pre-loaded in to the calculator.


##### Wireframes

ADD NEW PRODUCT _(add button + a dropdown containing all available products)_

*Product* | *Quantity* | *Cost* | *Action*
--- | --- | --- | ---
Roofing | 100 _(live input - ability to edit. Defaults to 1.)_ | $425 | REMOVE _(button)_
Window | 5 _(live input - ability to edit. Defaults to 1.)_ | $275 | REMOVE _(button)_

*Total:* $700

----------------------------------------------

## Project Guidelines

* Use React + es6 + modules + clean code
* You can use flux inspired architecture.
* You should not need to add any custom css. Simply use [React Bootstrap](http://react-bootstrap.github.io/components.html). The CSS [is already included](server/app.html).
* You can use any other framework/lib you would like, but simplicity is best.
* You can not use jQuery. kthx.
* You can only use `npm` as a dependency manager (not bower or anything else). Just add to the the current [package.json](src/package.json) file.
* You do not need to touch anything in /server/.
* Calculator must load in initial products upon page load (api/products).
* Bonus points for unit testing.
* Pay attention to the dot files in the root of the project.

## Getting Started

Dependencies:

* node.js >= v4.1.0
* gulp (`npm install -g gulp`)

1. Clone the project and `cd` in to it.
2. Start up the server with by running `node server/server.js`.
3. Open in a new shell and `cd` in to src/.
4. Run `npm install` and finally, `gulp watch`. (make sure you have gulp installed)
5. Now you can make changes to files in ProductCalculator and a new [server/app.js](server/app.js) will automatically be compiled for you.

```bash
$ ~ node server/server.js

----------------------------------------------------------
Server listening on localhost:3030.

 * App URL: http://localhost:3030
 * Saved products: http://localhost:3030/api/products
 * Products index: http://localhost:3030/api/all-products
-----------------------------------------------------------
```

## Data Structures

#### A product (/all-products)

This will be a collection of all available products in the (fake) database.

```json
[
  {
    "id": 3,
    "name": "Name of product",
    "fixed": false,
    "cost": 3.50
  },
  ...
```

* `id`: This will be a unique id for the product.
* `name`: The name of the product.
* `fixed`: Specifies whether or not this should be calculated by the quanitity or not. For example: if *not* fixed, then you would do `cost` * `quanity` = cost. If *is* fixed, the cost would simply just be the `cost`.
* `cost`: The amount the product costs (if not fixed, the amount a single unit costs)

#### A saved product (/products)

This will be a collection of products that have been saved to the (fake) database.
The will be loaded to the calculator initially.

```json
[
  {
    "id": 0,
    "productId": 3,
    "quantity": 200
  },
  ...
```

* `id`: A unqiue id.
* `productId`: This id corresponds to the product's id.
* `quantity`: The number of products/units. If not fixed, this will be used to calculate cost.
