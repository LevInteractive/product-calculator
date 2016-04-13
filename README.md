# Product Calculator

Your objective is to build a product calculator that allows you to add and
remove products while calculating the cost of the products as you change them.

## Wireframes

ADD NEW PRODUCT _(button)_

*Product* | *Quantity* | *Cost* | *Action*
--- | --- | --- | ---
Roofing | 100 | $425 | REMOVE _(button)_
Window | 5 | $275 | REMOVE _(button)_

*Total:* $700

----------------------------------------------

## Code Guidelines

* Use React + es6 + modules + clean code
* You can use flux inspired architecture.
* You should not need to add any custom css. Simply use [React Bootstrap](http://react-bootstrap.github.io/components.html). The CSS [is already included](server/app.html).
* You can use any other framework/lib you would like, but simplicity is best.
* Don't use jQuery. kthx.
* No need to touch anything in /server/.
* Calculator must load in initial products upon page load (api/products).
* Only use `npm` as a dependency manager (not bower or anything else). Just add to the the current [package.json](src/package.json) file.
* Bonus points for unit testing.

## Getting Started

1. Clone the project and `cd` in to it.
2. Start up the server with by running `node server/server.js`.
3. Open in a new shell and `cd` in to src/.
4. Run `npm install` and finally, `gulp watch`. (make sure you have gulp installed)
5. Now you can make changes to files in ProductCalculator and a new server/app.js will automatically be compiled for you.

```bash
$ ~ node server/server.js

----------------------------------------------------------
Server listening on localhost:3030.

 * App URL: http://localhost:3030
 * Saved products: http://localhost:3030/api/products
 * Products index: http://localhost:3030/api/all-products
-----------------------------------------------------------
```

There are 2 API ajax requests you'll need to make:

  1. *http://localhost:3030/api/all-products* Retrieves all the products available to the calculator.
  2. *http://localhost:3030/api/products* Retrieves products that are to be pre-loaded in to the calculator.

## Data Structures

#### A product (/all-products)

This will be a collection of all available products in the (fake) database.

```json
[
  {
    "id": <int>,
    "name": <string>
    "fixed": <boolean>,
    "cost": <float>
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
    "id": <int>,
    "productId": <int>,
    "quantity": <int>
  },
  ...
```

* `id`: A unqiue id.
* `productId`: This id corresponds to the product's id.
* `quantity`: The number of products/units. If not fixed, this will be used to calculate cost.
